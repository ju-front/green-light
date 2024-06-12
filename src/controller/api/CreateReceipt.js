import { supabase } from '../supabaseClient';


// 주문 데이터를 ReceiptTable에 추가하는 함수
async function CreateReceipt(order) {
  try {
    // 새로운 row 생성 준비
    let newRow = {
      total_price: order.total
    };

    // 주문 데이터에서 각 메뉴의 수량을 newRow에 추가
    order.items.forEach(item => {
      newRow[item.name] = item.quantity;
    });

    // ReceiptTable에 새로운 row 삽입 (id는 자동 생성되도록 한다)
    const { data, error } = await supabase
      .from('ReceiptTable')
      .insert([newRow], { returning: 'minimal' }); // returning을 minimal로 설정하여 응답을 최소화

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
