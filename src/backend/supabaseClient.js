// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// 환경 변수에서 Supabase URL과 키를 불러옵니다.
// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
// const supabaseKey = process.env.REACT_APP_SUPABASE_KEY

const supabaseUrl = 'https://zgbikvyincwjemxsgohl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnYmlrdnlpbmN3amVteHNnb2hsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc4MTY3MTgsImV4cCI6MjAzMzM5MjcxOH0.iw-w9fq5_ryhvOVSqZyb9v5B1NL28j2ub_NWAKwYksA'

export const supabase = createClient(supabaseUrl, supabaseKey)