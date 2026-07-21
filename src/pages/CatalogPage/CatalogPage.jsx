import { useEffect, useState } from 'react';
import CarsList from '../../components/CarsList/CarsList';
import FiltersForm from '../../components/FiltersForm/FiltersForm';
import css from './CatalogPage.module.css';
import Container from '../../container/container';
import toast, { Toaster } from 'react-hot-toast';
import { fetchCarsApp } from '../../cars-api';

export default function CatalogPage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState({
    brand: '',
    price: '',
    minMileage: '',
    maxMileage: '',
  });

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    async function getCars() {
      try {
        setLoading(true);

        const data = await fetchCarsApp(page, filters);
        console.log(data);

        if (page === 1) {
          setCars(data);
        } else {
          setCars((prev) => [...prev, ...data]);
        }
      } catch (error) {
        toast('ERROR', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getCars();
  }, [page, filters]);

  const handleSearch = (newFilters) => {
    setCars([]);
    setPage(1);
    setFilters(newFilters);
  };

  return (
    <Container>
      <div className={css.catalogContainer}>
        <FiltersForm onSearch={handleSearch} />
        {loading && <p>Cars loading,please wait...</p>}
        {error && <p>Ooops, there was an erorr,please reload this page</p>}
        {cars.length > 0 && <CarsList items={cars} />}
        {cars.length > 0 && !loading && (
          <button className={css.catalogBtn} onClick={handleLoadMore}>
            Load more
          </button>
        )}
        <Toaster />
      </div>
    </Container>
  );
}
