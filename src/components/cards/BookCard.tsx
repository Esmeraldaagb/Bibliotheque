import { Book, User, Calendar, Star } from 'lucide-react'
import type { Book as BookType } from '@/types'
import Image from 'next/image'
interface BookCardProps {
  book: BookType
  onClick: () => void
}

export function BookCard({ book, onClick }: BookCardProps) {
  return (
    <div
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="relative aspect-[3/4] bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden">
        {book.cover ? (
          <Image
            src={book.cover}
            alt={book.title}
             width={200}
              height={200}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
            <Book className="w-12 h-12 text-indigo-400" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {book.rating && (
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-500 fill-current" />
            <span className="text-xs font-medium">{book.rating}</span>
          </div>
        )}
      </div>
      
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {book.title}
        </h3>
        
        {book.author && (
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <User className="w-3 h-3" />
            <span className="line-clamp-1">{book.author}</span>
          </div>
        )}
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          {book.publicationDate && (
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{book.publicationDate}</span>
            </div>
          )}
          
          {book.price && (
            <span className="font-medium text-indigo-600">
              {book.price}€
            </span>
          )}
        </div>
        
        {book.description && (
          <p className="text-sm text-gray-600 line-clamp-2 pt-1">
            {book.description}
          </p>
        )}
      </div>
    </div>
  )
}