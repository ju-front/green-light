import { supabase } from '../../supabaseClient';

// ����� ID�� Ȯ���ϰ� �˷��� ���� ��ȸ�ϴ� �Լ�
async function SignIn(userID) { //userID: ����ڰ� �Է��� id
  try {
    // UserTable���� ����� ID �� �˷��� �� Ȯ��
    const { data: user, error } = await supabase
      .from('UserTable')
      .select('userID, gluten, dairy, egg, shellfish, nut, soy, fish, celery, mustard') //����ڰ� ������ �ִ� �˷���(true or false)
      .eq('userID', userID)
      .maybeSingle();

    if (error) {
      console.error('Error checking userID:', error);
      return { error: 'An error occurred while checking user ID' };
    }

    if (!user) {    //UserTable.userID�� �ش� id�� ����
      return { error: 'User ID not found' };
    }

    console.log('User signed in:', user);   //UserTable.userID�� �ش� id�� ����
    return { message: 'Signed in successfully', user };
  } catch (error) {
    console.error('Error:', error);
    return { error: 'An error occurred during sign-in' };
  }
}

// ���� ����
SignIn('abc123').then((response) => {
  console.log(response);
});

export default SignIn;
