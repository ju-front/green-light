import { supabase } from '../supabaseClient';

// 메뉴 이름 변환 매핑
const menuNameMapping = {
  bruschetta: '브루스케타',
  caprese_salad: '카프레제 샐러드',
  caesar_salad: '시저 샐러드',
  maragherita_pizza: '마르게리타 피자',
  alfredo_pasta: '알프레도 파스타',
  bolognese_spaghetti: '볼로네제 스파게티',
  shrimp_risotto: '새우 리조또',
  focaccia: '포카치아',
  minestrone_soup: '미네스트로네 수프',
  gelato: '젤라토',
  panna_cotta: '판나 코타',
  pesto_pasta: '페스토 파스타',
  espresso: '에스프레소'
};

// 가장 마지막 row를 가져오고, 0보다 큰 값들과 가격 정보를 JSON 형식으로 반환하는 함수
async function ShowReceipt() {
  try {
    // ReceiptTable에서 가장 마지막 row 가져오기
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

    // MenuTable에서 모든 데이터 가져오기
    const { data: menuData, error: menuError } = await supabase
      .from('MenuTable')
      .select('*');

    if (menuError) {
      console.error('Error fetching menu data:', menuError);
      return { error: 'An error occurred while fetching menu data' };
    }

    // 0보다 큰 값들을 가지는 컬럼과 그 수를 결과에 추가
    for (const [key, value] of Object.entries(latestReceipt)) {
      if (value > 0 && key !== 'id' && key !== 'created_at' && key !== 'total_price') {
        const menu = menuData.find(item => item.menu === key);
        if (menu) {
          const translatedName = menuNameMapping[key] || key;
          result[translatedName] = { quantity: value, price: menu.price };
        }
      }
    }

    // total_price 추가
    result.total_price = latestReceipt.total_price;

    console.log('Latest receipt data:', result);
    return { message: 'Receipt data fetched successfully', data: result };
  } catch (error) {
    console.error('Error:', error);
    return { error: 'An error occurred during receipt data fetching' };
  }
}

export default ShowReceipt;
