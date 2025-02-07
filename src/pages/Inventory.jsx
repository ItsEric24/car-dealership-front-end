import { useState, useMemo } from 'react';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';
import SEO from '../components/SEO';

function Inventory() {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [currentPriceRange, setCurrentPriceRange] = useState({
    min: Math.min(...cars.map(car => car.price)),
    max: Math.max(...cars.map(car => car.price))
  });
  
  const brands = ['all', ...new Set(cars.map(car => car.brand))];
  
  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      const matchesBrand = selectedBrand === 'all' || car.brand === selectedBrand;
      const matchesPrice = car.price >= currentPriceRange.min && car.price <= currentPriceRange.max;
      return matchesBrand && matchesPrice;
    });
  }, [selectedBrand, currentPriceRange]);

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setCurrentPriceRange(prev => ({
      ...prev,
      [name]: parseInt(value) || 0
    }));
  };

  return (
    <div className="max-w-screen-xl mx-auto pt-32 pb-16 px-6">
      <SEO title="Inventory" description="Luxury Cars Inventory" name="Inventory" type="website" />
      <h1 className="text-5xl font-light mb-16">Our Collection</h1>
      
      {/* Filters */}
      <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-sm uppercase tracking-wider text-stone mb-3">
            Brand
          </label>
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="w-full px-4 py-3 border border-stone bg-transparent text-charcoal focus:outline-none"
          >
            {brands.map(brand => (
              <option key={brand} value={brand}>
                {brand.charAt(0).toUpperCase() + brand.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <label className="block text-sm uppercase tracking-wider text-stone mb-3">
              Min Price
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone">$</span>
              <input
                type="number"
                name="min"
                value={currentPriceRange.min}
                onChange={handlePriceChange}
                className="w-full pl-8 pr-4 py-3 border border-stone bg-transparent text-charcoal focus:outline-none"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm uppercase tracking-wider text-stone mb-3">
              Max Price
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone">$</span>
              <input
                type="number"
                name="max"
                value={currentPriceRange.max}
                onChange={handlePriceChange}
                className="w-full pl-8 pr-4 py-3 border border-stone bg-transparent text-charcoal focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      {filteredCars.length === 0 && (
        <div className="text-center py-16 text-stone">
          No vehicles match your criteria
        </div>
      )}
    </div>
  );
}

export default Inventory;