import { useState, useMemo } from 'react'
import type { Shelf, Book, CurrentView, ViewMode, LibraryState } from '@/types'
import { mockShelves, mockBooks } from '@/data/mockData'

const ITEMS_PER_PAGE = 12

export function useLibrary() {
  const [state, setState] = useState<LibraryState>({
    currentView: 'shelves',
    selectedShelf: null,
    selectedBook: null,
    searchTerm: '',
    currentPage: 1,
    viewMode: 'grid',
    isModalOpen: false,
  })

  const filteredShelves = useMemo(() => {
    return mockShelves.filter(shelf =>
      shelf.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      shelf.description?.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  }, [state.searchTerm])

  const filteredBooks = useMemo(() => {
    return mockBooks.filter(book =>
      book.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      book.author?.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      book.genre?.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  }, [state.searchTerm])

  const totalPages = useMemo(() => {
    const items = state.currentView === 'shelves' ? filteredShelves : filteredBooks
    return Math.ceil(items.length / ITEMS_PER_PAGE)
  }, [state.currentView, filteredShelves.length, filteredBooks.length])

  const getCurrentItems = () => {
    const items = state.currentView === 'shelves' ? filteredShelves : filteredBooks
    const startIndex = (state.currentPage - 1) * ITEMS_PER_PAGE
    return items.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }

  const handleShelfClick = (shelf: Shelf) => {
    setState(prev => ({
      ...prev,
      selectedShelf: shelf,
      currentView: 'books',
      currentPage: 1,
      searchTerm: '',
    }))
  }

  const handleBookClick = (book: Book) => {
    setState(prev => ({
      ...prev,
      selectedBook: book,
      isModalOpen: true,
    }))
  }

  const handleBackToShelves = () => {
    setState(prev => ({
      ...prev,
      currentView: 'shelves',
      selectedShelf: null,
      currentPage: 1,
      searchTerm: '',
    }))
  }

  const handlePageChange = (page: number) => {
    setState(prev => ({ ...prev, currentPage: page }))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSearchChange = (value: string) => {
    setState(prev => ({
      ...prev,
      searchTerm: value,
      currentPage: 1,
    }))
  }

  const setViewMode = (viewMode: ViewMode) => {
    setState(prev => ({ ...prev, viewMode }))
  }

  const setIsModalOpen = (isModalOpen: boolean) => {
    setState(prev => ({ ...prev, isModalOpen }))
  }

  const setSelectedBook = (selectedBook: Book | null) => {
    setState(prev => ({ ...prev, selectedBook }))
  }

  return {
    ...state,
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
  }
}