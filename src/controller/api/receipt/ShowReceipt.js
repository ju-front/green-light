import { supabase } from '../../supabaseClient';

async function ShowReceipt(id) {
  try {
    // ReceiptTable에서 id가 일치하는 row를 선택
    const { data: receipt, error: receiptError } = await supabase
      .from('ReceiptTable')
      .select('*')
      .eq('id', id)
      .single();

    if (receiptError) {
      console.error('Error fetching receipt data:', receiptError);
      return { error: 'An error occurred while fetching receipt data' };
    }

    if (!receipt) {
      return { error: 'No receipt found with the given ID' };
    }

    const result = {};

    const { data: menuData, error: menuError } = await supabase
      .from('MenuTable')
      .select('*');

    if (menuError) {
      console.error('Error fetching menu data:', menuError);
      return { error: 'An error occurred while fetching menu data' };
    }

    for (const [key, value] of Object.entries(receipt)) {
      if (value > 0 && key !== 'id' && key !== 'created_at' && key !== 'total_price') {
        const menu = menuData.find(item => item.menu === key);
        if (menu) {
          result[key] = { quantity: value, price: menu.price };
        }
      }
    }

    result.total_price = receipt.total_price;

    console.log('Receipt data:', result);
    return { message: 'Receipt data fetched successfully', data: { receipt: result, total_price: receipt.total_price } };
  } catch (error) {
    console.error('Error:', error);
    return { error: 'An error occurred during receipt data fetching' };
  }
}

export default ShowReceipt;
