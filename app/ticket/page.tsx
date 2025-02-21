import React from 'react';
import { Search, Filter } from 'lucide-react';

const TicketContent = () => {
  return (
    <div className="p-4 bg-[#c8bce4]  min-h-screen">
      {/* Header Section */}
      <div className="mb-4">
        <h1 className="text-xl font-bold text-[#3C1DD1]">My Tickets</h1>
        <p className="text-sm text-gray-500">
          Track and manage your support requests in one place.
        </p>
      </div>

      {/* Status Tabs */}
      <div className="mb-4 flex gap-2">
        <button className="rounded-full bg-transparent border px-4 py-1.5 text-sm font-medium hover:bg-violet-50 text-green-600">
          OPEN (3)
        </button>
        <button className="rounded-full bg-transparent border px-4 py-1.5 text-sm font-medium hover:bg-violet-50 text-red-400">
          CLOSED (3)
        </button>
        <button className="rounded-full bg-transparent border px-4 py-1.5 text-sm font-medium hover:bg-violet-50 text-gray-700">
          PENDING (3)
        </button>
      </div>

      {/* Apply Filters */}
      <div className="mb-4 flex items-center gap-4">
        <button className="flex items-center gap-2  border px-4 py-2 rounded-lg bg-white hover:bg-gray-100 text-gray-700">
           Apply Filters
           <Filter className="w-4 h-4 " />
        </button>
        <button className="bg-[#3C1DD1] text-white px-4 py-2 rounded-full text-sm hover:bg-[#2D14A8]">
          Open (2)
        </button>
        <button className="bg-white border px-4 py-2 rounded-full text-sm text-gray-700 hover:bg-gray-100">
          Newest
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-4">
        <input
          type="search"
          placeholder="Search Tickets"
          className="w-full rounded-lg border bg-white py-2 pl-10 pr-4 outline-none focus:border-[#3C1DD1]"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      {/* Tickets Table */}
      <div className="w-full overflow-y-auto rounded-lg bg-transparent">
  {/* Table Header */}
  <div className="grid grid-cols-12 gap-4 px-4 py-3 text-sm font-medium text-gray-500 border-b">
    <div className="col-span-1">Priority</div>
    <div className="col-span-2">Ticket ID</div>
    <div className="col-span-7">Issue Title</div>
    <div className="col-span-2">Date</div>
  </div>

  {/* Tickets List */}
  <div className="max-h-[400px] overflow-y-auto">
    {tickets.map((ticket, index) => (
      <div
        key={ticket.id}
        className={`grid grid-cols-12 gap-4 px-4 py-3 text-sm text-black hover:bg-gray-50 ${
          index !== tickets.length - 1 ? "border-b" : ""
        }`}
      >
        <div className="col-span-1">
          <div
            className={`h-3 w-3 rounded-full ${
              ticket.priority === "high" ? "bg-red-500" : "bg-green-500"
            }`}
          />
        </div>
        <div className="col-span-2 font-medium">#{ticket.id}</div>
        <div className="col-span-7">{ticket.title}</div>
        <div className="col-span-2 text-gray-500">{ticket.date}</div>
      </div>
    ))}
  </div>
  <div className='text-black'>Load More...</div>
</div>

    </div>
  );
};

const tickets = [
  { id: "10098", title: "Account Verification Delay", priority: "low", date: "Jan 19" },
  { id: "10045", title: "Payment Not Processing", priority: "low", date: "Jan 18" },
  { id: "10235", title: "Refund Request", priority: "high", date: "Feb 1" },
  { id: "10012", title: "Login Issue", priority: "low", date: "Feb 1" },
  { id: "19012", title: "Refund", priority: "low", date: "Feb 1" },
];

export default TicketContent;
