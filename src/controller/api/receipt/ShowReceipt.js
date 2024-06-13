import { supabase } from '../../supabaseClient';

async function ShowReceipt() {
  try {
    const { data: receipts, error: receiptError } = await supabase
      .from('ReceiptTable')
      .select('*')
      .order('id', { ascending: false })
      .limit(1);

    if (receiptError) {
      console.error('Error fetching receipt data:', receiptError);
      return { error: 'An error occurred while fetching receipt data' };
    }

    if (receipts.length === 0) {
      return { error: 'No receipts found' };
    }

    const latestReceipt = receipts[0];
    const result = {};

    const { data: menuData, error: menuError } = await supabase
      .from('MenuTable')
      .select('*');

    if (menuError) {
      console.error('Error fetching menu data:', menuError);
      return { error: 'An error occurred while fetching menu data' };
    }

    for (const [key, value] of Object.entries(latestReceipt)) {
      if (value > 0 && key !== 'id' && key !== 'created_at' && key !== 'total_price') {
        const menu = menuData.find(item => item.menu === key);
        if (menu) {
          result[key] = { quantity: value, price: menu.price };
        }
      }
    }

    result.total_price = latestReceipt.total_price;

    console.log('Latest receipt data:', result);
    return { message: 'Receipt data fetched successfully', data: result };
  } catch (error) {
    console.error('Error:', error);
    return { error: 'An error occurred during receipt data fetching' };
  }
}

export default ShowReceipt;
