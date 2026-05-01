import { type Book } from "../types/Book.interface";

const classifications = ["Novela", "Poesía", "Ensayo", "Teatro", "Crónica", "Historia"] as const;
const formats = ["Tapa Dura", "Tapa Blanda", "Libro Digital"] as const;
const languagesPool = [
  ["Español"],
  ["Español", "Inglés"],
  ["Español", "Francés"],
  ["Español", "Portugués"],
  ["Español", "Italiano"]
];
const editorials = [
  "Editorial Sudamericana",
  "Planeta",
  "Alfaguara",
  "Seix Barral",
  "Anagrama",
  "Penguin Random House"
];

const makePrice = (id: number) => {
  const amount = 65000 + ((id * 137) % 55000);
  return amount.toLocaleString("es-CO");
};

const makeIsbn = (id: number) => `978-84-${String(9000 + (id % 1000)).padStart(4, "0")}-${String(id).padStart(3, "0")}-${(id % 10)}`;

const baseBooks: Book[] = [
  {
    id: 1,
    title: "La Vorágine",
    classification: "Novela",
    author: "José Eustasio Rivera",
    price: "99.000",
    description: "Novela cumbre de la literatura hispanoamericana que narra la huida del poeta Arturo Cova y Alicia a la selva amazónica.",
    stock: 5,
    imagen: "https://picsum.photos/seed/book-1/639/953",
    isbn: "978-84-9759-000-1",
    editorial: "Editorial Sudamericana",
    format: "Tapa Dura",
    languages: ["Español"]
  },
  {
    id: 2,
    title: "Sombras del Río",
    classification: "Novela",
    author: "María Fernanda López",
    price: "80.000",
    description: "Historia ficticia sobre un pueblo que vive a orillas de un río misterioso.",
    stock: 7,
    imagen: "https://picsum.photos/seed/book-2/639/954",
    isbn: "978-84-9002-002-2",
    editorial: "Planeta",
    format: "Tapa Blanda",
    languages: ["Español", "Inglés"]
  },
  {
    id: 3,
    title: "Versos de la Luna",
    classification: "Poesía",
    author: "Carlos Méndez",
    price: "70.000",
    description: "Colección de poemas inspirados en la luna y sus fases.",
    stock: 4,
    imagen: "https://picsum.photos/seed/book-3/639/955",
    isbn: "978-84-9003-003-3",
    editorial: "Alfaguara",
    format: "Libro Digital",
    languages: ["Español"]
  },
  {
    id: 4,
    title: "El eco del silencio",
    classification: "Ensayo",
    author: "Lucía Ramírez",
    price: "95.000",
    description: "Ensayo filosófico sobre la importancia del silencio en la vida moderna.",
    stock: 6,
    imagen: "https://picsum.photos/seed/book-4/639/956",
    isbn: "978-84-9004-004-4",
    editorial: "Seix Barral",
    format: "Tapa Dura",
    languages: ["Español", "Francés"]
  },
  {
    id: 5,
    title: "Caminos de fuego",
    classification: "Novela",
    author: "Julián Torres",
    price: "88.000",
    description: "Novela ficticia sobre la lucha de un pueblo contra la opresión.",
    stock: 9,
    imagen: "https://picsum.photos/seed/book-5/639/957",
    isbn: "978-84-9005-005-5",
    editorial: "Anagrama",
    format: "Tapa Blanda",
    languages: ["Español"]
  },
  {
    id: 6,
    title: "El teatro de las sombras",
    classification: "Teatro",
    author: "Ana Gómez",
    price: "77.000",
    description: "Obra teatral que explora la dualidad entre luz y oscuridad.",
    stock: 3,
    imagen: "https://picsum.photos/seed/book-6/639/950",
    isbn: "978-84-9006-006-6",
    editorial: "Penguin Random House",
    format: "Tapa Dura",
    languages: ["Español", "Italiano"]
  },
  {
    id: 7,
    title: "Palabras al viento",
    classification: "Poesía",
    author: "Ricardo Salazar",
    price: "65.000",
    description: "Poemas breves que evocan la fugacidad de la vida.",
    stock: 8,
    imagen: "https://picsum.photos/seed/book-7/639/958",
    isbn: "978-84-9007-007-7",
    editorial: "Editorial Sudamericana",
    format: "Libro Digital",
    languages: ["Español"]
  },
  {
    id: 8,
    title: "Horizontes perdidos",
    classification: "Novela",
    author: "Camila Herrera",
    price: "92.000",
    description: "Novela ficticia sobre un viaje hacia tierras desconocidas.",
    stock: 5,
    imagen: "https://picsum.photos/seed/book-8/639/959",
    isbn: "978-84-9008-008-8",
    editorial: "Planeta",
    format: "Tapa Blanda",
    languages: ["Español", "Portugués"]
  },
  {
    id: 9,
    title: "Reflexiones del alma",
    classification: "Ensayo",
    author: "Esteban Cruz",
    price: "85.000",
    description: "Ensayo sobre la espiritualidad y la búsqueda interior.",
    stock: 2,
    imagen: "https://picsum.photos/seed/book-9/639/940",
    isbn: "978-84-9009-009-9",
    editorial: "Alfaguara",
    format: "Libro Digital",
    languages: ["Español"]
  },
  {
    id: 10,
    title: "El canto del bosque",
    classification: "Novela",
    author: "Paola Martínez",
    price: "90.000",
    description: "Novela ficticia sobre la conexión entre humanos y naturaleza.",
    stock: 6,
    imagen: "https://picsum.photos/seed/book-10/639/960",
    isbn: "978-84-9010-010-0",
    editorial: "Seix Barral",
    format: "Tapa Dura",
    languages: ["Español", "Inglés"]
  }
];

const generatedBooks: Book[] = Array.from({ length: 200 }, (_, index) => {
  const id = index + 11;
  const classification = classifications[index % classifications.length];
  const format = formats[index % formats.length];
  const editorial = editorials[index % editorials.length];
  const languages = languagesPool[index % languagesPool.length];
  const number = index + 1;

  const titlePrefixes = [
    "Amanecer",
    "Bitácora",
    "Cenizas",
    "Desvelo",
    "Ecos",
    "Fragmentos",
    "Galería",
    "Horizonte",
    "Isla",
    "Jardín",
    "Kairós",
    "Laberinto",
    "Marea",
    "Noche",
    "Órbita",
    "Pulso",
    "Quimera",
    "Rastro",
    "Sendero",
    "Umbral"
  ];

  const titleNouns = [
    "de papel",
    "de invierno",
    "del viento",
    "de la memoria",
    "de la lluvia",
    "de los días",
    "oculto",
    "sereno",
    "errante",
    "final"
  ];

  const authors = [
    "Elena Duarte",
    "Tomás Rojas",
    "Marta Solano",
    "Iván Perea",
    "Sofía Leal",
    "Andrés Calderón",
    "Noelia Vargas",
    "Diego Salcedo",
    "Laura Mena",
    "Héctor Núñez",
    "Luis Avila",
    "Camilo Alarcon",
    "Jenny Avilan",
    "Wilson Gómez",
    "Santiago Cruz"
  ];

  const title = `${titlePrefixes[index % titlePrefixes.length]} ${titleNouns[index % titleNouns.length]} ${number}`;

  return {
    id,
    title,
    classification,
    author: authors[index % authors.length],
    price: makePrice(id),
    description: `Título ficticio número ${id} dentro de la colección ${classification.toLowerCase()} del catálogo de Relatos de Papel.`,
    stock: 2 + (id % 11),
    imagen: `https://picsum.photos/seed/book-${id}/639/9${String(40 + (id % 20)).padStart(2, "0")}`,
    isbn: makeIsbn(id),
    editorial,
    format,
    languages
  };
});

export const books: Book[] = [...baseBooks, ...generatedBooks];

export const getBookById = (id: number): Book | undefined => {
  const bookFound = books.find(book => book.id === id);

  return bookFound ? bookFound : undefined;
};
