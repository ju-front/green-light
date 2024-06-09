// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// 환경 변수에서 Supabase URL과 키를 불러옵니다.
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)
