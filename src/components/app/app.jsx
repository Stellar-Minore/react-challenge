import { Switch, Route } from 'react-router-dom';
import Profile from '../profile';

function App() {
  return (
    <div>
      <Switch>
        { /* profile screen */}
        <Route path="/" exact><Profile /></Route>
      </Switch>
    </div>
  );
}

export default App;
