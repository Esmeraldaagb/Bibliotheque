import { SearchBar } from '@/components/ui/SearchBar'
import { ShelfCard } from '@/components/cards/ShelfCard'
import { Pagination } from '@/components/ui/Pagination'
import { EmptyState } from '@/components/ui/EmptyState'
import type { Shelf,Book } from '@/types'

interface ShelvesViewProps {
  shelves: Shelf[]
  searchTerm: string
  currentPage: number
  totalPages: number
  getCurrentItems: () => Shelf[] | Book[]
  onShelfClick: (shelf: Shelf) => void
  onSearchChange: (value: string) => void
  onPageChange: (page: number) => void
}

export function ShelvesView({
  searchTerm,
  currentPage,
  totalPages,
  getCurrentItems,
  onShelfClick,
  onSearchChange,
  onPageChange,
}: ShelvesViewProps) {
  const currentItems = getCurrentItems() as Shelf[]

  return (
    <div className="space-y-8">
      <SearchBar
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Rechercher une étagère..."
      />

      {currentItems.length > 0 ? (
        <>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {currentItems.map((shelf, index) => (
              <div
                key={shelf.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ShelfCard shelf={shelf} onClick={() => onShelfClick(shelf)} />
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
          title="Aucune étagère trouvée"
          description="Essayez de modifier votre recherche ou explorez d'autres collections."
          type="shelves"
        />
      )}
    </div>
  )
}