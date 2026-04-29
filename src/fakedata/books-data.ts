import {type Book } from "../types/Book.interface";


export const books: Book[] = [
  {
    id: 1,
    titulo: "La Vorágine",
    clasificacion: "Novela",
    autor: "José Eustasio Rivera",
    precio: "99.000",
    descripcion: "Novela cumbre de la literatura hispanoamericana que narra la huida del poeta Arturo Cova y Alicia a la selva amazónica.",
    stock: 5,
    imagen: "https://picsum.photos/639/953"
  },
  {
    id: 2,
    titulo: "Sombras del Río",
    clasificacion: "Novela",
    autor: "María Fernanda López",
    precio: "80.000",
    descripcion: "Historia ficticia sobre un pueblo que vive a orillas de un río misterioso.",
    stock: 7,
    imagen: "https://picsum.photos/639/954"
  },
  {
    id: 3,
    titulo: "Versos de la Luna",
    clasificacion: "Poesía",
    autor: "Carlos Méndez",
    precio: "70.000",
    descripcion: "Colección de poemas inspirados en la luna y sus fases.",
    stock: 4,
    imagen: "https://picsum.photos/639/955"
  },
  {
    id: 4,
    titulo: "El eco del silencio",
    clasificacion: "Ensayo",
    autor: "Lucía Ramírez",
    precio: "95.000",
    descripcion: "Ensayo filosófico sobre la importancia del silencio en la vida moderna.",
    stock: 6,
    imagen: "https://picsum.photos/639/956"
  },
  {
    id: 5,
    titulo: "Caminos de fuego",
    clasificacion: "Novela",
    autor: "Julián Torres",
    precio: "88.000",
    descripcion: "Novela ficticia sobre la lucha de un pueblo contra la opresión.",
    stock: 9,
    imagen: "https://picsum.photos/639/957"
  },
  {
    id: 6,
    titulo: "El teatro de las sombras",
    clasificacion: "Teatro",
    autor: "Ana Gómez",
    precio: "77.000",
    descripcion: "Obra teatral que explora la dualidad entre luz y oscuridad.",
    stock: 3,
    imagen: "https://picsum.photos/639/950"
  },
  {
    id: 7,
    titulo: "Palabras al viento",
    clasificacion: "Poesía",
    autor: "Ricardo Salazar",
    precio: "65.000",
    descripcion: "Poemas breves que evocan la fugacidad de la vida.",
    stock: 8,
    imagen: "https://picsum.photos/639/958"
  },
  {
    id: 8,
    titulo: "Horizontes perdidos",
    clasificacion: "Novela",
    autor: "Camila Herrera",
    precio: "92.000",
    descripcion: "Novela ficticia sobre un viaje hacia tierras desconocidas.",
    stock: 5,
    imagen: "https://picsum.photos/639/959"
  },
  {
    id: 9,
    titulo: "Reflexiones del alma",
    clasificacion: "Ensayo",
    autor: "Esteban Cruz",
    precio: "85.000",
    descripcion: "Ensayo sobre la espiritualidad y la búsqueda interior.",
    stock: 2,
    imagen: "https://picsum.photos/639/940"
  },
  {
    id: 10,
    titulo: "El canto del bosque",
    clasificacion: "Novela",
    autor: "Paola Martínez",
    precio: "90.000",
    descripcion: "Novela ficticia sobre la conexión entre humanos y naturaleza.",
    stock: 6,
    imagen: "https://picsum.photos/639/960"
  },
  
];

export const getBookById = (id: number): Book | undefined => {
  

  const bookFound = books.find(book => book.id === id);
 
  return bookFound ? bookFound : undefined;



}
