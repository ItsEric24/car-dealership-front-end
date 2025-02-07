import { FaCar, FaTools, FaMoneyBillWave } from 'react-icons/fa';
import SEO from '../components/SEO';

function Home() {
  return (
    <div className="bg-cream min-h-screen pt-24">
      <SEO title="Home" description="Luxury Cars Home" name="Home" type="website" />
      {/* Hero Section */}
      <div className="relative h-[90vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600"
          alt="Luxury Car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-7xl font-light mb-8 leading-tight">
              Luxury Redefined
            </h1>
            <p className="text-lg mb-12 font-montserrat font-light tracking-wide">
              Experience automotive excellence in its purest form
            </p>
            <a
              href="/inventory"
              className="inline-block px-12 py-4 border border-white text-sm tracking-widest uppercase hover:bg-white hover:text-charcoal transition-colors duration-300"
            >
              View Collection
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-screen-xl mx-auto py-32 px-6">
        <h2 className="text-5xl font-light text-center mb-24">Our Commitment</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <FaCar className="text-4xl text-charcoal" />
            </div>
            <h3 className="text-2xl font-cormorant mb-4">Curated Selection</h3>
            <p className="text-sm leading-relaxed text-stone">
              Only the finest automobiles, carefully selected for the discerning collector
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <FaTools className="text-4xl text-charcoal" />
            </div>
            <h3 className="text-2xl font-cormorant mb-4">Expert Care</h3>
            <p className="text-sm leading-relaxed text-stone">
              Dedicated specialists ensuring your vehicle receives unparalleled attention
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <FaMoneyBillWave className="text-4xl text-charcoal" />
            </div>
            <h3 className="text-2xl font-cormorant mb-4">Tailored Financing</h3>
            <p className="text-sm leading-relaxed text-stone">
              Bespoke financial solutions crafted to match your requirements
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;