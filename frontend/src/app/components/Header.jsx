import Link from 'next/link';

const Header = () => {
  return (
    <nav className="navbar navbar-light">

      
      <div className="container">
        <Link href="/" className="navbar-brand">
         conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/editor" className="nav-link">
              <i className="ion-compose"></i>&nbsp;New Article
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/settings" className="nav-link">
              <i className="ion-gear-a"></i>&nbsp;Settings
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/profile/eric-simons" className="nav-link">
                <img src="" className="user-pic" />
                Eric Simons
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;