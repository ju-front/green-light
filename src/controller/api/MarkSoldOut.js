import { supabase } from './supabaseClient';

// 재고 상태 업데이트 함수
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

    // 재고 상태를 업데이트할 목록
    const updates = [];

    // InventoryTable의 각 row를 확인하여 IngredientTable의 값과 비교
    // 재료와 비교하여 1개의 메뉴라도 만들 수 없는 양의 재료가 남았을시, 해당 재료를 포함하고 있는 메뉴들을 모두 SoldOut처리
    ingredientData.forEach(ingredient => {
      const inventoryItem = inventoryData.find(item => item.ingredient_id === ingredient.id);
      if (inventoryItem) {
        const isSoldOut = inventoryItem.quantity < 1;
        const isNotSoldOut = inventoryItem.quantity >= 1;
        if (isSoldOut) {
          updates.push({ id: ingredient.id, sold_out: true });
        } else if (isNotSoldOut) {
          updates.push({ id: ingredient.id, sold_out: false });
        }
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

    // IngredientTable에서 모든 sold_out 값 가져오기
    // SoldOut일 경우 true, 아닐경우 false
    const { data: updatedIngredients, error: updatedIngredientsError } = await supabase
      .from('IngredientTable')
      .select('id, sold_out');

    if (updatedIngredientsError) {
      console.error('Error fetching updated ingredients:', updatedIngredientsError);
      return { error: 'An error occurred while fetching updated ingredient data' };
    }

    console.log('Sold out status updated successfully');
    return { message: 'Sold out status updated successfully', ingredients: updatedIngredients };
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
