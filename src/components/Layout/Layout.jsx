import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import Styles from './Layout.module.css';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className={Styles.content}>{children}</div>
      <Footer></Footer>
    </>
  );
};

Layout.defaultProps = {
  children: undefined
};

Layout.propTypes = {
  children: PropTypes.node
};
