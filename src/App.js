import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/loginpage/LoginPage';
import ProfileSetup from './pages/profilesetup/ProfileSetup';
// import Results from './pages/results/Results';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestingApp from './pages/TestPage/TestingApp';
import Auth from './pages/admin-panel/admin-authenticate/authenticate';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profileSetup" element={<ProfileSetup />} />
        <Route path="/Test" element={<TestingApp />} />
        <Route path="/admin" element={<Auth />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
