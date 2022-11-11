import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import loginBg from '../../assets/svg/stacked-waves-haikei.svg';

const cx = classNames.bind(styles);

function Login() {
  return (
    <div
      className={cx('wrapper')}
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={cx('content')}>
        <div className={cx('login-left')}>
          <h2>Welcome to Campaign Management!</h2>
          <img src={require('../../assets/svg/login-svg.svg').default} alt="" />
        </div>
        <div className={cx('login-right')}>
          <div className={cx('logo')}>
            <img src={require('../../assets/images/dac-logo.png')} alt="" />
            DAC Internship
          </div>
          <h3>Login to your Account</h3>
          <form action="" className={cx('form')}>
            <div className={cx('form-group')}>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" />
            </div>
            <div className={cx('form-group')}>
              <label htmlFor="email">Password</label>
              <input id="password" type="password" />
            </div>
            <button className={cx('btn-login')}>Login</button>
          </form>
          <div className={cx('divide')}>
            <span></span>
            <span>Or continue with</span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
