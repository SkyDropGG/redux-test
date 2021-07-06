import './App.css';
import { Counter } from './Counter.component';
import { store } from './redux/createStore';
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <Counter />

      </Provider>

    </div>
  );
}

export default App;
