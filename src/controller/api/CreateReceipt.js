import { supabase } from '../supabaseClient';


async function CreateReceipt(order) {
  try {
    let newRow = {
      total_price: order.total
    };
    order.items.forEach(item => {
      newRow[item.name] = item.quantity;
    });
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
