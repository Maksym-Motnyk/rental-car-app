import BookingForm from '../../components/BookingForm/BookingForm';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCarById } from '../../cars-api';
import css from './CatalogPageDetails.module.css';
import Container from '../../container/container';
import { CiLocationOn } from 'react-icons/ci';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import { AiOutlineContainer } from 'react-icons/ai';
import { IoSettingsOutline } from 'react-icons/io5';

export default function CatalogPageDetails() {
  const { catalogId } = useParams();
  const [cars, setCars] = useState(null);
  //Loading
  //Error

  useEffect(() => {
    async function fetchCarsDetails() {
      try {
        const data = await fetchCarById(catalogId);
        setCars(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCarsDetails();
  }, [catalogId]);

  return (
    <Container>
      <div className={css.detailsWrap}>
        <div className={css.detailsContainer}>
          {cars && <img className={css.detailsImg} src={cars.img} alt={cars.description} />}
          <BookingForm cardId={catalogId} />
        </div>
        <div>
          <h3 className={css.detailsTitle}>
            {cars && cars.brand}, {cars && cars.year}
            <span className={css.detailsId}>{`id:  ${cars && cars.stockNumber}`}</span>
          </h3>
          <p className={css.detailsLocation}>
            <CiLocationOn width={16} height={16} /> {cars && cars.location.country},{' '}
            {cars && cars.location.city}{' '}
            <span className={css.detailsMileage}>{`Mileage:  ${cars && cars.mileage} km`}</span>
          </p>
          <p className={css.detailsPrice}>{`$${cars && cars.rentalPrice}`}</p>
          <p className={css.detailsDescr}>{cars && cars.description}</p>
          <div className={css.detailsListWrap}>
            <h4 className={css.detailsListTitle}>Rental Conditions: </h4>
            <ul className={css.detailsList}>
              <li className={css.detailsListItem}>
                <IoIosCheckmarkCircleOutline />
                {cars && cars.rentalConditions[0]}
              </li>
              <li className={css.detailsListItem}>
                <IoIosCheckmarkCircleOutline />
                {cars && cars.rentalConditions[2]}
              </li>
              <li className={css.detailsListItem}>
                <IoIosCheckmarkCircleOutline />
                {cars && cars.rentalConditions[1]}
              </li>
            </ul>
          </div>
          <div className={css.detailsListWrap}>
            <h4 className={css.detailsListTitle}>Car Specifications: </h4>
            <ul className={css.detailsList}>
              <li className={css.detailsListItem}>
                <FaRegCalendarAlt />
                {`Year: ${cars && cars.year}`}
              </li>
              <li className={css.detailsListItem}>
                <FaCar />
                {`Type: ${cars && cars.type}`}
              </li>
              <li className={css.detailsListItem}>
                <AiOutlineContainer />
                {`Fuel Consumption: ${cars && cars.fuelConsumption}`}
              </li>
              <li className={css.detailsListItem}>
                <IoSettingsOutline />
                {`Engine Size: ${cars && cars.engine}`}
              </li>
            </ul>
          </div>
          <div className={css.detailsListWrap}>
            <h4 className={css.detailsListTitle}>Accessories and functionalities: </h4>
            <ul className={css.detailsList}>
              <li className={css.detailsListItem}>
                <IoIosCheckmarkCircleOutline />
                {cars && cars.features[0]}
              </li>
              <li className={css.detailsListItem}>
                <IoIosCheckmarkCircleOutline />
                {cars && cars.features[1]}
              </li>
              <li className={css.detailsListItem}>
                <IoIosCheckmarkCircleOutline />
                {cars && cars.features[2]}
              </li>
              <li className={css.detailsListItem}>
                <IoIosCheckmarkCircleOutline />
                {cars && cars.features[3]}
              </li>
              <li className={css.detailsListItem}>
                <IoIosCheckmarkCircleOutline />
                {cars && cars.features[4]}
              </li>
              <li className={css.detailsListItem}>
                <IoIosCheckmarkCircleOutline />
                {cars && cars.features[5]}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
