import CarCard from '../CarCard/CarCard';
import css from './CarsList.module.css';
export default function CarsList({ items }) {
  return (
    <ul className={css.carsList}>
      {items.map((item) => (
        <li key={item.id} className={css.carsListItem}>
          <CarCard car={item} />
        </li>
      ))}
    </ul>
  );
}
