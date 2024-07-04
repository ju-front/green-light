import { supabase } from '../../supabaseClient';

// 주문 데이터를 ReceiptTable에 추가하는 함수
async function CreateReceipt(orderData) {
  try {
    // 새로운 row 생성 준비
    let newRow = {
      total_price: orderData.total_price
    };

    // 주문 데이터에서 각 메뉴의 수량을 newRow에 추가
    for (const [name, quantity] of Object.entries(orderData.items)) {
      newRow[name] = quantity;
    }

    // ReceiptTable에 새로운 row 삽입
    const { data, error } = await supabase
      .from('ReceiptTable')
      .insert([newRow])
      .select('id') // 삽입된 row의 id를 선택하여 반환합니다.
      .single();

    if (error) {
      console.error('Error inserting receipt data:', error);
      return { error: 'An error occurred while inserting receipt data' };
    }

    console.log('Receipt created successfully:', data);
    return { data: { receiptID: data.id } };
  } catch (error) {
    console.error('Error:', error);
    return { error: 'An error occurred during receipt creation' };
  }
}

export default CreateReceipt;
