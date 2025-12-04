import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import Gallery from './components/Gallery'
import Founders from './components/Founders'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <VideoSection />
      <Gallery />
      <Founders />
      <Footer />
    </div>
  )
}

export default App
