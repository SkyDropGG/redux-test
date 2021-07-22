import './App.css';
import { Counter } from './Counter.component';
import { Provider } from 'react-redux';
import { store } from './redux/createStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
