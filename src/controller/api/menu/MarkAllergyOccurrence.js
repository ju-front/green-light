import { supabase } from '../../supabaseClient';

// 사용자 알러지 정보를 바탕으로 해당 알러지를 포함한 메뉴 이름을 반환하는 함수
async function MarkAllergyOccurrence(allergyData) {
  try {
    // AllergyTable에서 모든 데이터 가져오기
    const { data: allergyDt, error: allergyError } = await supabase
      .from('AllergyTable')
      .select('*');

    if (allergyError) {
      console.error('Error fetching allergy data:', allergyError);
      return { error: 'An error occurred while fetching allergy data' };
    }

    // 알러지 발생 메뉴 목록
    const allergyOccurrenceMenus = [];

    // AllergyTable의 각 메뉴를 확인하여 사용자의 알러지 정보와 비교
    allergyDt.forEach(allergy => {
      const hasAllergy = Object.keys(allergyData).some(allergyType => {
        return allergyData[allergyType] && allergy[allergyType];
      });

      if (hasAllergy) {
        allergyOccurrenceMenus.push(allergy.menu_name);
      }
    });

    return { message: 'Allergy occurrence marked successfully', menus: allergyOccurrenceMenus };
  } catch (error) {
    console.error('Error:', error);
    return { error: 'An error occurred during the allergy marking process' };
  }
}

// 예시 사용법
const allergyData = {
  gluten: true,
  dairy: false,
  egg: true,
  shellfish: false,
  nut: true,
  soy: false,
  fish: true,
  celery: false,
  mustard: true
};

MarkAllergyOccurrence(allergyData).then((response) => {
  console.log(response);
});

export default MarkAllergyOccurrence;
