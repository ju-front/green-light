import { supabase } from '../../supabaseClient';

// 사용자 ID를 확인하고 알러지 값을 조회하는 함수
async function SignIn(userID) { //userID: 사용자가 입력한 id
  try {
    // UserTable에서 사용자 ID 및 알러지 값 확인
    const { data: user, error } = await supabase
      .from('UserTable')
      .select('gluten, dairy, egg, shellfish, nut, soy, fish, celery, mustard') // 사용자가 가지고 있는 알러지(true or false)
      .eq('userID', userID)
      .maybeSingle();

    if (error) {
      console.error('Error checking userID:', error);
      return { error: 'An error occurred while checking user ID' };
    }

    if (!user) {    // UserTable.userID에 해당 id가 없음
      return { error: 'User ID not found' };
    }

    console.log('User signed in:', user);   // UserTable.userID에 해당 id가 존재
    return user;  // 알러지 정보만 포함한 응답
  } catch (error) {
    console.error('Error:', error);
    return { error: 'An error occurred during sign-in' };
  }
}

// 예시 사용법
SignIn('abc123').then((response) => {
  console.log(response);
});

export default SignIn;
