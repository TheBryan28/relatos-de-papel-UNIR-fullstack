import { Link } from "react-router-dom";

export function BookNotFound() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-md text-center">
      
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 text-3xl">
          📚
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-2">
        Libro no encontrado
      </h1>

      <p className="text-gray-600 mb-6">
        Lo sentimos, el libro que estás buscando no existe o ha sido eliminado.
      </p>

      <div className="flex gap-4 justify-center">
        <Link
          to="/"
          className="bg-black text-white px-6 py-3 rounded-lg font-semibold"
        >
          Volver al inicio
        </Link>

        <Link
          to="/catalogo"
          className="border px-6 py-3 rounded-lg font-semibold"
        >
          Ver catálogo
        </Link>
      </div>
    </div>
  );
}