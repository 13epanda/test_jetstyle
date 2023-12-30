import FormAddBook from "./form-add-book";
import BookList from "./book-list";

const App = () => {
    return (
      <div className="container">
        <h1 className="main-title">Локальная библиотека :)</h1>
        <FormAddBook/>
        <BookList/>
      </div>
  );
}
export default App;