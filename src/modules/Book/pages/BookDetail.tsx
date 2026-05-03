import { useParams } from 'react-router-dom';
import { getBookById } from '../../../services/books-data';
import { BookNotFound } from '../components/BookNotFound';
import { useNavigate } from 'react-router-dom';


export default function BookDetail() {
  const { id } = useParams();
  const bookId: number = Number(id);
  const book = getBookById(bookId);
  const navigate = useNavigate();
  console.log('BookDetail - book:', book);
  return (
    <>
      {book == undefined ? (
        <BookNotFound />
      ) : (
        <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 shadow-md">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="flex justify-center">
              <img
                src={book?.imagen}
                alt="Libro Aprende Python"
                className="w-64 object-contain md:w-80"
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">{book?.title}</h1>

              <p className="text-lg text-gray-600">{book?.author}</p>

              <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4">
                <span className="text-gray-700">
                  <strong>Clasificación:</strong> {book?.classification}
                </span>
                <span className="text-xl font-semibold text-gray-900">{book?.price}</span>
              </div>

              <p className="leading-relaxed text-gray-600">{book?.description}</p>

              <div className="flex flex-col gap-3">
                <button 
                className="rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800" onClick={() => navigate('/Cart')}>
                  ADICIONAR AL CARRITO
                </button>

                <button className="rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
                  COMPRAR AHORA
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 pt-4 text-sm text-gray-700 sm:grid-cols-2">
                <p>
                  <strong>ISBN-13:</strong> 788-7899-890-88
                </p>
                <p>
                  <strong>Editorial:</strong> S&S Editores
                </p>
                <p>
                  <strong>Formato:</strong> Impreso, Digital
                </p>
                <p>
                  <strong>Idiomas:</strong> Español, Inglés, Francés
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
