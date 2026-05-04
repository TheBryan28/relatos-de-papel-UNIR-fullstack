import { type Book, BookCategory, BookFormat, Language } from "../types/Book.interface";

const categoryPool: BookCategory[] = [
  BookCategory.FICTION,
  BookCategory.HISTORY,
  BookCategory.SCIENCE,
  BookCategory.TECHNOLOGY,
  BookCategory.ROMANCE,
  BookCategory.MITOLOGY,
  BookCategory.BIOGRAPHY,
  BookCategory.NON_FICTION,
  BookCategory.SELF_HELP,
  BookCategory.CHILDREN
];

const formatPool: BookFormat[] = [BookFormat.PHYSICAL, BookFormat.DIGITAL_PDF, BookFormat.DIGITAL_EPUB];

const languagesPool: Language[][] = [
  [Language.ES],
  [Language.ES, Language.EN],
  [Language.ES, Language.FR],
  [Language.ES, Language.PT],
  [Language.ES, Language.EN, Language.FR]
];

const editorials = [
  "Editorial Sudamericana",
  "Planeta",
  "Alfaguara",
  "Seix Barral",
  "Anagrama",
  "Penguin Random House"
];

const makePrice = (id: number) => 65000 + ((id * 137) % 55000);
const makeDiscount = (id: number) => (id % 9 === 0 ? 15 : id % 5 === 0 ? 10 : 0);
const makeFinalPrice = (price: number, discountPercent: number) =>
  Math.round(price * (1 - discountPercent / 100));
const makeIsbn = (id: number) =>
  `978-84-${String(9000 + (id % 1000)).padStart(4, "0")}-${String(id).padStart(3, "0")}-${id % 10}`;
const makePublishedDate = (id: number) => new Date(2000 + (id % 20), id % 12, (id % 28) + 1);
const makeUpdatedDate = (baseDate: Date) => new Date(baseDate.getTime() + 1000 * 60 * 60 * 24 * 30);
const makeCover = (id: number) =>
  `https://picsum.photos/seed/book-${id}/639/9${String(40 + (id % 20)).padStart(2, "0")}`;

const baseBooks: Book[] = [
  {
    id: 1,
    title: "La Vorágine",
    isbn: "978-84-9759-000-1",
    description:
      "Novela cumbre de la literatura hispanoamericana que narra la huida del poeta Arturo Cova y Alicia a la selva amazónica.",
    authors: ["José Eustasio Rivera"],
    publisher: "Editorial Sudamericana",
    publishedAt: new Date(1924, 0, 1),
    category: [BookCategory.FICTION],
    format: BookFormat.PHYSICAL,
    languages: [Language.ES],
    price: 99000,
    discountPercent: 0,
    finalPrice: 99000,
    stock: 5,
    imagesUrls: ["https://picsum.photos/seed/book-1/639/953"],
    averageRating: 4.6,
    reviewCount: 128,
    createdAt: new Date(2024, 0, 12),
    updatedAt: new Date(2025, 3, 10),
    isActive: true
  },
  {
    id: 2,
    title: "Sombras del Río",
    isbn: "978-84-9002-002-2",
    description: "Historia ficticia sobre un pueblo que vive a orillas de un río misterioso.",
    authors: ["María Fernanda López"],
    publisher: "Planeta",
    publishedAt: new Date(2006, 5, 18),
    category: [BookCategory.FICTION],
    format: BookFormat.PHYSICAL,
    languages: [Language.ES, Language.EN],
    price: 80000,
    discountPercent: 0,
    finalPrice: 80000,
    stock: 7,
    imagesUrls: ["https://picsum.photos/seed/book-2/639/954"],
    averageRating: 4.1,
    reviewCount: 84,
    createdAt: new Date(2024, 1, 8),
    updatedAt: new Date(2025, 2, 22),
    isActive: true
  },
  {
    id: 3,
    title: "Versos de la Luna",
    isbn: "978-84-9003-003-3",
    description: "Colección de poemas inspirados en la luna y sus fases.",
    authors: ["Carlos Méndez"],
    publisher: "Alfaguara",
    publishedAt: new Date(2011, 8, 12),
    category: [BookCategory.ROMANCE],
    format: BookFormat.DIGITAL_EPUB,
    languages: [Language.ES],
    price: 70000,
    discountPercent: 10,
    finalPrice: 63000,
    stock: 4,
    fileUrl: "https://relatos.example.com/books/3.epub",
    imagesUrls: ["https://picsum.photos/seed/book-3/639/955"],
    averageRating: 4.0,
    reviewCount: 61,
    createdAt: new Date(2024, 2, 14),
    updatedAt: new Date(2025, 2, 28),
    isActive: true
  },
  {
    id: 4,
    title: "El eco del silencio",
    isbn: "978-84-9004-004-4",
    description: "Ensayo filosófico sobre la importancia del silencio en la vida moderna.",
    authors: ["Lucía Ramírez"],
    publisher: "Seix Barral",
    publishedAt: new Date(2017, 2, 5),
    category: [BookCategory.NON_FICTION],
    format: BookFormat.PHYSICAL,
    languages: [Language.ES, Language.FR],
    price: 95000,
    discountPercent: 0,
    finalPrice: 95000,
    stock: 6,
    imagesUrls: ["https://picsum.photos/seed/book-4/639/956"],
    averageRating: 4.3,
    reviewCount: 73,
    createdAt: new Date(2024, 3, 4),
    updatedAt: new Date(2025, 3, 12),
    isActive: true
  },
  {
    id: 5,
    title: "Caminos de fuego",
    isbn: "978-84-9005-005-5",
    description: "Novela ficticia sobre la lucha de un pueblo contra la opresión.",
    authors: ["Julián Torres"],
    publisher: "Anagrama",
    publishedAt: new Date(2012, 6, 9),
    category: [BookCategory.HISTORY],
    format: BookFormat.PHYSICAL,
    languages: [Language.ES],
    price: 88000,
    discountPercent: 0,
    finalPrice: 88000,
    stock: 9,
    imagesUrls: ["https://picsum.photos/seed/book-5/639/957"],
    averageRating: 4.2,
    reviewCount: 102,
    createdAt: new Date(2024, 4, 1),
    updatedAt: new Date(2025, 1, 10),
    isActive: true
  },
  {
    id: 6,
    title: "El teatro de las sombras",
    isbn: "978-84-9006-006-6",
    description: "Obra teatral que explora la dualidad entre luz y oscuridad.",
    authors: ["Ana Gómez"],
    publisher: "Penguin Random House",
    publishedAt: new Date(2015, 10, 21),
    category: [BookCategory.FICTION],
    format: BookFormat.PHYSICAL,
    languages: [Language.ES, Language.PT],
    price: 77000,
    discountPercent: 0,
    finalPrice: 77000,
    stock: 3,
    imagesUrls: ["https://picsum.photos/seed/book-6/639/950"],
    averageRating: 4.1,
    reviewCount: 56,
    createdAt: new Date(2024, 5, 6),
    updatedAt: new Date(2025, 2, 1),
    isActive: true
  },
  {
    id: 7,
    title: "Palabras al viento",
    isbn: "978-84-9007-007-7",
    description: "Poemas breves que evocan la fugacidad de la vida.",
    authors: ["Ricardo Salazar"],
    publisher: "Editorial Sudamericana",
    publishedAt: new Date(2018, 4, 16),
    category: [BookCategory.ROMANCE],
    format: BookFormat.DIGITAL_PDF,
    languages: [Language.ES],
    price: 65000,
    discountPercent: 15,
    finalPrice: 55250,
    stock: 8,
    fileUrl: "https://relatos.example.com/books/7.pdf",
    imagesUrls: ["https://picsum.photos/seed/book-7/639/958"],
    averageRating: 4.4,
    reviewCount: 110,
    createdAt: new Date(2024, 5, 20),
    updatedAt: new Date(2025, 0, 15),
    isActive: true
  },
  {
    id: 8,
    title: "Horizontes perdidos",
    isbn: "978-84-9008-008-8",
    description: "Novela ficticia sobre un viaje hacia tierras desconocidas.",
    authors: ["Camila Herrera"],
    publisher: "Planeta",
    publishedAt: new Date(2014, 9, 30),
    category: [BookCategory.FICTION],
    format: BookFormat.PHYSICAL,
    languages: [Language.ES, Language.PT],
    price: 92000,
    discountPercent: 0,
    finalPrice: 92000,
    stock: 5,
    imagesUrls: ["https://picsum.photos/seed/book-8/639/959"],
    averageRating: 4.3,
    reviewCount: 94,
    createdAt: new Date(2024, 6, 11),
    updatedAt: new Date(2025, 4, 5),
    isActive: true
  },
  {
    id: 9,
    title: "Reflexiones del alma",
    isbn: "978-84-9009-009-9",
    description: "Ensayo sobre la espiritualidad y la búsqueda interior.",
    authors: ["Esteban Cruz"],
    publisher: "Alfaguara",
    publishedAt: new Date(2019, 6, 7),
    category: [BookCategory.SELF_HELP],
    format: BookFormat.DIGITAL_PDF,
    languages: [Language.ES],
    price: 85000,
    discountPercent: 0,
    finalPrice: 85000,
    stock: 2,
    fileUrl: "https://relatos.example.com/books/9.pdf",
    imagesUrls: ["https://picsum.photos/seed/book-9/639/940"],
    averageRating: 4.0,
    reviewCount: 38,
    createdAt: new Date(2024, 7, 2),
    updatedAt: new Date(2025, 1, 12),
    isActive: true
  },
  {
    id: 10,
    title: "El canto del bosque",
    isbn: "978-84-9010-010-0",
    description: "Novela ficticia sobre la conexión entre humanos y naturaleza.",
    authors: ["Paola Martínez"],
    publisher: "Seix Barral",
    publishedAt: new Date(2010, 3, 18),
    category: [BookCategory.MITOLOGY],
    format: BookFormat.PHYSICAL,
    languages: [Language.ES, Language.EN],
    price: 90000,
    discountPercent: 0,
    finalPrice: 90000,
    stock: 6,
    imagesUrls: ["https://picsum.photos/seed/book-10/639/960"],
    averageRating: 4.5,
    reviewCount: 122,
    createdAt: new Date(2024, 8, 9),
    updatedAt: new Date(2025, 4, 19),
    isActive: true
  }
];

const generatedBooks: Book[] = Array.from({ length: 200 }, (_, index) => {
  const id = index + 11;
  const category = categoryPool[index % categoryPool.length];
  const format = formatPool[index % formatPool.length];
  const publisher = editorials[index % editorials.length];
  const languages = languagesPool[index % languagesPool.length];
  const number = index + 1;
  const price = makePrice(id);
  const discountPercent = makeDiscount(id);
  const finalPrice = makeFinalPrice(price, discountPercent);
  const publishedAt = makePublishedDate(id);
  const updatedAt = makeUpdatedDate(publishedAt);

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
  const fileExtension = format === BookFormat.DIGITAL_EPUB ? "epub" : "pdf";

  return {
    id,
    title,
    isbn: makeIsbn(id),
    description: `Título ficticio número ${id} dentro de la colección ${category.toLowerCase()} del catálogo de Relatos de Papel.`,
    authors: [authors[index % authors.length]],
    publisher,
    publishedAt,
    category: [category],
    format,
    languages,
    price,
    discountPercent,
    finalPrice,
    stock: 2 + (id % 11),
    fileUrl: format === BookFormat.PHYSICAL ? undefined : `https://relatos.example.com/books/${id}.${fileExtension}`,
    imagesUrls: [makeCover(id)],
    averageRating: 3.6 + ((id % 12) / 10),
    reviewCount: 20 + (id % 180),
    createdAt: publishedAt,
    updatedAt,
    isActive: true
  };
});

export const books: Book[] = [...baseBooks, ...generatedBooks];

export const getBookById = (id: number): Book | undefined => {
  const bookFound = books.find(book => book.id === id);

  return bookFound ? bookFound : undefined;
};
