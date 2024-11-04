import React from 'react';
import { categories } from '../data/categories';
import * as LucideIcons from 'lucide-react';

export default function Categories() {
  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Browse Categories
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Find everything you need for your construction projects
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = LucideIcons[category.icon as keyof typeof LucideIcons];
            return (
              <div
                key={category.id}
                className="relative group bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {category.description}
                </p>
                <a
                  href={`#${category.id}`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Browse products
                  <LucideIcons.ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}