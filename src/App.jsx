import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './views/Books/BookList';
import BookDetail from './views/Books/BookDetail';
import './App.css';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <section className="books">
        <Router>
          <Switch>
            <Route path="/books/:id" component={BookDetail} />
            <Route path="/books" component={BookList} />
          </Switch>
        </Router>
      </section>
      <BookList />
    </main>
  );
}

export default App;
