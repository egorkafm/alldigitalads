import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { LinksPage, PreviewPage, ProfileDetailsPage } from './routes';
import { StoreProvider } from './context/StoreContext';

import './App.css';

function App() {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/links" replace />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="/profile-details" element={<ProfileDetailsPage />} />
          <Route path="/preview" element={<PreviewPage />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;
