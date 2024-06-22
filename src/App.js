import "./App.css";
import { data } from "./books";
import Book from "./Book";
import { greeting } from "./ testing/testing";

function Booklist() {
  //... spread operator
  console.log(greeting);
  return (
    <section className="booklist">
      {data.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

function App() {
  return (
    <>
      <Booklist />
    </>
  );
}

export default App;
