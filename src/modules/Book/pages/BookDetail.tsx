import { useParams } from 'react-router-dom';
import { BookNotFound } from '../components/BookNotFound';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Dropdown from '../../../components/ui/Dropdown';
import { useCart } from '../../../state/contexts/Cart.Context';
import useGetSupplyById from '../../../hooks/useGetSupplyById';
import { useEffect } from 'react';

export default function BookDetail() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const { supply, fetchSupply } = useGetSupplyById(id || '');
  const navigate = useNavigate();
  const formatPrice = (value: number) => value.toLocaleString('es-CO');

  useEffect(() => {
    if (id) {
      fetchSupply();
    }
  }, [id, fetchSupply]);

  const handleAddToCart = () => {
    if (supply) {
        addToCart({
          id: supply.id,
          title: supply.title,
          price: supply.finalPrice,
          author: supply.author ?? 'Autor desconocido',
          imageUrl: supply.images[0]
        });
      }
    }
  
  const handleCheckout = () => {
    if (supply) {
      navigate('/Checkout', { state: { singleItem: {
        id: supply.id,
        title: supply.title,
        price: supply.finalPrice,
        author: supply.author ?? 'Autor desconocido',
        imageUrl: supply.images[0],
        quantity: 1
      } } });
    }
  }
  return (
    <>
      {supply == undefined ? (
        <BookNotFound />
      ) : (
        <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 shadow-md">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="flex justify-center">
              <img
                src={supply?.images[0]}
                alt="Libro Aprende Python"
                className="w-64 object-contain md:w-80"
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">{supply?.title}</h1>

              <p className="text-lg text-gray-600">{supply?.author}</p>

              <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4">
                <span className="text-gray-700">
                  <strong>Clasificación:</strong> {supply?.categories.join(', ')}
                </span>
                <span className="text-xl font-semibold text-gray-900">
                  ${supply ? formatPrice(supply.finalPrice) : ''}
                </span>
              </div>

              <p className="leading-relaxed text-gray-600">{supply?.description}</p>

              <div className="flex flex-col gap-3">
                <Button
                  className="rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800"
                  id="add-to-cart-button"
                  onClick={() => handleAddToCart()}
                >
                  ADICIONAR AL CARRITO
                </Button>

                <Button
                  className="rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800"
                  id="buy-now-button"
                  onClick={() => handleCheckout()}
                >
                  COMPRAR AHORA
                </Button>
              </div>

              <Dropdown label="Detalles del libro">
                <div>
                  <p>
                    <strong>Número de páginas:</strong> {'Desconocido'}
                  </p>
                  <p>
                    <strong>ISBN-13:</strong> {supply?.isbn}
                  </p>
                  <p>
                    <strong>Formato:</strong> {supply?.format}
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
