import Safari from './magicui/safari'
import BlurFade from './magicui/blur-fade'

function VideoSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="w-full max-w-6xl mx-auto">
        <BlurFade delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              تعرف على أكاديميتنا
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              يشرفنا أن نقدم لكم فيديو تعريفي عن أكاديمية نور القلوب
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.4}>
          <Safari url="youtube.com" className="mx-auto">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-100 to-teal-100">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <svg 
                      className="w-10 h-10 text-emerald-600" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-slate-700 font-medium">فيديو تعريفي عن الأكاديمية</p>
                  <p className="text-sm text-slate-500 mt-2">سيتم إضافة الفيديو قريباً</p>
                </div>
              </div>
              {/* Placeholder for actual video - replace with iframe when video URL is available */}
              {/* <iframe
                className="absolute inset-0 w-full h-full"
                src="YOUR_VIDEO_URL"
                title="فيديو تعريفي عن أكاديمية نور القلوب"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              /> */}
            </div>
          </Safari>
        </BlurFade>

        <BlurFade delay={0.6}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-white rounded-2xl shadow-lg border border-slate-100">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">برامج متنوعة</h3>
              <p className="text-slate-600 leading-relaxed">
                محاضرات في الدين والأسرة والصحة النفسية والسيرة النبوية والموعظة
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg border border-slate-100">
              <div className="text-3xl mb-4">👩‍🏫</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">معلمات متقنات</h3>
              <p className="text-slate-600 leading-relaxed">
                نخبة من الدكاترة والشيوخ المجازين في علوم الدين والأسرة
              </p>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}

export default VideoSection
