import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  //faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';

const Gallery = ({ products }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className={styles.heading}>
              <h3>Furniture gallery</h3>
            </div>
            <div className={styles.menu}>
              <ul>
                <li>
                  <a className={styles.active}>Featured</a>
                </li>
                <li>
                  <a>Top seller</a>
                </li>
                <li>
                  <a>Sale off</a>
                </li>
                <li>
                  <a>Top rated</a>
                </li>
              </ul>
            </div>
            <div className={styles.product}>
              <img src={products[0].image} alt='product 1' />
              <div className={styles.buttons}>
                <Button variant='gallery'>
                  <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                </Button>
                <Button variant='gallery'>
                  <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
                </Button>
                <Button variant='gallery'>
                  <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                </Button>
                <Button variant='gallery'>
                  <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                </Button>
              </div>
            </div>
            <div className={styles.slider}>slider</div>
          </div>
          <div className='col-6'>picture</div>
        </div>
      </div>
    </div>
  );
};

Gallery.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
      favorite: PropTypes.bool,
      image: PropTypes.string,
    })
  ),
};

export default Gallery;
