import { ArrowLeft, Library, Grid, List } from 'lucide-react'
import type { CurrentView, ViewMode, Shelf } from '@/types'

interface HeaderProps {
  currentView: CurrentView
  selectedShelf: Shelf | null
  viewMode: ViewMode
  onBackToShelves: () => void
  onViewModeChange: (mode: ViewMode) => void
}

export function Header({
  currentView,
  selectedShelf,
  viewMode,
  onBackToShelves,
  onViewModeChange,
}: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            {currentView === 'books' && (
              <button
                onClick={onBackToShelves}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors group"
                aria-label="Retour aux étagères"
              >
                <ArrowLeft className="w-5 h-5 group-hover:text-indigo-600 transition-colors" />
              </button>
            )}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Library className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {currentView === 'shelves' ? 'Mes Étagères' : selectedShelf?.name}
                </h1>
                {currentView === 'books' && selectedShelf?.description && (
                  <p className="text-sm text-gray-600 line-clamp-1">
                    {selectedShelf.description}
                  </p>
                )}
              </div>
            </div>
          </div>
          
          {currentView === 'books' && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => onViewModeChange('grid')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-indigo-100 text-indigo-600 shadow-sm' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
                aria-label="Vue en grille"
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => onViewModeChange('list')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-indigo-100 text-indigo-600 shadow-sm' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
                aria-label="Vue en liste"
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}