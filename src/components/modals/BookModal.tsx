import { X, User, Calendar, DollarSign, Book as BookIcon, Star, Tag, Hash } from 'lucide-react'
import type { Book } from '@/types'
import Image from 'next/image'

interface BookModalProps {
  book: Book | null
  isOpen: boolean
  onClose: () => void
}

export function BookModal({ book, isOpen, onClose }: BookModalProps) {
  if (!isOpen || !book) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center rounded-t-xl">
          <h2 className="text-lg font-semibold text-gray-900">Détails du livre</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors group"
            aria-label="Fermer"
          >
            <X className="w-5 h-5 group-hover:text-gray-700" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="w-48 h-64 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg overflow-hidden shadow-lg">
                {book.cover ? (
                  <Image
                    src={book.cover}
                    alt={book.title}
                    width={200}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
                    <BookIcon className="w-16 h-16 text-indigo-400" />
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{book.title}</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {book.author && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <User className="w-4 h-4 text-indigo-500" />
                      <span>{book.author}</span>
                    </div>
                  )}
                  
                  {book.publicationDate && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-indigo-500" />
                      <span>{book.publicationDate}</span>
                    </div>
                  )}
                  
                  {book.genre && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Tag className="w-4 h-4 text-indigo-500" />
                      <span>{book.genre}</span>
                    </div>
                  )}
                  
                  {book.isbn && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Hash className="w-4 h-4 text-indigo-500" />
                      <span className="text-sm">{book.isbn}</span>
                    </div>
                  )}
                  
                  {book.rating && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{book.rating}/5</span>
                    </div>
                  )}
                  
                  {book.price && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign className="w-4 h-4 text-green-500" />
                      <span className="font-semibold text-indigo-600">{book.price}€</span>
                    </div>
                  )}
                </div>
              </div>
              
              {book.description && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-600 leading-relaxed">{book.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}