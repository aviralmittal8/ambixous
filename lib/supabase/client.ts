import { createClient, type SupabaseClient } from "@supabase/supabase-js"

type SupabaseEnv = {
  url: string
  anonKey: string
}

let client: SupabaseClient | null = null

const getEnv = (): SupabaseEnv | null => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("Supabase environment variables are missing. Falling back to static data.")
    }
    return null
  }

  return { url, anonKey }
}

export const getSupabaseClient = (): SupabaseClient | null => {
  const env = getEnv()
  if (!env) {
    return null
  }

  if (!client) {
    client = createClient(env.url, env.anonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
      global: {
        fetch,
      },
    })
  }

  return client
}
