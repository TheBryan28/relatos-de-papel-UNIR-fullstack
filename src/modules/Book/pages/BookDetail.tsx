import { useParams } from 'react-router-dom';
import { getBookById } from '../../../services/books-data';
import { BookNotFound } from '../components/BookNotFound';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Dropdown from '../../../components/ui/Dropdown';
import { useCart } from '../../../state/contexts/Cart.Context';

export default function BookDetail() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const bookId: number = Number(id);
  const book = getBookById(bookId);
  const navigate = useNavigate();
  const formatPrice = (value: number) => value.toLocaleString('es-CO');

  const handleAddToCart = () => {
    if (book) {
        addToCart({
          id: book.id,
          title: book.title,
          price: book.finalPrice,
          author: book.authors.join(', ') ?? 'Autor desconocido',
          imageUrl: book.imagesUrls[0]
        });
      }
    }
  
  const handleCheckout = () => {
    if (book) {
      navigate('/Checkout', { state: { singleItem: {
        id: book.id,
        title: book.title,
        price: book.finalPrice,
        author: book.authors.join(', ') ?? 'Autor desconocido',
        imageUrl: book.imagesUrls[0],
        quantity: 1
      } } });
    }
  }
  return (
    <>
      {book == undefined ? (
        <BookNotFound />
      ) : (
        <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 shadow-md">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="flex justify-center">
              <img
                src={book?.imagesUrls[0]}
                alt="Libro Aprende Python"
                className="w-64 object-contain md:w-80"
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">{book?.title}</h1>

              <p className="text-lg text-gray-600">{book?.authors.join(', ')}</p>

              <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4">
                <span className="text-gray-700">
                  <strong>Clasificación:</strong> {book?.category.join(', ')}
                </span>
                <span className="text-xl font-semibold text-gray-900">
                  ${book ? formatPrice(book.finalPrice) : ''}
                </span>
              </div>

              <p className="leading-relaxed text-gray-600">{book?.description}</p>

              <div className="flex flex-col gap-3">
                <Button
                  className="rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800"
                  onClick={() => handleAddToCart()}
                >
                  ADICIONAR AL CARRITO
                </Button>

                <Button
                  className="rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800"
                  onClick={() => handleCheckout()}
                >
                  COMPRAR AHORA
                </Button>
              </div>

              <Dropdown label="Detalles del libro">
                <div>
                  <p>
                    <strong>Número de páginas:</strong> {book?.pageCount ?? 'Desconocido'}
                  </p>
                  <p>
                    <strong>ISBN-13:</strong> {book?.isbn}
                  </p>
                  <p>
                    <strong>Editorial:</strong> {book?.publisher}
                  </p>
                  <p>
                    <strong>Formato:</strong> {book?.format}
                  </p>
                  <p>
                    <strong>Idiomas:</strong> {book?.languages.join(', ')}
                  </p>
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
