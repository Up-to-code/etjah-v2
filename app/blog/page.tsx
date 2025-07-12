import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, User, ArrowLeft, TrendingUp, Home, DollarSign } from "lucide-react"

export const metadata = {
  title: "المدونة - اتجاه العقارية",
  description: "اقرأ أحدث المقالات والنصائح في مجال العقارات والتسويق العقاري في المملكة العربية السعودية.",
}

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "اتجاهات السوق العقاري السعودي في 2024",
    excerpt: "تحليل شامل لأحدث التطورات في السوق العقاري السعودي والفرص الاستثمارية المتاحة للمستثمرين",
    image: "/placeholder.svg?height=400&width=600",
    author: "فريق اتجاه",
    date: "15 ديسمبر 2024",
    category: "تحليل السوق",
    readTime: "5 دقائق قراءة",
  }

  const blogPosts = [
    {
      id: 2,
      title: "كيفية تحديد السعر المناسب لعقارك",
      excerpt: "دليل شامل لتحديد السعر الأمثل لعقارك بناءً على عوامل السوق والموقع والمواصفات",
      image: "/placeholder.svg?height=250&width=400",
      author: "أحمد المالكي",
      date: "12 ديسمبر 2024",
      category: "نصائح البيع",
      readTime: "4 دقائق قراءة",
    },
    {
      id: 3,
      title: "أهمية التصوير الاحترافي في بيع العقارات",
      excerpt: "كيف يؤثر التصوير الاحترافي على سرعة بيع العقار وتحقيق أفضل الأسعار",
      image: "/placeholder.svg?height=250&width=400",
      author: "سارة العتيبي",
      date: "10 ديسمبر 2024",
      category: "التسويق",
      readTime: "3 دقائق قراءة",
    },
    {
      id: 4,
      title: "الاستثمار العقاري في الرياض: الفرص والتحديات",
      excerpt: "نظرة على أفضل المناطق للاستثمار العقاري في الرياض والعوامل المؤثرة على العائد",
      image: "/placeholder.svg?height=250&width=400",
      author: "محمد السعيد",
      date: "8 ديسمبر 2024",
      category: "استثمار",
      readTime: "6 دقائق قراءة",
    },
    {
      id: 5,
      title: "دليل المشتري الأول للعقارات في السعودية",
      excerpt: "كل ما تحتاج معرفته قبل شراء عقارك الأول في المملكة العربية السعودية",
      image: "/placeholder.svg?height=250&width=400",
      author: "فاطمة الأحمد",
      date: "5 ديسمبر 2024",
      category: "دليل المشتري",
      readTime: "7 دقائق قراءة",
    },
    {
      id: 6,
      title: "تأثير رؤية 2030 على السوق العقاري",
      excerpt: "كيف تؤثر مشاريع رؤية 2030 على قطاع العقارات والفرص الجديدة للمستثمرين",
      image: "/placeholder.svg?height=250&width=400",
      author: "خالد الراشد",
      date: "3 ديسمبر 2024",
      category: "تحليل السوق",
      readTime: "5 دقائق قراءة",
    },
    {
      id: 7,
      title: "نصائح لتسريع بيع عقارك",
      excerpt: "استراتيجيات مجربة لبيع عقارك بسرعة وبأفضل سعر ممكن",
      image: "/placeholder.svg?height=250&width=400",
      author: "نورا المطيري",
      date: "1 ديسمبر 2024",
      category: "نصائح البيع",
      readTime: "4 دقائق قراءة",
    },
  ]

  const categories = [
    { name: "تحليل السوق", count: 8, icon: <TrendingUp className="w-5 h-5" /> },
    { name: "نصائح البيع", count: 12, icon: <Home className="w-5 h-5" /> },
    { name: "التسويق", count: 6, icon: <DollarSign className="w-5 h-5" /> },
    { name: "استثمار", count: 10, icon: <TrendingUp className="w-5 h-5" /> },
    { name: "دليل المشتري", count: 5, icon: <User className="w-5 h-5" /> },
  ]

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F5F3F0] to-[#E8E4E0] section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">مدونة اتجاه العقارية</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            اكتشف أحدث الاتجاهات والنصائح في عالم العقارات والتسويق العقاري
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <article className="card mb-12 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-[#D4B896] text-[#1A1A1A] px-3 py-1 rounded-full font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className="text-[#D4B896] hover:text-[#C4A886] font-medium flex items-center gap-2"
                    >
                      اقرأ المزيد
                      <ArrowLeft className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="card group hover:scale-105">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{post.category}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 leading-tight group-hover:text-[#D4B896] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-[#D4B896] hover:text-[#C4A886] font-medium flex items-center gap-2"
                    >
                      اقرأ
                      <ArrowLeft className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="card mb-8">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">التصنيفات</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    href={`/blog/category/${category.name}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-[#F5F3F0] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-[#D4B896] group-hover:scale-110 transition-transform">{category.icon}</div>
                      <span className="font-medium text-[#1A1A1A]">{category.name}</span>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{category.count}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="card bg-[#1A1A1A] text-white">
              <h3 className="text-xl font-bold mb-4">اشترك في نشرتنا الإخبارية</h3>
              <p className="text-gray-300 mb-6">احصل على أحدث المقالات والنصائح العقارية مباشرة في بريدك الإلكتروني</p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="w-full px-4 py-3 rounded-lg bg-white text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#D4B896]"
                />
                <button type="submit" className="btn-primary w-full">
                  اشترك الآن
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
