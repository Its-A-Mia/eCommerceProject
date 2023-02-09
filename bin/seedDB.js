const axios = require('axios');

const seedDB = async () => {
  const response = await axios.post('http://localhost:8080/api/product');
  console.log(response.data);
};
seedDB();
