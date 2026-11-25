import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { logoutAction } from '../../store/api-actions';

type HeaderNavProps = {
  userIsAuthorized: boolean;
};

export const HeaderNav = ({ userIsAuthorized }: HeaderNavProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSignOut = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {userIsAuthorized ? (
          <>
            <li className="header__nav-item user">
              <Link
                className="header__nav-link header__nav-link--profile"
                to="/favorites"
              >
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
                </span>
                <span className="header__favorite-count">3</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#" onClick={handleSignOut}>
                <span className="header__signout">Sign out</span>
              </a>
            </li>
          </>
        ) : (
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to="/login"
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
