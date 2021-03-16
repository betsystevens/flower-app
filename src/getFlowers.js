const get = (url) =>
  fetch(url)
    .then((response) => response.json())
    .then((data) => data);

export default get;
