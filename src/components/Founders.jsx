import MagicCard from './magicui/magic-card'
import BlurFade from './magicui/blur-fade'

const founders = [
  { 
    name: 'أ. فاتحة محمد', 
    role: 'مؤسسة',
    description: 'معلمة متخصصة في علوم القرآن والتجويد'
  },
  { 
    name: 'أ. وسيلة أم أيوب', 
    role: 'مؤسسة',
    description: 'معلمة متخصصة في العلوم الشرعية والنورانية'
  }
]

const supervisor = { 
  name: 'أم ياسين', 
  title: 'الشيخة الفاضلة',
  description: 'المشرفة العامة على الأكاديمية'
}

function Founders() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-emerald-50">
      <div className="w-full max-w-6xl mx-auto">
        <BlurFade delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              المؤسسات والإشراف
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              نخبة من المعلمات المتقنات في علوم القرآن والشريعة
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.3}>
          <MagicCard className="mb-12 max-w-3xl mx-auto" gradientColor="#059669">
            <div className="p-10 text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-xl">
                <span className="text-4xl text-white">👑</span>
              </div>
              <div className="mb-3">
                <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                  {supervisor.title}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                {supervisor.name}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {supervisor.description}
              </p>
            </div>
          </MagicCard>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <BlurFade key={index} delay={0.4 + index * 0.1}>
              <MagicCard gradientColor="#10b981">
                <div className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center shadow-lg">
                    <span className="text-3xl text-white">📚</span>
                  </div>
                  <div className="mb-3">
                    <span className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                      {founder.role}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                    {founder.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {founder.description}
                  </p>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.7}>
          <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg border border-slate-100 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                هدفنا
              </h3>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
                توصيل العلم بكل أمانة إلى كل المهتمين بمختلف الأعمار
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="p-4">
                  <div className="text-3xl mb-2">🎓</div>
                  <p className="text-slate-700 font-medium">تعليم متخصص</p>
                </div>
                <div className="p-4">
                  <div className="text-3xl mb-2">🌟</div>
                  <p className="text-slate-700 font-medium">جودة عالية</p>
                </div>
                <div className="p-4">
                  <div className="text-3xl mb-2">❤️</div>
                  <p className="text-slate-700 font-medium">بكل أمانة</p>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}

export default Founders
