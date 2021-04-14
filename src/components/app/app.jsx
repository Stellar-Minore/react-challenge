import { Switch, Route } from 'react-router-dom';
import Profile from '../profile';
import ImageDetails from '../imageDetails';

function App() {
  return (
    <div>
      <Switch>
        { /* profile screen */}
        <Route path="/" exact><Profile /></Route>

        { /* image details screen */}
        <Route path="/image_details/:id" component={ImageDetails} exact />
      </Switch>
    </div>
  );
}

export default App;
