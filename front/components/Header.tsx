'use client';

import Link from 'next/link';
import { useHeaderViewModel } from './headerViewModel';

export default function Header() {
  const { isLoggedIn, showLogoutButton, handleLogout, toggleLogoutButton } = useHeaderViewModel();

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
          {!isLoggedIn ? (
            <>
              <li className="nav-item">
                <Link href="/login" className="nav-link">
                  Sign in
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/register" className="nav-link">
                  Sign up
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link href="/article/new" className="nav-link">
                  <div className="am b bm ah aj by bz n o ca cb">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Write">
                      {/* SVG path */}
                    </svg>
                    <div className="ai s">Write</div>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <button className="bf cc w n o ap cd ce cf" aria-label="user options menu" onClick={toggleLogoutButton}>
                  <div className="s by">
                    <div className="s by">
                      <img alt="User" className="s cm ch ci cj cn" src="user-avatar.png" width="32" height="32" loading="lazy" />
                      <div className="cg ch s ci cj ck u bf cl"></div>
                    </div>
                  </div>
                </button>
                {showLogoutButton && (
                  <button className="logout-button" onClick={handleLogout}>
                    Logout
                  </button>
                )}
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
