import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AdminLayout.module.scss';

const cx = classNames.bind(styles);

function AdminLayout() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
