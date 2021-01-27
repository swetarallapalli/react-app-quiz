
import './App.css';
import Home from './components/home';
import { Switch, Route } from 'react-router-dom';
import Quiz from './components/quiz';
import SingleQuestion from './components/singleQuestion';

function App() {
  return (
    <div className="main-container">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/quiz" component={Quiz} />
        <Route path="/single-question" component={SingleQuestion} />
      </Switch>

    </div>
  );
}

export default App;
