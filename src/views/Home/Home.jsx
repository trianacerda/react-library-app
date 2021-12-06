import { BrowserRouter as Router, Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}> Aunty Tri Tri's Home Page</h1>{' '}
      <Link to="/books">
        <h1 style={{ textAlign: 'center' }}>Library*Catalog</h1>
      </Link>
    </>
  );
}

export default Home;
