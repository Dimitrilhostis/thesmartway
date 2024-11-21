import React from 'react';
import { Calendar } from 'lucide-react';

const Schedule = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <Calendar className="h-8 w-8 text-indigo-600" />
          Emploi du temps
        </h1>
        <p className="mt-2 text-gray-600">
          Organisez votre journée efficacement avec notre planificateur intelligent
        </p>
      </div>
      
      {/* Placeholder pour le calendrier - sera implémenté dans la prochaine étape */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-center text-gray-500">
          Le calendrier interactif sera implémenté dans la prochaine étape
        </div>
      </div>
    </div>
  );
};

export default Schedule;