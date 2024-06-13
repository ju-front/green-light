import { supabase } from '../supabaseClient';

// 사용자 ID 중복 확인 및 새로운 사용자 생성 또는 업데이트 함수
async function SignUp(userID, allergyData) {
  try {
    // UserTable에서 사용자 ID 확인
    const { data: existingUser, error: checkError } = await supabase
      .from('UserTable')
      .select('userID')
      .eq('userID', userID)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking userID:', checkError);
      return { error: 'An error occurred while checking user ID' };
    }

    // ReceiptTable에서 가장 최근 행 가져오기
    const { data: receipts, error: receiptError } = await supabase
      .from('ReceiptTable')
      .select('total_price')
      .order('id', { ascending: false })
      .limit(1);

    if (receiptError) {
      console.error('Error fetching receipt data:', receiptError);
      return { error: 'An error occurred while fetching receipt data' };
    }

    if (receipts.length === 0) {
      return { error: 'No receipts found' };
    }

    const latestReceipt = receipts[0];
    const couponValue = Math.floor(latestReceipt.total_price / 10000);

    let response;
    if (existingUser) {
      // 사용자 ID가 이미 존재하면 해당 사용자 정보 업데이트
      const { data: updatedUser, error: updateError } = await supabase
        .from('UserTable')
        .update({ coupon: couponValue, ...allergyData })
        .eq('userID', userID)
        .single();

      if (updateError) {
        console.error('Error updating user:', updateError);
        return { error: 'An error occurred while updating user' };
      }

      response = { message: 'User updated and coupon set successfully', coupon: updatedUser ? updatedUser.coupon : null };
    } else {
      // 사용자 ID가 존재하지 않으면 새로운 사용자 추가
      const { data: newUser, error: insertError } = await supabase
        .from('UserTable')
        .insert([{ userID, coupon: couponValue, ...allergyData }])
        .single();

      if (insertError) {
        console.error('Error inserting new user:', insertError);
        return { error: 'An error occurred while inserting new user' };
      }

      response = { message: 'User signed up and coupon set successfully', coupon: newUser ? newUser.coupon : null };
    }

    console.log(response.message, response.coupon);
    return response;
  } catch (error) {
    console.error('Error:', error);
    return { error: 'An error occurred during sign-up' };
  }
}

export default SignUp;
