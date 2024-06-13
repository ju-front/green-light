import { supabase } from '../supabaseClient';

async function CalculateNutrition(order) {
  try {
    // 주문 항목의 메뉴 이름을 추출
    const menuNames = order.items.map(item => item.name);

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

    order.items.forEach(item => {
      const nutrition = nutritionData.find(nutri => nutri.menu_name === item.name);
      if (nutrition) {
        totalNutrition.carbohydrate += nutrition.carbohydrate * item.quantity;
        totalNutrition.protein += nutrition.protein * item.quantity;
        totalNutrition.fat += nutrition.fat * item.quantity;
        totalNutrition.sodium += nutrition.sodium * item.quantity;
        totalNutrition.cholesterol += nutrition.cholesterol * item.quantity;
      }
    });

    return { message: 'Total nutrition calculated successfully', totalNutrition };
  } catch (error) {
    console.error('Error:', error);
    return { error: 'An error occurred during the nutrition calculation' };
  }
}

export default CalculateNutrition;
