import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/Layouts';
import Account from './pages/Account';
import Campaign from './pages/Campaign';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

function App() {
  const user = useSelector((state) => state.auth.login.user);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          {/* <Route path="/register" element={<Register />}></Route> */}

          <Route path="/" render element={user !== null ? <MainLayout /> : <Navigate replace to="/login" />}>
            <Route index element={<Profile />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="campaign" element={<Campaign />} />
            <Route path="account" element={<Account />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
