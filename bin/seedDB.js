const axios = require('axios');

const seedDB = async () => {
  await axios.post('http://localhost:8080/api/product');
};
seedDB();
