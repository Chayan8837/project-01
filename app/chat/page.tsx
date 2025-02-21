import { Paperclip, Send } from "lucide-react"

export default function ChatView() {
  return (
    <div className="min-h-screen bg-white">

      {/* Main Content */}
      <main className="p-4 flex flex-col justify-between">

        <div className="mb-6 w-full px-20 py-10 text-center">
          <h1 className="text-4xl font-bold text-blue-600">What can I help with?</h1>
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
            <div className="max-w-[80%] rounded-2xl rounded-tr-none bg-gray-100 px-4 py-2 text-black">
              Can I customize vBot for my business?
            </div>
          </div>
        </div>
      </main>

      {/* Chat Input */}
      <div className="fixed bottom-[72px] left-0 right-0  bg-white p-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Start chatting |"
            className="flex-1 text-black rounded-full border bg-white px-4 py-2 outline-none focus:border-violet-600"
          />
          <button className=" absolute right-16 rounded-lg p-2 hover:bg-gray-100 mt-1">
            <Paperclip className="h-5 w-5 text-gray-600" />
          </button>
          <button className="r absolute  right-6 rounded-lg p-2 mt-1  text-white hover:bg-violet-700">
            <Send className="h-5 w-5 text-black" />
          </button>
        </div>
      </div>

    </div>
  )
}


