export interface Shelf {
  id: string
  name: string
  description?: string
  bookCount?: number
  lastModified?: string
  color?: string
}

export interface Book {
  id: string
  title: string
  author?: string
  cover?: string
  publicationDate?: string
  description?: string
  price?: number
  rating?: number
  genre?: string
  isbn?: string
}

export interface ApiListResponse<T> {
  items: T[]
  total: number
  page: number
  limit: number
  hasMore: boolean
}

export type ViewMode = 'grid' | 'list'
export type CurrentView = 'shelves' | 'books'

export interface LibraryState {
  currentView: CurrentView
  selectedShelf: Shelf | null
  selectedBook: Book | null
  searchTerm: string
  currentPage: number
  viewMode: ViewMode
  isModalOpen: boolean
}