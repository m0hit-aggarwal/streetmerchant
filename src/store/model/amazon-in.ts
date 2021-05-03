import {Store} from './store';

export const AmazonIN: Store = {
  currency: 'inr',
  labels: {
    captcha: {
      container: 'body',
      text: ['enter the characters you see below'],
    },
    inStock: {
      container: '#desktop_buybox',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.a-color-price',
    },
    outOfStock: {
      container: '.a-color-price',
      text: ['currently unavailable.'],
    },
  },
  links: [
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.in/gp/aws/cart/add.html?ASIN.1=B08KHL21CV&Quantity.1=1',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.amazon.in/dp/B08KHL21CV',
    },
  ],
  name: 'amazon-in',
};
