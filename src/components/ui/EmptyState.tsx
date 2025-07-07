import { Library, BookOpen } from 'lucide-react'

interface EmptyStateProps {
  title: string
  description: string
  type: 'shelves' | 'books'
}

export function EmptyState({ title, description, type }: EmptyStateProps) {
  const Icon = type === 'shelves' ? Library : BookOpen

  return (
    <div className="text-center py-12 animate-fade-in">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 max-w-md mx-auto">
        {description}
      </p>
    </div>
  )
}