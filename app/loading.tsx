import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Loading() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] bg-[#F5F3F0] py-16">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#D4B896]" role="status">
          <span className="sr-only">جاري التحميل...</span>
        </div>
        <p className="mt-8 text-xl font-semibold text-[#1A1A1A]">جاري تحميل المحتوى...</p>
      </main>
      <Footer />
    </>
  )
}
