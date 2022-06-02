import { Routes, Route } from 'react-router-dom';
import { Profile } from '../profile';
import { ImageDetails } from '../imageDetails';

function App() {
  return (
    <div>
      <Routes>
        { /* profile screen */}
        <Route path="/" element={<Profile />} />

        { /* image details screen */}
        <Route path="/image_details/:id" element={<ImageDetails />} />
      </Routes>
    </div>
  );
}

export { App };
