import './App.css';
import get from './getFlowers';

get('http://localhost/php-crud-api/api.php')
  .then((flowers) => console.log(flowers))
  .catch((err) => console.error(`error: ${err}`));

function App() {
  return (
    <div className='App'>
      <header className='App-header'>Hello World</header>
    </div>
  );
}

export default App;
