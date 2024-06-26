import { supabase } from '../../supabaseClient';

// 주문 데이터를 ReceiptTable에 추가하는 함수
async function CreateReceipt(orderData) {
  try {
    // 새로운 row 생성 준비
    let newRow = {
      total_price: orderData.total
    };

    // 주문 데이터에서 각 메뉴의 수량을 newRow에 추가
    orderData.items.forEach(item => {
      newRow[item.name] = item.quantity;
    });

    // ReceiptTable에 새로운 row 삽입
    const { data, error } = await supabase
      .from('ReceiptTable')
      .insert([newRow], { returning: 'minimal' });

    if (error) {
      console.error('Error inserting receipt data:', error);
      return { error: 'An error occurred while inserting receipt data' };
    }

    console.log('Receipt created successfully:', data);
    return { message: 'Receipt created successfully', data };
  } catch (error) {
    console.error('Error:', error);
    return { error: 'An error occurred during receipt creation' };
  }
}

export default CreateReceipt;
