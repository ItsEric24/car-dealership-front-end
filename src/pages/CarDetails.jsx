import { useParams } from 'react-router-dom';
import { cars } from '../data/cars';
import { useState } from 'react';
import { FaWhatsapp, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function CarDetails() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const car = cars.find(car => car.id === parseInt(id));
  
  if (!car) {
    return <div className="text-center py-8">Car not found</div>;
  }

  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in the ${car.year} ${car.brand} ${car.model} listed for $${car.price.toLocaleString()}, This is the image: ${car.images[0]}`;
    const whatsappUrl = `https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  return (
    <div className="pt-24 bg-cream min-h-screen">
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-light mb-16">{car.brand} {car.model}</h1>
        
        {/* Image Gallery */}
        <div className="mb-16">
          <div className="relative h-[600px] mb-8 cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <img
              src={car.images[currentImageIndex]}
              alt={`${car.brand} ${car.model}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {car.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-32 h-24 overflow-hidden ${
                  currentImageIndex === index 
                    ? 'ring-2 ring-charcoal' 
                    : 'ring-1 ring-stone/20'
                }`}
              >
                <img
                  src={image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Details */}
          <div>
            <h2 className="font-cormorant text-3xl mb-8">Vehicle Details</h2>
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-wider text-stone mb-2">Year</p>
                <p className="text-lg">{car.year}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-stone mb-2">Price</p>
                <p className="text-lg">${car.price.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-stone mb-2">Description</p>
                <p className="leading-relaxed">{car.description}</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="font-cormorant text-3xl mb-8">Features</h2>
            <ul className="space-y-4">
              {car.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm">
                  <span className="w-1.5 h-1.5 bg-charcoal rounded-full mr-4"></span>
                  {feature}
                </li>
              ))}
            </ul>
            
            <div className="mt-12 space-y-4">
              <button className="w-full px-8 py-4 border border-charcoal text-sm tracking-widest uppercase hover:bg-charcoal hover:text-white transition-colors duration-300">
                Contact Us About This Car
              </button>
              
              <button 
                onClick={handleWhatsAppClick}
                className="w-full px-8 py-4 bg-[#25D366] text-white text-sm tracking-widest uppercase hover:bg-[#128C7E] transition-colors duration-300 flex items-center justify-center space-x-3"
              >
                <FaWhatsapp className="text-xl" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="fixed top-4 right-4 text-white p-2 hover:text-stone transition-colors duration-300 z-50"
          >
            <FaTimes className="text-2xl" />
          </button>

          <div 
            className="relative w-full max-w-7xl mx-auto px-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <img
                src={car.images[currentImageIndex]}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-full object-contain"
              />
            </div>

            <button
              onClick={previousImage}
              className="absolute left-8 top-1/2 -translate-y-1/2 text-white p-2 hover:text-stone transition-colors duration-300"
            >
              <FaChevronLeft className="text-2xl" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-8 top-1/2 -translate-y-1/2 text-white p-2 hover:text-stone transition-colors duration-300"
            >
              <FaChevronRight className="text-2xl" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {currentImageIndex + 1} / {car.images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarDetails;