import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

function Layout({ children }) {
  const location = useLocation();
  const isSpecialPage =
    children.type?.name === 'NotFound' || children.type?.name === 'Housing';

  return (
    <div
      className={isSpecialPage ? 'no-underline-layout' : ''}
      style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
    >
      <Header />
      <main className="main-container">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;