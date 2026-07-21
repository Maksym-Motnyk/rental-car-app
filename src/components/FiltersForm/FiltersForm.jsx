import { useId, useState } from 'react';
import css from './FiltersForm.module.css';

export default function FiltersForm({ onSearch }) {
  const selectId = useId();
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSearch = () => {
    onSearch({
      brand,
      price,
      minMileage: from,
      maxMileage: to,
    });
  };

  return (
    <div className={css.catalogContainer}>
      <div className={css.selectWrap}>
        <div className={css.selectContainer}>
          <label htmlFor={selectId} className={css.label}>
            Car brand
          </label>
          <select
            name=""
            id=""
            className={css.catalogSelect}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="" disabled hidden>
              Choose a brand
            </option>
            <option value="Aston Martin">Aston Martin</option>
            <option value="Audi">Audi</option>
            <option value="BMW">BMW</option>
            <option value="Bentley">Bentley</option>
            <option value="Buick">Buick</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Chrysler">Chrysler</option>
            <option value="GMC">GMC</option>
            <option value="Hummer">Hummer</option>
          </select>
        </div>
        <div className={css.selectContainer}>
          <label htmlFor={selectId} className={css.label}>
            Price/ 1 hour
          </label>
          <select
            name=""
            id=""
            className={css.catalogSelect}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="" disabled hidden>
              Choose a price
            </option>
            <option value="30">To $30</option>
            <option value="40">To $40</option>
            <option value="50">To $50</option>
            <option value="60">To $60</option>
            <option value="70">To $70</option>
            <option value="80">To $80</option>
          </select>
        </div>
        <div className={css.inputContainer}>
          <label htmlFor="" className={css.label}>
            Сar mileage / km
          </label>
          <div>
            <input
              type="text"
              placeholder="From "
              className={css.catalogInput}
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
            <input
              type="number"
              placeholder="To"
              className={css.catalogInputApp}
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <button className={css.catalogBtn} onClick={handleSearch} type="button">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
