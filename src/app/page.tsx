'use client'

import { Header } from '@/components/layout/Header'
import { ShelvesView } from '@/components/views/ShelvesView'
import { BooksView } from '@/components/views/BooksView'
import { BookModal } from '@/components/modals/BookModal'
import { useLibrary } from '@/hooks/useLibrary'


export default function HomePage() {
  const {
    currentView,
    selectedShelf,
    selectedBook,
    searchTerm,
    currentPage,
    viewMode,
    isModalOpen,
    filteredShelves,
    filteredBooks,
    totalPages,
    getCurrentItems,
    handleShelfClick,
    handleBookClick,
    handleBackToShelves,
    handlePageChange,
    handleSearchChange,
    setViewMode,
    setIsModalOpen,
    setSelectedBook,
  } = useLibrary()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentView={currentView}
        selectedShelf={selectedShelf}
        viewMode={viewMode}
        onBackToShelves={handleBackToShelves}
        onViewModeChange={setViewMode}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'shelves' ? (
          <ShelvesView
            shelves={filteredShelves}
            searchTerm={searchTerm}
            currentPage={currentPage}
            totalPages={totalPages}
            getCurrentItems={getCurrentItems}
            onShelfClick={handleShelfClick}
            onSearchChange={handleSearchChange}
            onPageChange={handlePageChange}
          />
        ) : (
          <BooksView
            books={filteredBooks}
            searchTerm={searchTerm}
            currentPage={currentPage}
            totalPages={totalPages}
            viewMode={viewMode}
            getCurrentItems={getCurrentItems}
            onBookClick={handleBookClick}
            onSearchChange={handleSearchChange}
            onPageChange={handlePageChange}
          />
        )}
      </main>

      <BookModal
        book={selectedBook}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedBook(null)
        }}
      />
    </div>
  )
}