import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
}

export default function CategoryCard({ title, description, image }: CategoryCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
          Browse Category
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}