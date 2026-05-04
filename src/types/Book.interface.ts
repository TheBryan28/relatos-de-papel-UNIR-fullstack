export const BookFormat = {
  PHYSICAL: 'PHYSICAL',
  DIGITAL_PDF: 'DIGITAL_PDF',
  DIGITAL_EPUB: 'DIGITAL_EPUB',
} as const;

export type BookFormat = typeof BookFormat[keyof typeof BookFormat];

export const BookCategory = {
  FICTION: 'FICTION',
  NON_FICTION: 'NON_FICTION',
  SCIENCE: 'SCIENCE',
  HISTORY: 'HISTORY',
  CHILDREN: 'CHILDREN',
  SELF_HELP: 'SELF_HELP',
  BIOGRAPHY: 'BIOGRAPHY',
  TECHNOLOGY: 'TECHNOLOGY',
  POST_APOCALYPTIC: 'POST_APOCALYPTIC',
  ROMANCE: 'ROMANCE',
  MITOLOGY: 'MITOLOGY',
} as const;

export type BookCategory = typeof BookCategory[keyof typeof BookCategory];

export const Language = {
  ES: 'ES',
  EN: 'EN',
  FR: 'FR',
  PT: 'PT',
} as const;

export type Language = typeof Language[keyof typeof Language];

export interface Book {
  id: number;
  title: string;
  isbn: string;
  description: string;
  authors: string[];
  publisher: string;
  publishedAt: Date;
  category: BookCategory[];
  format: BookFormat;
  languages: Language[];
  price: number;
  discountPercent: number;
  finalPrice: number;

  stock: number;
  fileUrl?: string;
  imagesUrls: string[];

  // Métricas
  pageCount?: number;
  averageRating: number;
  reviewCount: number;

  // Auditoría
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;                // soft delete
}