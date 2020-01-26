const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      oldprice: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183_1280.jpg',
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      oldprice: 0,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      oldprice: 0,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      oldprice: 0,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      oldprice: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      oldprice: 55,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1267438/pexels-photo-1267438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      oldprice: 0,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/2705/bed-bedroom-room-furniture.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      oldprice: 0,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'chair',
      price: 30,
      oldprice: 5,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://cdn.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_1280.jpg',
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'chair',
      price: 30,
      oldprice: 5,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://cdn.pixabay.com/photo/2017/08/03/15/38/architecture-2576906_1280.jpg',
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'chair',
      price: 30,
      oldprice: 5,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2015/06/19/21/33/beach-815303_1280.jpg',
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'chair',
      price: 30,
      oldprice: 5,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2017/03/28/12/15/chairs-2181977_1280.jpg',
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'chair',
      price: 30,
      oldprice: 5,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2015/02/09/14/56/table-629772_1280.jpg',
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'chair',
      price: 30,
      oldprice: 5,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://cdn.pixabay.com/photo/2015/04/06/16/04/beach-chair-709592_1280.jpg',
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'sofa',
      price: 30,
      oldprice: 5,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/couch-1835923_1280.jpg',
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'sofa',
      price: 30,
      oldprice: 5,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2014/09/15/21/46/couch-447484_1280.jpg',
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'sofa',
      price: 30,
      stars: 2,
      oldprice: 0,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_1280.jpg',
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'sofa',
      price: 30,
      oldprice: 5,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2016/11/29/01/24/adorable-1866530_1280.jpg',
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'table',
      price: 30,
      oldprice: 5,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2019/12/11/20/49/table-4689268_1280.jpg',
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'table',
      price: 30,
      oldprice: 5,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://cdn.pixabay.com/photo/2015/11/07/11/48/conservatory-1031494_1280.jpg',
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'table',
      price: 30,
      oldprice: 5,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_1280.jpg',
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'table',
      price: 30,
      oldprice: 5,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://cdn.pixabay.com/photo/2015/05/15/14/22/conference-room-768441_1280.jpg',
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'dining',
      price: 30,
      oldprice: 5,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037_1280.jpg',
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'dining',
      price: 30,
      oldprice: 5,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2016/06/03/14/31/dinner-1433494_1280.jpg',
    },
  ],
  cart: {
    products: [],
  },
  comparison: [],
  brands: [
    {
      image:
        'https://images.unsplash.com/photo-1529861192387-e2170fb232d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      key: '1',
    },
    {
      image:
        'https://images.unsplash.com/photo-1570716892027-8347dbdac4aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      key: '2',
    },
    {
      image:
        'https://images.unsplash.com/photo-1509765066291-6b5dd612da2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      key: '3',
    },
    {
      image:
        'https://cdn.pixabay.com/photo/2015/06/01/16/14/imagine-793719_960_720.jpg',
      key: '4',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2015/05/03/17/49/design-751452_960_720.png',
      key: '5',
    },
    {
      image:
        'https://cdn.pixabay.com/photo/2017/09/26/21/47/shopping-cart-2790225_960_720.png',
      key: '6',
    },
    {
      image:
        'https://cdn.pixabay.com/photo/2016/09/25/14/10/rocket-1693791_960_720.png',
      key: '7',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2015/05/04/20/23/color-752920_960_720.png',
      key: '8',
    },
    {
      image:
        'https://cdn.pixabay.com/photo/2018/02/08/16/35/silhouette-3139806_960_720.png',
      key: '9',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2017/09/07/10/26/logo-2724482_960_720.png',
      key: '10',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2015/05/14/03/17/studio-766303_960_720.png',
      key: '11',
    },
    {
      image:
        'https://cdn.pixabay.com/photo/2015/04/29/18/09/shopping-745840_960_720.png',
      key: '12',
    },
  ],
};

export default initialState;
