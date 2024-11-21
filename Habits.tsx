import React from 'react';
import { Activity } from 'lucide-react';

const Habits = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <Activity className="h-8 w-8 text-indigo-600" />
          Suivi des Habitudes
        </h1>
        <p className="mt-2 text-gray-600">
          Suivez vos habitudes quotidiennes et visualisez vos progrès
        </p>
      </div>

      {/* Placeholder pour le tracking d'habitudes - sera implémenté dans la prochaine étape */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-center text-gray-500">
          Le système de suivi des habitudes sera implémenté dans la prochaine étape
        </div>
      </div>
    </div>
  );
};

export default Habits;