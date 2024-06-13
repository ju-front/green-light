import { supabase } from '../supabaseClient';

// 사용자 ID 중복 확인 및 새로운 사용자 생성 함수
async function SignUp(userID, allergyData) {
  try {
    // UserTable에서 사용자 ID 중복 확인
    const { data: existingUser, error: checkError } = await supabase
      .from('UserTable')
      .select('userID')
      .eq('userID', userID)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking userID:', checkError);
      return { error: 'An error occurred while checking user ID' };
    }

    if (existingUser) {
      return { error: 'User ID already exists' };
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

    // 새로운 사용자 추가
    const { data: newUser, error: insertError } = await supabase
      .from('UserTable')
      .insert([{ userID, coupon: couponValue, ...allergyData }])
      .single();

    if (insertError) {
      console.error('Error inserting new user:', insertError);
      return { error: 'An error occurred while inserting new user' };
    }

    console.log('User signed up and coupon set successfully:', newUser);
    return { message: 'User signed up and coupon set successfully', coupon: newUser.coupon };
  } catch (error) {
    console.error('Error:', error);
    return { error: 'An error occurred during sign-up' };
  }
}

export default SignUp;
