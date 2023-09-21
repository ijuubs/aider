const scrapeGroceryWebsite = require('./scraper');

const url = 'https://www.mh.com.fj';

scrapeGroceryWebsite(url)
  .then((products) => {
    console.log('Scraped products:', products);
  })
  .catch((error) => {
    console.error('Error scraping grocery website:', error);
  });
