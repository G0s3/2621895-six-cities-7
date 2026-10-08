import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      gap: '16px',
    }}
  >
    <h1 style={{ fontSize: '96px', margin: 0, lineHeight: 1 }}>404</h1>
    <p style={{ fontSize: '24px', margin: 0 }}>Page not found</p>
    <Link to="/" style={{ fontSize: '16px', color: '#4481c3' }}>
      Go to main page
    </Link>
  </div>
);
