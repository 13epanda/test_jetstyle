import {useState} from 'react';
import {useLocalStorage} from "../useLocalStorage";

const FormAddBook = () => {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState();
    const [quantity_books, setQuantity_books] = useLocalStorage("quantity_books",0);

    const onBookAddClick = () => {
        localStorage.setItem('book'+ quantity_books, JSON.stringify({title, author, cover}));
        JSON.parse(localStorage.getItem('book'+ quantity_books));
        setQuantity_books(quantity_books + 1)
        setAuthor('');
        setTitle('');
        window.location.reload();
    }
    const uploadImage = (event) => {
        let reader = new FileReader();
        reader.addEventListener("load", function () {
            if (this.result && localStorage) {
                setCover(this.result)
            } else {
                alert();
            }
        });
        reader.readAsDataURL(event.target.files[0]);
    }
    return (
        <section className="formAddBook">
            <h2>Нужно больше книг богу книг</h2>
            <form>
                <label className="formAddBook__input input-text">
                    <span className="input-text__span">Автор/авторы: </span>
                    <input className="input-text__input"
                           type="text"
                           name="author"
                           value={author}
                           onChange={(e) => setAuthor(e.target.value)}
                           placeholder="Введите автора книги"
                           aria-label="Автор/авторы книги."
                           required
                    />
                </label>
                <label className="formAddBook__input input-text">
                    <span className="input-text__span">Название: </span>
                    <input className="input-text__input"
                           type="text"
                           name="title"
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                           placeholder="Введите полное название книги"
                           aria-label="Название книги."
                           required
                    />
                </label>
                <label className="formAddBook__input input-image">
                    <span className="input-image__span">Обложка книги: </span>
                    <input className="input-image__input"
                           type="file"
                           size="50"
                           onChange={(e) => uploadImage(e)}
                           name="cover"
                           aria-label="Обложка книги."
                           required
                    />
                </label>
                <input
                    type="button"
                    value="Добавить книгу"
                    onClick={onBookAddClick}
                    className="button button-primary"
                />
            </form>
        </section>
    );
};

export default FormAddBook;