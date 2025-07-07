import { BookOpen, ArrowRight, Hash, Clock } from 'lucide-react'
import type { Shelf } from '@/types'

interface ShelfCardProps {
  shelf: Shelf
  onClick: () => void
}

export function ShelfCard({ shelf, onClick }: ShelfCardProps) {
  return (
    <div
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-1"
      onClick={onClick}
    >
      <div className={`relative p-6 bg-gradient-to-br ${shelf.color || 'from-indigo-50 via-purple-50 to-pink-50'}`}>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 bg-gradient-to-br ${shelf.color || 'from-indigo-500 to-purple-600'} rounded-lg flex items-center justify-center shadow-lg`}>
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                {shelf.name}
              </h3>
              {shelf.bookCount !== undefined && (
                <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                  <Hash className="w-3 h-3" />
                  <span>{shelf.bookCount} livre{shelf.bookCount !== 1 ? 's' : ''}</span>
                </div>
              )}
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 transform group-hover:translate-x-1 transition-all duration-300" />
        </div>
        
        {shelf.description && (
          <p className="text-sm text-gray-600 mt-3 line-clamp-2">
            {shelf.description}
          </p>
        )}
        
        {shelf.lastModified && (
          <div className="flex items-center gap-1 text-xs text-gray-500 mt-3">
            <Clock className="w-3 h-3" />
            <span>Modifié le {shelf.lastModified}</span>
          </div>
        )}
      </div>
    </div>
  )
}