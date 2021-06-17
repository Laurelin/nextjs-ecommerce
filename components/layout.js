import PropTypes from 'prop-types';
import NavBar from './navbar';

export default function Layout({ children }) {
  return (
    <div className="container w-4/6 mx-auto">
      <NavBar />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.object
};
