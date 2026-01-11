import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdBannerSlider from '@/components/AdBannerSlider'
import TVCategory from '@/components/TVCategory'
import RecommendedShows from '@/components/RecommendedShows'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Ad Banner Slider */}
        <section className="container mx-auto px-4 py-8">
          <AdBannerSlider />
        </section>

        {/* TV Category Section */}
        <TVCategory />

        {/* Recommended Shows Section */}
        <RecommendedShows />
      </main>

      <Footer />
    </div>
  )
}