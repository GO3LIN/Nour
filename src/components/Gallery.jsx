import { BentoGrid, BentoCard } from './magicui/bento-grid'
import BlurFade from './magicui/blur-fade'

// Import all gallery images
import image1 from '../../gallery/image1.jpeg'
import image2 from '../../gallery/image2.jpeg'
import image3 from '../../gallery/image3.jpeg'
import image4 from '../../gallery/image4.jpeg'
import image5 from '../../gallery/image5.jpeg'
import image6 from '../../gallery/image6.jpeg'
import image7 from '../../gallery/image7.jpeg'
import image8 from '../../gallery/image8.jpeg'
import image9 from '../../gallery/image9.jpeg'
import image10 from '../../gallery/image10.jpeg'
import image11 from '../../gallery/image11.jpeg'
import image12 from '../../gallery/image12.jpeg'
import image13 from '../../gallery/image13.jpeg'
import image14 from '../../gallery/image14.jpeg'
import image15 from '../../gallery/image15.jpeg'
import image16 from '../../gallery/image16.jpeg'
import image17 from '../../gallery/image17.jpeg'
import image18 from '../../gallery/image18.jpeg'

const galleryImages = [
  { src: image1, alt: 'أكاديمية نور القلوب - صورة 1' },
  { src: image2, alt: 'أكاديمية نور القلوب - صورة 2' },
  { src: image3, alt: 'أكاديمية نور القلوب - صورة 3' },
  { src: image4, alt: 'أكاديمية نور القلوب - صورة 4' },
  { src: image5, alt: 'أكاديمية نور القلوب - صورة 5' },
  { src: image6, alt: 'أكاديمية نور القلوب - صورة 6' },
  { src: image7, alt: 'أكاديمية نور القلوب - صورة 7' },
  { src: image8, alt: 'أكاديمية نور القلوب - صورة 8' },
  { src: image9, alt: 'أكاديمية نور القلوب - صورة 9' },
  { src: image10, alt: 'أكاديمية نور القلوب - صورة 10' },
  { src: image11, alt: 'أكاديمية نور القلوب - صورة 11' },
  { src: image12, alt: 'أكاديمية نور القلوب - صورة 12' },
  { src: image13, alt: 'أكاديمية نور القلوب - صورة 13' },
  { src: image14, alt: 'أكاديمية نور القلوب - صورة 14' },
  { src: image15, alt: 'أكاديمية نور القلوب - صورة 15' },
  { src: image16, alt: 'أكاديمية نور القلوب - صورة 16' },
  { src: image17, alt: 'أكاديمية نور القلوب - صورة 17' },
  { src: image18, alt: 'أكاديمية نور القلوب - صورة 18' },
]

function Gallery() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="w-full max-w-7xl mx-auto">
        <BlurFade delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              معرض الصور
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              لمحات من أنشطة وبرامج أكاديمية نور القلوب
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.05}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index > 3 ? "lazy" : "eager"}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    console.error('Failed to load image:', image.src)
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
