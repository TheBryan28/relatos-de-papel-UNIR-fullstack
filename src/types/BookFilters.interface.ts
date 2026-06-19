export interface BookFilters {
  page?: number;
  pageSize?: number;
  title?: string;
  description?: string;
  author?: string;
  format?: string;
  price?: number;
  discount?: number;
  isbn?: string;
  stock?: number;
  averageRating?: number;
  reviewCount?: number;
  releaseDate?: string;
}