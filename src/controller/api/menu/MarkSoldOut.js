import { supabase } from '../../supabaseClient';

// 재료의 재고 상태를 업데이트하는 함수
async function MarkSoldOut() {
  try {
    // InventoryTable에서 모든 데이터 가져오기
    const { data: inventoryData, error: inventoryError } = await supabase
      .from('InventoryTable')
      .select('*');

    if (inventoryError) {
      console.error('Error fetching inventory data:', inventoryError);
      return { error: 'An error occurred while fetching inventory data' };
    }

    // IngredientTable에서 모든 데이터 가져오기
    const { data: ingredientData, error: ingredientError } = await supabase
      .from('IngredientTable')
      .select('*');

    if (ingredientError) {
      console.error('Error fetching ingredient data:', ingredientError);
      return { error: 'An error occurred while fetching ingredient data' };
    }

    // 업데이트할 목록
    const updates = [];

    // IngredientTable의 각 row를 확인하여 InventoryTable의 값과 비교
    ingredientData.forEach(ingredient => {
      let soldOut = false;

      // 각 재료의 값을 InventoryTable과 비교
      for (const [key, value] of Object.entries(ingredient)) {
        if (key !== 'id' && key !== 'created_at' && key !== 'sold_out' && key !== 'menu_name') {
          const inventoryValue = inventoryData[0][key]; // InventoryTable의 해당 재료 값

          if (value > inventoryValue) {
            soldOut = true;
            break;
          }
        }
      }

      // 업데이트 목록에 추가
      if (soldOut) {
        updates.push({ id: ingredient.id, sold_out: true });
      } else {
        updates.push({ id: ingredient.id, sold_out: false });
      }
    });

    // IngredientTable에서 sold_out 값을 업데이트
    for (const update of updates) {
      const { error: updateError } = await supabase
        .from('IngredientTable')
        .update({ sold_out: update.sold_out })
        .eq('id', update.id);

      if (updateError) {
        console.error(`Error updating sold_out for ingredient ID ${update.id}:`, updateError);
        return { error: `An error occurred while updating sold_out for ingredient ID ${update.id}` };
      }
    }

    // sold_out이 true인 값들을 가져오기
    const { data: soldOutIngredients, error: soldOutIngredientsError } = await supabase
      .from('IngredientTable')
      .select('id, menu_name')
      .eq('sold_out', true);

    if (soldOutIngredientsError) {
      console.error('Error fetching sold out ingredients:', soldOutIngredientsError);
      return { error: 'An error occurred while fetching sold out ingredient data' };
    }

    console.log('Sold out status updated successfully');
    return { message: 'Sold out status updated successfully', soldOutIngredients };
  } catch (error) {
    console.error('Error:', error);
    return { error: 'An error occurred during the update process' };
  }
}

// 예시 사용법
MarkSoldOut().then((response) => {
  console.log(response);
});

export default MarkSoldOut;
