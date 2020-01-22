import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';

const Gallery = ({ products }) => {
  console.log('products', products);
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
                  <FontAwesomeIcon icon={faEye}>View details</FontAwesomeIcon>
                </Button>
                <Button variant='gallery'>
                  <FontAwesomeIcon icon={faShoppingBasket}>
                    Add to basket
                  </FontAwesomeIcon>
                </Button>
              </div>
              <div className={styles.content}>
                <div className={styles.triangleTopLeft} />
                <h5>{products[0].name}</h5>
                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <a key={i} href='#'>
                      {i <= products[0].stars ? (
                        <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                      ) : (
                        <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                      )}
                    </a>
                  ))}
                </div>
                <div className={styles.triangleBottomRight} />
                <div className={styles.price}>
                  <h3>${products[0].price}</h3>
                  <h5>${products[0].oldprice}</h5>
                </div>
              </div>
            </div>
            <div className={styles.slider}>
              <div className={styles.prev}>{'<'}</div>
              <div className={styles.slides}>
                <img src={products[0].image} alt='pic' className={styles.slidePic + ' ' + styles.active}/>
                <img src={products[1].image} alt='pic' className={styles.slidePic}/>
                <img src={products[2].image} alt='pic' className={styles.slidePic}/>
                <img src={products[3].image} alt='pic' className={styles.slidePic}/>
                <img src={products[4].image} alt='pic' className={styles.slidePic}/>
                <img src={products[5].image} alt='pic' className={styles.slidePic}/>
              </div>
              <div className={styles.next}>{'>'}</div>
            </div>
          </div>
          <div className={'col-6 ' + styles.picture}>
            <img src={products[2].image} alt='prod3' />
            <div className={styles.pictureDetails}>
              <h3>from <span>${products[2].price}</span></h3>
              <h1>{products[2].name}</h1>
              <Button variant='green'>Shop now</Button>
            </div>
          </div>
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
      oldprice: PropTypes.number,
    })
  ),
};

export default Gallery;
