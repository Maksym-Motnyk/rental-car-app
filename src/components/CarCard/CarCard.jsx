import { NavLink } from 'react-router-dom';
import css from './CarCard.module.css';
export default function CarCard({ car }) {
  return (
    <div className={css.cardContainer}>
      <img className={css.cardImage} src={car.img} alt={car.model} />
      <div className={css.cardWrap}>
        <p className={css.carDescr}>
          {car.brand} <span className={css.carModel}>{car.model}</span>, {car.year}
        </p>
        <p>{`$${car.rentalPrice}`}</p>
      </div>
      <div className={css.carLocation}>
        {car.location.address} <span className={css.separator}></span> {car.location.city}
        {car.location.country}
      </div>
      <NavLink className={css.cardButton} to={`/catalog/${car.id}`}>
        Read more
      </NavLink>
    </div>
  );
}
