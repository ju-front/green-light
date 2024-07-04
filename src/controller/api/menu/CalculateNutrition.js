import { supabase } from '../../supabaseClient';

async function CalculateNutrition(orderData) {
  try {
    // 주문 항목의 메뉴 이름을 추출
    const menuNames = Object.keys(orderData);

    // NutritionTable에서 해당 메뉴 이름에 대한 영양 정보를 가져오기
    const { data: nutritionData, error: nutritionError } = await supabase
      .from('NutritionTable')
      .select('*')
      .in('menu_name', menuNames);

    if (nutritionError) {
      console.error('Error fetching nutrition data:', nutritionError);
      return { error: 'An error occurred while fetching nutrition data' };
    }

    // 총 영양성분을 계산
    const totalNutrition = {
      carbohydrate: 0,
      protein: 0,
      fat: 0,
      sodium: 0,
      cholesterol: 0
    };

    menuNames.forEach(name => {
      const nutrition = nutritionData.find(nutri => nutri.menu_name === name);
      if (nutrition) {
        totalNutrition.carbohydrate += nutrition.carbohydrate * orderData[name];
        totalNutrition.protein += nutrition.protein * orderData[name];
        totalNutrition.fat += nutrition.fat * orderData[name];
        totalNutrition.sodium += nutrition.sodium * orderData[name];
        totalNutrition.cholesterol += nutrition.cholesterol * orderData[name];
      }
    });

    return totalNutrition;
  } catch (error) {
    console.error('Error:', error);
    return { error: 'An error occurred during the nutrition calculation' };
  }
}

export default CalculateNutrition;
