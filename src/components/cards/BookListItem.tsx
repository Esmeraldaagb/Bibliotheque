import { Book, User, Calendar, Star, Tag } from 'lucide-react'
import type { Book as BookType } from '@/types'
import Image from 'next/image'
interface BookListItemProps {
  book: BookType
  onClick: () => void
}

export function BookListItem({ book, onClick }: BookListItemProps) {
  return (
    <div
      className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden border border-gray-100 hover:border-indigo-200 p-4"
      onClick={onClick}
    >
      <div className="flex gap-4">
        <div className="flex-shrink-0 w-16 h-20 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg overflow-hidden">
          {book.cover ? (
            <Image
              src={book.cover}
              alt={book.title}
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
              <Book className="w-6 h-6 text-indigo-400" />
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0 space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
              {book.title}
            </h3>
            
            <div className="flex items-center gap-2 ml-4">
              {book.rating && (
                <div className="flex items-center gap-1 bg-yellow-50 rounded-full px-2 py-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-medium">{book.rating}</span>
                </div>
              )}
              
              {book.price && (
                <span className="font-medium text-indigo-600">
                  {book.price}FCFA
                </span>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            {book.author && (
              <div className="flex items-center gap-1">
                <User className="w-3 h-3" />
                <span>{book.author}</span>
              </div>
            )}
            
            {book.publicationDate && (
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{book.publicationDate}</span>
              </div>
            )}
            
            {book.genre && (
              <div className="flex items-center gap-1">
                <Tag className="w-3 h-3" />
                <span>{book.genre}</span>
              </div>
            )}
          </div>
          
          {book.description && (
            <p className="text-sm text-gray-600 line-clamp-2">
              {book.description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}