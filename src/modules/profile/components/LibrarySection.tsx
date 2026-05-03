     import type { Book } from '../../../types/Book.interface';
    
    
     type Props = {
      books: Book[];
    };
    
    const lybrarySection = ({ books }: Props) => {
    return (
    <div>
  <h2 className="text-xl font-bold mb-3">BIBLIOTECA DIGITAL</h2>

  <div className="grid grid-cols-3 gap-6">
    {books.map(book => (
      <div
        key={book.id}
        className="rounded-[14px] border border-(--line) bg-(--panel) p-4"
      >

        <img
          src={book.imagen}
          alt={book.title}
          className="h-40 w-full object-cover rounded mb-3"
        />

        <p className="font-semibold">{book.title}</p>

        <p className="text-sm text-(--txt-secondary)">
          {book.author}
        </p>

        <button className="mt-3 w-full rounded bg-black text-white py-2">
          LEER ONLINE
        </button>
      </div>
    ))}
  </div>
</div>
    );
    };


    export default lybrarySection;