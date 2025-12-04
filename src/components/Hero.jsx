import FadeText from './magicui/fade-text'
import BlurFade from './magicui/blur-fade'
import DotPattern from './magicui/dot-pattern'
import ShimmerButton from './magicui/shimmer-button'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Background Pattern */}
      <DotPattern className="opacity-40" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        <BlurFade delay={0.2}>
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
              تعليم مجاني للنساء والأطفال
            </span>
          </div>
        </BlurFade>

        <FadeText
          text="أكاديمية نور القلوب"
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6"
          direction="up"
          framerProps={{ delay: 0.4 }}
        />

        <FadeText
          text="للقرآن والعلوم الشرعية"
          className="text-3xl md:text-5xl lg:text-6xl font-semibold text-emerald-700 mb-8"
          direction="up"
          framerProps={{ delay: 0.6 }}
        />

        <BlurFade delay={0.8}>
          <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto mb-6 leading-relaxed">
            تدريس علوم القرآن الكريم على نهج الكتاب والسنة
          </p>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            برامج تعليمية متنوعة في القرآن والعلوم الشرعية والأسرة والصحة النفسية والسيرة النبوية
          </p>
        </BlurFade>

        <BlurFade delay={1.0}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ShimmerButton
              background="linear-gradient(135deg, #059669 0%, #10b981 100%)"
              className="text-lg px-10 py-5"
            >
              ابدأ رحلتك التعليمية
            </ShimmerButton>
            <button className="px-10 py-5 text-lg font-medium text-emerald-700 border-2 border-emerald-700 rounded-full hover:bg-emerald-50 transition-all duration-300">
              تعرف على المزيد
            </button>
          </div>
        </BlurFade>

        <BlurFade delay={1.2}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
              <div className="text-slate-700 font-medium">مجاني بالكامل</div>
            </div>
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-emerald-600 mb-2">24/7</div>
              <div className="text-slate-700 font-medium">برامج مستمرة</div>
            </div>
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-emerald-600 mb-2">عن بُعد</div>
              <div className="text-slate-700 font-medium">عبر تلغرام وزووم</div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}

export default Hero
