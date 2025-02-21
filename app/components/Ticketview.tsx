import { Search } from "lucide-react"

export default function TicketView() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex h-16 items-center justify-between bg-white px-4 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-violet-600" />
          <div className="h-8 w-8 rounded-full bg-violet-600" />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-violet-600">My Tickets</h1>
          <p className="text-sm text-gray-500">Track and manage your support requests in one place.</p>
        </div>

        {/* Status Tabs */}
        <div className="mb-6 flex gap-2">
          {["OPEN (3)", "CLOSED (3)", "PENDING (3)"].map((status) => (
            <button key={status} className="rounded-full bg-white px-4 py-1.5 text-sm font-medium hover:bg-violet-50">
              {status}
            </button>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="mb-4 text-lg font-semibold">Ticket Overview</h2>

          {/* Search Bar */}
          <div className="mb-4 flex items-center gap-4">
            <div className="relative flex-1">
              <input
                type="search"
                placeholder="Search Tickets"
                className="w-full rounded-lg border bg-white py-2 pl-10 pr-4 outline-none focus:border-violet-600"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700">
              Newest
            </button>
          </div>

          {/* Tickets Table */}
          <div className="overflow-hidden rounded-lg border bg-white">
            <div className="grid grid-cols-12 gap-4 border-b px-4 py-3 text-sm font-medium text-gray-500">
              <div className="col-span-1">Priority</div>
              <div className="col-span-2">Ticket ID</div>
              <div className="col-span-7">Issue Title</div>
              <div className="col-span-2">Date</div>
            </div>
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="grid grid-cols-12 gap-4 border-b px-4 py-3 text-sm last:border-0 hover:bg-gray-50"
              >
                <div className="col-span-1">
                  <div
                    className={`h-3 w-3 rounded-full ${ticket.priority === "high" ? "bg-red-500" : "bg-green-500"}`}
                  />
                </div>
                <div className="col-span-2 font-medium">#{ticket.id}</div>
                <div className="col-span-7">{ticket.title}</div>
                <div className="col-span-2 text-gray-500">{ticket.date}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 flex items-center justify-around border-t bg-white p-4">
        <NavItem label="Home" isActive={false} />
        <NavItem label="Search" isActive={false} />
        <NavItem label="Tickets" isActive={true} />
      </nav>
    </div>
  )
}

function NavItem({ label, isActive }: { label: string; isActive: boolean }) {
  return (
    <button className="flex flex-col items-center gap-1">
      <div className={`h-6 w-6 rounded-sm ${isActive ? "rounded-full bg-violet-600" : "bg-gray-200"}`} />
      <span className={`text-xs ${isActive ? "font-medium text-violet-600" : "text-gray-600"}`}>{label}</span>
    </button>
  )
}

const tickets = [
  {
    id: "10088",
    title: "Account Verification Delay",
    priority: "low",
    date: "Jan 19",
  },
  {
    id: "10043",
    title: "Payment Not Processing",
    priority: "low",
    date: "Jan 18",
  },
  {
    id: "10235",
    title: "Refund Request",
    priority: "high",
    date: "Feb 1",
  },
  {
    id: "10012",
    title: "Login Issue",
    priority: "low",
    date: "Feb 1",
  },
  {
    id: "19012",
    title: "Refund",
    priority: "low",
    date: "Feb 1",
  },
]

