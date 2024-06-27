import { supabase } from '../../supabaseClient';

const ShowReceipt = async (receiptID) => {
  try {
    // ReceiptTable에서 해당 id의 row 가져오기
    const { data: receiptData, error: receiptError } = await supabase
      .from('ReceiptTable')
      .select('*')
      .eq('id', receiptID)
      .single();

    if (receiptError) {
      console.error('Error fetching receipt data:', receiptError);
      return { error: 'An error occurred while fetching receipt data' };
    }

    // 결과를 담을 객체 초기화
    const result = {
      receipt: {},
      total_price: receiptData.total_price,
      created_at: receiptData.created_at
    };

    // ReceiptTable에서 0이 아닌 값의 colum 이름(메뉴 이름)과 값 추출
    const menuItems = Object.keys(receiptData).filter(key => 
      receiptData[key] > 0 && key !== 'id' && key !== 'created_at' && key !== 'total_price'
    );

    // MenuTable에서 해당 메뉴들의 가격 가져오기
    const { data: menuData, error: menuError } = await supabase
      .from('MenuTable')
      .select('menu, price')
      .in('menu', menuItems);

    if (menuError) {
      console.error('Error fetching menu data:', menuError);
      return { error: 'An error occurred while fetching menu data' };
    }

    // 메뉴 이름과 가격을 result 객체에 추가
    menuItems.forEach(item => {
      const menuItem = menuData.find(menu => menu.menu === item);
      if (menuItem) {
        result.receipt[item] = {
          quantity: receiptData[item],
          price: menuItem.price
        };
      }
    });

    console.log('Receipt data fetched successfully:', result);
    return { data: result };
  } catch (error) {
    console.error('Error:', error);
    return { error: 'An error occurred during receipt data fetching' };
  }
}

export default ShowReceipt;
