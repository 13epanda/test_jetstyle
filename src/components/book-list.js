import {useState} from "react";

const BookList = () => {
    const onDeleteButtonClick = (evt) => {
        let result = evt.target.className.match(/book\d+$/)[0].toString();
        localStorage.removeItem(result);
        const new_quantity = localStorage.getItem('quantity_books') - 1;
        localStorage.setItem('quantity_books', new_quantity.toString());
        window.location.reload();
    }
    const [books, setBooks] = useState([]);
    for (let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i).slice(0,4)==='book') {
            const book = JSON.parse(localStorage.getItem(localStorage.key(i)));
            books.push(
                <li key={localStorage.key(i)} className={"book " + localStorage.key(i)}>
                    <div className="cover">
                        <img className="cover__img" width="100" height="100" src={book.cover} alt="Обложка книги."/>
                    </div>
                    <div>
                        <p>
                            <span>Название: </span>
                            <span className="title">{book.title}</span>
                        </p>
                        <p>
                            <span>Автор/ы: </span>
                            <span className="author">{book.author}</span>
                        </p>
                    </div>
                    <button className={"button button-second delete-book " + localStorage.key(i)}
                            onClick={onDeleteButtonClick} aria-label="Удалить из списка.">X
                    </button>
                </li>
            )
        }
    }
    return (
        <section>
            <h2>Список имеющихся книг</h2>
            <ol className="book-list">{books}</ol>
        </section>
    );
};

export default BookList;