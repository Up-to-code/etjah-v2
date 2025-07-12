import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, User, ArrowRight, Phone, BookOpen, Heart, Share2, PhoneCall } from "lucide-react"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const blogPost = {
    id: params.id,
    title: "اتجاهات السوق العقاري السعودي في 2024",
    excerpt: "تحليل شامل لأحدث التطورات في السوق العقاري السعودي والفرص الاستثمارية المتاحة للمستثمرين",
    content: `
      <p>يشهد السوق العقاري في المملكة العربية السعودية تطورات مهمة ونموًا ملحوظًا في عام 2024، مدفوعًا بالمبادرات الحكومية الطموحة ضمن رؤية المملكة 2030.</p>

      <h2>النمو المستمر في قطاع الإسكان</h2>
      <p>تواصل الحكومة السعودية جهودها لتحقيق هدف رفع نسبة تملك المواطنين للمساكن إلى 70% بحلول عام 2030. هذا الهدف الطموح يخلق فرصًا استثمارية هائلة في قطاع التطوير العقاري.</p>

      <h3>المدن الجديدة والمشاريع الضخمة</h3>
      <p>تشهد المملكة إطلاق مشاريع ضخمة مثل نيوم والقدية والعلا، والتي تعيد تشكيل خريطة الاستثمار العقاري. هذه المشاريع تشمل مجمعات تجارية وترفيهية وسياحية متكاملة.</p>

      <h2>الاستثمار في العقارات التجارية</h2>
      <p>مع نمو القطاع الخاص وتنويع الاقتصاد، تزداد الحاجة للمساحات التجارية والمكتبية. المناطق التجارية الجديدة في الرياض وجدة والدمام تشهد إقبالاً متزايدًا من المستثمرين.</p>

      <h2>نصائح للمستثمرين</h2>
      <ul>
        <li>دراسة المواقع الاستراتيجية القريبة من مشاريع التطوير الكبرى</li>
        <li>التركيز على العقارات ذات الطلب المستمر</li>
        <li>الاستثمار في التقنيات الحديثة والمباني الذكية</li>
        <li>التعاون مع شركات تسويق عقاري متخصصة</li>
      </ul>

      <p>السوق العقاري السعودي في 2024 يحمل فرصًا استثمارية متنوعة ومربحة. النجاح يتطلب فهمًا عميقًا للاتجاهات الحالية واستراتيجية تسويقية محكمة.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    author: "فريق اتجاه",
    date: "15 ديسمبر 2024",
    category: "تحليل السوق",
    readTime: "5 دقائق قراءة",
  }

  const relatedPosts = [
    {
      id: 2,
      title: "كيفية تحديد السعر المناسب لعقارك",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "أهمية التصوير الاحترافي في بيع العقارات",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <>
      <Header />

      {/* Free Call Banner */}
      <div className="bg-[#2C3E50] text-white py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 text-center">
            <PhoneCall className="w-5 h-5 text-[#D4B896]" />
            <span className="font-medium">استشارة مجانية عبر الهاتف</span>
            <a
              href="tel:+966501234567"
              className="bg-[#D4B896] text-[#1A1A1A] px-6 py-2 rounded-full font-semibold hover:bg-[#C4A886] transition-colors"
            >
              اتصل الآن: 966+ 50 123 4567
            </a>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-12">
          <Link href="/" className="hover:text-[#2C3E50] transition-colors">
            الرئيسية
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#2C3E50] transition-colors">
            المدونة
          </Link>
          <span>/</span>
          <span className="text-[#2C3E50]">{blogPost.category}</span>
        </nav>

        {/* Article Header */}
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mb-8">
            <span className="bg-[#2C3E50] text-white px-4 py-2 rounded-full">{blogPost.category}</span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#2C3E50]" />
              <span>{blogPost.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#2C3E50]" />
              <span>{blogPost.readTime}</span>
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-8 leading-tight">{blogPost.title}</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">{blogPost.excerpt}</p>
        </header>

        {/* Featured Image */}
        <div className="mb-16">
          <img
            src={blogPost.image || "/placeholder.svg"}
            alt={blogPost.title}
            className="w-full h-96 object-cover rounded-3xl shadow-xl"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-xl max-w-none mb-16">
          <div
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
            className="space-y-8 [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-[#1A1A1A] [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:text-[#2C3E50] [&>h3]:mt-8 [&>h3]:mb-4 [&>p]:text-lg [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:mb-6 [&>ul]:space-y-3 [&>ul>li]:text-lg [&>ul>li]:text-gray-700 [&>ul>li]:mr-8"
          />
        </div>

        {/* Author & Actions */}
        <div className="border-t border-gray-200 pt-12 mb-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#2C3E50] rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">{blogPost.author}</h3>
                <p className="text-gray-600">خبراء التسويق العقاري</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-[#2C3E50] hover:text-[#D4B896] transition-colors">
                <Heart className="w-5 h-5" />
                <span>أعجبني</span>
              </button>
              <button className="flex items-center gap-2 text-[#2C3E50] hover:text-[#D4B896] transition-colors">
                <Share2 className="w-5 h-5" />
                <span>مشاركة</span>
              </button>
            </div>
          </div>
        </div>

        {/* Free Consultation CTA */}
        <div className="bg-gradient-to-r from-[#F5F3F0] to-[#E8E4E0] rounded-3xl p-12 text-center mb-16">
          <Phone className="w-16 h-16 text-[#2C3E50] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">هل تحتاج استشارة مجانية؟</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            تحدث مع خبرائنا مجاناً واحصل على نصائح مخصصة لعقارك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+966501234567"
              className="bg-[#2C3E50] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#1A1A1A] transition-colors flex items-center justify-center gap-3"
            >
              <PhoneCall className="w-6 h-6" />
              اتصل الآن مجاناً
            </a>
            <Link
              href="/contact"
              className="border-2 border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
            >
              أرسل رسالة
            </Link>
          </div>
        </div>

        {/* Related Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-12 text-center">مقالات أخرى قد تهمك</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group">
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-[#2C3E50] transition-colors leading-tight">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-center">
          <Link
            href="/blog"
            className="flex items-center gap-3 border-2 border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
          >
            <ArrowRight className="w-5 h-5" />
            العودة للمدونة
          </Link>
        </div>
      </article>

      {/* Floating Free Call Button */}
      <div className="fixed bottom-8 left-8 z-50">
        <a
          href="tel:+966501234567"
          className="bg-[#2C3E50] text-white p-4 rounded-full shadow-2xl hover:bg-[#1A1A1A] transition-all duration-300 hover:scale-110 flex items-center gap-3"
        >
          <PhoneCall className="w-6 h-6" />
          <span className="hidden sm:block font-semibold">اتصال مجاني</span>
        </a>
      </div>

      <Footer />
    </>
  )
}
