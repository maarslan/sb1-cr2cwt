import React from 'react';
import { Product } from '../types';
import { CheckCircle, XCircle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onRequestQuote: (productId: string) => void;
}

export default function ProductCard({ product, onRequestQuote }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          {product.availability ? (
            <div className="flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              <CheckCircle className="w-4 h-4 mr-1" />
              Available
            </div>
          ) : (
            <div className="flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              <XCircle className="w-4 h-4 mr-1" />
              Unavailable
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-900">Specifications:</h4>
          <dl className="mt-2 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key}>
                <dt className="text-sm font-medium text-gray-500">{key}</dt>
                <dd className="text-sm text-gray-900">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        
        <button
          onClick={() => onRequestQuote(product.id)}
          className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Request Quotation
        </button>
      </div>
    </div>
  );
}