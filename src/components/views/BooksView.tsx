import { SearchBar } from '@/components/ui/SearchBar'
import { BookCard } from '@/components/cards/BookCard'
import { BookListItem } from '@/components/cards/BookListItem'
import { Pagination } from '@/components/ui/Pagination'
import { EmptyState } from '@/components/ui/EmptyState'
import type { Book, ViewMode } from '@/types'

interface BooksViewProps {
  books: Book[]
  searchTerm: string
  currentPage: number
  totalPages: number
  viewMode: ViewMode
  getCurrentItems: () => (Book | any)[]
  onBookClick: (book: Book) => void
  onSearchChange: (value: string) => void
  onPageChange: (page: number) => void
}

export function BooksView({
  books,
  searchTerm,
  currentPage,
  totalPages,
  viewMode,
  getCurrentItems,
  onBookClick,
  onSearchChange,
  onPageChange,
}: BooksViewProps) {
  const currentItems = getCurrentItems() as Book[]

  return (
    <div className="space-y-8">
      <SearchBar
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Rechercher un livre..."
      />

      {currentItems.length > 0 ? (
        <>
          <div className={`${
            viewMode === 'grid'
              ? 'grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
              : 'space-y-4'
          }`}>
            {currentItems.map((book, index) => (
              <div
                key={book.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {viewMode === 'grid' ? (
                  <BookCard book={book} onClick={() => onBookClick(book)} />
                ) : (
                  <BookListItem book={book} onClick={() => onBookClick(book)} />
                )}
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          )}
        </>
      ) : (
        <EmptyState
          title="Aucun livre trouvé"
          description="Essayez de modifier votre recherche ou explorez d'autres collections."
          type="books"
        />
      )}
    </div>
  )
}