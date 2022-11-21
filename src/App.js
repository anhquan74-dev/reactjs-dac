import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminLayout, UserLayout } from './components/Layouts';
import Account from './pages/Account';
import Campaign from './pages/Campaign';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* <Route path="/register" element={<Register />}></Route> */}

          <Route path="/user" element={<UserLayout />}></Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="campaign" element={<Campaign />} />
            <Route path="account" element={<Account />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
