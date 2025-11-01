import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import EventsAdminDashboard from "@/components/admin/events-admin-dashboard"

export default async function AdminEventsPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    redirect("/admin/auth/login")
  }

  // Check admin access
  const { data: admin } = await supabase.from("admins").select("*").eq("id", user.id).single()

  if (!admin) {
    redirect("/admin/auth/login")
  }

  // Fetch events
  const { data: events } = await supabase.from("events").select("*").order("date", { ascending: false })

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <EventsAdminDashboard initialEvents={events || []} user={user} />
      </div>
    </div>
  )
}
