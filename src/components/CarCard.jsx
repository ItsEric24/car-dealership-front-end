/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function CarCard({ car }) {
  return (
    <div className="bg-white">
      <div className="relative aspect-[16/9]">
        <img
          src={car.images[0]}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-cormorant text-2xl mb-2">{car.brand} {car.model}</h3>
        <p className="text-stone text-sm mb-4">{car.year}</p>
        <div className="flex items-center justify-between">
          <p className="font-montserrat text-lg">${car.price.toLocaleString()}</p>
          <Link
            to={`/car/${car.id}`}
            className="text-xs tracking-widest uppercase text-charcoal hover:text-stone transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarCard