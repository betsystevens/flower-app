const get = () =>
  fetch('http://localhost/php-crud-api/api.php')
    .then((response) => response.json())
    .then((data) => data);

export default get;
