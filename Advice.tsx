import React from 'react';
import { BookOpen } from 'lucide-react';

const Advice = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <BookOpen className="h-8 w-8 text-indigo-600" />
          Nos Conseils
        </h1>
        <p className="mt-2 text-gray-600">
          Découvrez nos conseils experts en santé et développement personnel
        </p>
      </div>

      {/* Placeholder pour la bibliothèque de conseils - sera implémenté dans la prochaine étape */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-center text-gray-500">
          La bibliothèque de conseils sera implémentée dans la prochaine étape
        </div>
      </div>
    </div>
  );
};

export default Advice;