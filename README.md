# Library App

### Learning Objectives

- Create the illusion of multiple pages in a Single Page Application routes by using react-router.
- Use `this.props.match.params` or the `useParams` hook to get the `:id` in a path for creating a List/Detail pattern with react-router.
- Use `<Link>` to create links that navigate a Single Page Application.

### Description

Your local library hired a developer to build an interface for their database of books. Unfortunately, the previous developer ended up taking another job while leaving the library app unfinished. Luckily, the views have been created. However, there's currently no way to navigate to the views as the app hasn't been configured with a router!

Your task is to finish off the remaining work by adding the necessary routes to the `App.jsx` file. You need to create the following routes:

- `/books`
  - This page lists all the books in the library's database.
- `/book/:id`
  - This page shows the details for a single book, such as its author and genre.

Take a look through the `views` directory to find the existing pages.

### Acceptance Criteria

- A user can view a list of books
- A user can select a book from the list and see details about that book
- A user can click a link from the book detail page to go back to the list of books

### Rubric

| Task              | Points |
| ----------------- | ------ |
| `/books` route    | 2.5    |
| `/books:id` route | 2.5    |
