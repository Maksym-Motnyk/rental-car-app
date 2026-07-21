import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <main>
      <div className={css.heroImg}>
        <div className={css.heroContainer}>
          <h1 className={css.heroTitle}>Find your perfect rental car</h1>
          <p className={css.heroText}>Reliable and budget-friendly rentals for any journey</p>
          <Link to="/catalog">
            <button className={css.heroBtn}>View Catalog</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
