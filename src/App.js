import './App.css';

const url = 'http://localhost/php-crud-api/api.php';
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch(function(err) {
    console.error(`error: ${err}`);
    console.error(`oops, network error`);
    console.error(`(it's not you, it's them)`);
  });

function App() {
  return (
    <div className='App'>
      <header className='App-header'>Hello World</header>
    </div>
  );
}

export default App;
