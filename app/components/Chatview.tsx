import { Paperclip, Send } from "lucide-react"

export default function ChatView() {
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
          <h1 className="text-2xl font-bold text-violet-600">What can I help with?</h1>
          <p className="text-sm text-gray-500">Your AI-Powered Support Assistant</p>
        </div>

        {/* Chat Messages */}
        <div className="space-y-4">
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-violet-600 px-4 py-2 text-white">
              Hey! What can I help you with?
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl rounded-tr-none bg-gray-100 px-4 py-2">
              Can I customize vBot for my business?
            </div>
          </div>
        </div>
      </main>

      {/* Chat Input */}
      <div className="fixed bottom-[72px] left-0 right-0 border-t bg-white p-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Start chatting |"
            className="flex-1 rounded-lg border bg-white px-4 py-2 outline-none focus:border-violet-600"
          />
          <button className="rounded-lg p-2 hover:bg-gray-100">
            <Paperclip className="h-5 w-5 text-gray-600" />
          </button>
          <button className="rounded-lg bg-violet-600 p-2 text-white hover:bg-violet-700">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 flex items-center justify-around border-t bg-white p-4">
        <NavItem label="Home" isActive={false} />
        <NavItem label="Chats" isActive={true} />
        <NavItem label="Tickets" isActive={false} />
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

