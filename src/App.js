import './App.css';
import get from './getFlowers';

get()
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
