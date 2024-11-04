import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'tower-crane-500t',
    name: 'Tower Crane 500T',
    category: 'machinery',
    description: 'High-capacity tower crane for heavy lifting operations',
    image: 'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80&w=2340',
    specifications: {
      'Max Load': '500 tons',
      'Height': '80m',
      'Boom Length': '60m'
    },
    availability: true
  },
  {
    id: 'wall-formwork-pro',
    name: 'Wall Formwork System Pro',
    category: 'formwork',
    description: 'Professional wall formwork system for concrete construction',
    image: 'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?auto=format&fit=crop&q=80&w=2340',
    specifications: {
      'Panel Height': '3m',
      'Panel Width': '2.4m',
      'Material': 'Steel frame with plywood facing'
    },
    availability: true
  },
  // Add more products as needed
];