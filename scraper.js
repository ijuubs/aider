const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeGroceryWebsite(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Extract the data from the website using Cheerio selectors
    const products = [];
    $('.product').each((index, element) => {
      const name = $(element).find('.name').text();
      const price = $(element).find('.price').text();
      const image = $(element).find('.image').attr('src');

      products.push({ name, price, image });
    });

    return products;
  } catch (error) {
    console.error('Error scraping grocery website:', error);
    return [];
  }
}

module.exports = scrapeGroceryWebsite;
