import type { Shelf, Book } from '@/types'
import { images } from './image'

export const mockShelves: Shelf[] = [
  {
    id: '1',
    name: 'Littérature Française',
    description: 'Une collection de chefs-d\'œuvre de la littérature française',
    bookCount: 24,
    lastModified: '2024-01-15',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: '2',
    name: 'Science-Fiction',
    description: 'Explorez les mondes futuristes et les technologies imaginaires',
    bookCount: 18,
    lastModified: '2024-01-10',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: '3',
    name: 'Romans Policiers',
    description: 'Suspense et enquêtes captivantes',
    bookCount: 31,
    lastModified: '2024-01-20',
    color: 'from-red-500 to-orange-600'
  },
  {
    id: '4',
    name: 'Développement Personnel',
    description: 'Livres pour grandir et s\'épanouir',
    bookCount: 15,
    lastModified: '2024-01-08',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: '5',
    name: 'Histoire',
    description: 'Découvrez le passé à travers ces récits historiques',
    bookCount: 22,
    lastModified: '2024-01-12',
    color: 'from-yellow-500 to-amber-600'
  },
  {
    id: '6',
    name: 'Philosophie',
    description: 'Réflexions profondes sur l\'existence et la société',
    bookCount: 19,
    lastModified: '2024-01-18',
    color: 'from-teal-500 to-cyan-600'
  }
]

export const mockBooks: Book[] = [
  {
    id: '1',
    title: 'Valentina',
    author: 'Antoine de Saint-Exupéry',
    cover: images.b1.src,
    publicationDate: '1943',
    description: 'Un conte philosophique et poétique qui raconte la rencontre d\'un aviateur avec un petit prince venu d\'une autre planète.',
    price: 12.99,
    rating: 4.8,
    genre: 'Littérature',
    isbn: '978-2-07-040850-1'
  },
  {
    id: '2',
    title: 'I will be there',
    author: 'Frank Herbert',
    cover: images.b2.src,
    publicationDate: '1965',
    description: 'Une épopée de science-fiction qui se déroule sur la planète désertique Arrakis.',
    price: 18.50,
    rating: 4.6,
    genre: 'Science-Fiction',
    isbn: '978-2-266-11042-8'
  },
  {
    id: '3',
    title: 'Shade of you',
    author: 'Deborah P',
    cover: images.b3.src,
    publicationDate: '1980',
    description: 'Un roman policier médiéval qui mêle philosophie, théologie et enquête.',
    price: 15.99,
    rating: 4.4,
    genre: 'Roman Policier',
    isbn: '978-2-253-03289-4'
  },
  {
    id: '4',
    title: 'In your bons',
    author: 'Autoren',
    cover: images.b4.src,
    publicationDate: '2011',
    description: 'Une brève histoire de l\'humanité qui explore l\'évolution de notre espèce.',
    price: 22.00,
    rating: 4.7,
    genre: 'Histoire',
    isbn: '978-2-226-25701-7'
  },
  {
    id: '5',
    title: 'The girls of inks and stars',
    author: 'Kiran Millwood',
    cover: images.b5.src,
    publicationDate: '1942',
    description: 'Un roman existentialiste qui explore l\'absurdité de la condition humaine.',
    price: 14.50,
    rating: 4.3,
    genre: 'Philosophie',
    isbn: '978-2-07-036002-1'
  },
  {
    id: '6',
    title: 'Be with you',
    author: 'Isaac Asimov',
    cover: images.b6.src,
    publicationDate: '1951',
    description: 'Le premier tome de la saga Fondation, une œuvre majeure de la science-fiction.',
    price: 16.99,
    rating: 4.5,
    genre: 'Science-Fiction',
    isbn: '978-2-07-029552-4'
  },
  {
    id: '7',
    title: 'Lost in the never woods',
    author: 'Aiden Thomas',
    cover: images.b7.src,
    publicationDate: '1862',
    description: 'Un chef-d\'œuvre de la littérature française qui dépeint la société du XIXe siècle.',
    price: 19.99,
    rating: 4.9,
    genre: 'Littérature',
    isbn: '978-2-07-041108-2'
  },
  {
    id: '8',
    title: 'Neuromancien',
    author: 'William Gibson',
    cover: images.b8.src,
    publicationDate: '1984',
    description: 'Le roman fondateur du cyberpunk qui a révolutionné la science-fiction.',
    price: 17.50,
    rating: 4.2,
    genre: 'Science-Fiction',
    isbn: '978-2-290-04382-7'
  }
]