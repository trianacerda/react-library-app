import { Router, NavLink } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import './App.css'

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Router>
        <NavLink exact path="/" className="home">
          Home
        </NavLink>
        <NavLink path="/books" className="books">
          Books
        </NavLink>
      </Router>
    </main>
  )
}

export default App

{
  /* <BookList /> */
}
