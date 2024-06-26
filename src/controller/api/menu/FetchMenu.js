import { supabase } from '../../supabaseClient';

async function FetchMenu(allergyData) {
  try {
    // 1. MenuTable에서 order_count가 큰 순서대로 3개의 메뉴를 가져오기
    const { data: topMenus, error: topMenusError } = await supabase
      .from('MenuTable')
      .select('menu, price, image_url')
      .order('order_count', { ascending: false })
      .limit(3);

    if (topMenusError) {
      console.error('Error fetching top menus:', topMenusError);
      return { error: 'An error occurred while fetching top menus' };
    }

    const top3 = topMenus.map(menu => ({
      name: menu.menu,
      price: menu.price,
      img: menu.image_url
    }));

    // 2. MenuTable에서 category에 따라 메뉴를 분류하여 가져오기
    const { data: menuData, error: menuError } = await supabase
      .from('MenuTable')
      .select('menu, price, image_url, category');

    if (menuError) {
      console.error('Error fetching menu data:', menuError);
      return { error: 'An error occurred while fetching menu data' };
    }

    const categories = ['appetizer', 'main_dish', 'dessert'];
    const categorizedMenus = {};

    categories.forEach(category => {
      categorizedMenus[category] = menuData
        .filter(menu => menu.category === category)
        .map(menu => ({
          name: menu.menu,
          price: menu.price,
          img: menu.image_url
        }));
    });

    // 3. InventoryTable과 IngredientTable을 비교하여 재고 상태 확인
    const { data: inventoryData, error: inventoryError } = await supabase
      .from('InventoryTable')
      .select('*');

    if (inventoryError) {
      console.error('Error fetching inventory data:', inventoryError);
      return { error: 'An error occurred while fetching inventory data' };
    }

    const { data: ingredientData, error: ingredientError } = await supabase
      .from('IngredientTable')
      .select('*');

    if (ingredientError) {
      console.error('Error fetching ingredient data:', ingredientError);
      return { error: 'An error occurred while fetching ingredient data' };
    }

    const soldOutMenu = [];

    ingredientData.forEach(ingredient => {
      let soldOut = false;

      for (const [key, value] of Object.entries(ingredient)) {
        if (key !== 'id' && key !== 'created_at' && key !== 'sold_out' && key !== 'menu_name') {
          const inventoryValue = inventoryData[0][key];
          if (value > inventoryValue) {
            soldOut = true;
            break;
          }
        }
      }

      if (soldOut) {
        soldOutMenu.push(ingredient.menu_name);
      }
    });

    // 4. AllergyTable에서 사용자 알러지 정보를 바탕으로 해당 알러지를 포함한 메뉴 확인
    const { data: allergyDataTable, error: allergyError } = await supabase
      .from('AllergyTable')
      .select('*');

    if (allergyError) {
      console.error('Error fetching allergy data:', allergyError);
      return { error: 'An error occurred while fetching allergy data' };
    }

    const allergyMenu = [];

    allergyDataTable.forEach(allergy => {
      const hasAllergy = Object.keys(allergyData).some(allergyType => allergyData[allergyType] && allergy[allergyType]);
      if (hasAllergy) {
        allergyMenu.push(allergy.menu_name);
      }
    });

    // 최종 응답 데이터 구성
    const response = {
      top3,
      appetizer: categorizedMenus['appetizer'],
      main_dish: categorizedMenus['main_dish'],
      dessert: categorizedMenus['dessert'],
      soldOut_menu: soldOutMenu,
      allergy_menu: allergyMenu
    };

    console.log('FetchMenu response:', response);
    return { data: response };
  } catch (error) {
    console.error('Error:', error);
    return { error: 'An error occurred during the menu fetching process' };
  }
}

export default FetchMenu;
