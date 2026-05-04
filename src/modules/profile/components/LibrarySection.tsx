import type { Book } from '../../../types/Book.interface';

type Props = {
  books: Book[];
};

const lybrarySection = ({ books }: Props) => {
  return (
    <div>
      <h2 className="mb-3 text-xl font-bold">BIBLIOTECA DIGITAL</h2>

      <div className="grid grid-cols-3 gap-6">
        {books.map(book => (
          <div key={book.id} className="rounded-[14px] border border-(--line) bg-(--panel) p-4">
            <img
              src={book.imagesUrls[0]}
              alt={book.title}
              className="mb-3 h-40 w-full rounded object-cover"
            />

            <p className="font-semibold">{book.title}</p>

            <p className="text-sm text-(--txt-secondary)">
              {book.authors[0] ?? 'Autor desconocido'}
            </p>

            <button className="mt-3 w-full rounded bg-black py-2 text-white">LEER ONLINE</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default lybrarySection;
