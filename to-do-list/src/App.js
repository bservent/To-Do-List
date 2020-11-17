import { Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/todos' component={ TodosContainer } />
      </Switch>
    </div>
  );
}

export default App;
