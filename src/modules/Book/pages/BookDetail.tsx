import { useParams } from "react-router-dom";
import { getBookById } from "../../../fakedata/books-data";
import { BookNotFound } from "../components/BookNotFound";
//import { useContext } from "react";
//import { CartContext } from "./CartContext";


export default function BookDetail() {
  const { id } = useParams();
  const bookId:number = Number(id);
  const book = getBookById(bookId);
  //const { book } = useBook(Number(id));
  //const { addToCart, cart } = useContext(CartContext);

  //if (!book) {
    //return <p>Libro { id } no encontrado</p>;
  //}

  //const handleAdd = () => {
    //addToCart(book);
  //};
  console.log("BookDetail - book:", book);
  return (
    <> 
    {book==undefined ? 
    <BookNotFound />  :
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-2xl shadow-md">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
  
    <div className="flex justify-center">
      <img 
        src={book?.imagen} 
        alt="Libro Aprende Python"
        className="w-64 md:w-80 object-contain"
      />
    </div>

   
    <div className="space-y-4">
      
     
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
        {book?.titulo} 
      </h1>

    
      <p className="text-lg text-gray-600">
        {book?.autor} 
      </p>

      
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
        <span className="text-gray-700">
          <strong>Clasificación:</strong> {book?.clasificacion}
        </span>
        <span className="text-xl font-semibold text-gray-900">
          {book?.precio}
        </span>
      </div>

   
      <p className="text-gray-600 leading-relaxed">
        {book?.descripcion}
      </p>

     
      <div className="flex flex-col gap-3">
        <button className="bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          ADICIONAR AL CARRITO
        </button>

        <button className="bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          COMPRAR AHORA
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm text-gray-700">
        <p><strong>ISBN-13:</strong> 788-7899-890-88</p>
        <p><strong>Editorial:</strong> S&S Editores</p>
        <p><strong>Formato:</strong> Impreso, Digital</p>
        <p><strong>Idiomas:</strong> Español, Inglés, Francés</p>
      </div>

    </div>
  </div>
</div>
    
    }
  </>
);

}