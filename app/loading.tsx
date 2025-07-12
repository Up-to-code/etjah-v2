export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5F3F0] text-[#1A1A1A]">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-[#D4B896]"></div>
      <p className="mt-4 text-lg font-medium">جاري التحميل...</p>
      <p className="text-sm text-gray-600">يرجى الانتظار قليلاً</p>
    </div>
  )
}
