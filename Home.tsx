import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Activity, BookOpen, MessageCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Transformez votre vie,<br />
          <span className="text-indigo-600">un jour à la fois</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Planifiez, suivez et améliorez votre quotidien avec des outils intelligents et un accompagnement personnalisé
        </p>
        <Link
          to="/pricing"
          className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
        >
          Commencer maintenant
        </Link>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
          <Calendar className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Emploi du temps intelligent</h3>
          <p className="text-gray-600">
            Organisez votre journée efficacement avec notre planificateur intuitif et adaptable
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
          <Activity className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Suivi d'habitudes</h3>
          <p className="text-gray-600">
            Développez de nouvelles habitudes positives et suivez vos progrès quotidiens
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
          <BookOpen className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Conseils personnalisés</h3>
          <p className="text-gray-600">
            Accédez à une bibliothèque de conseils experts en santé et développement personnel
          </p>
        </div>
      </div>

      {/* AI Assistant Preview */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">Assistant IA disponible 24/7</h2>
            <p className="text-lg opacity-90 mb-6">
              Obtenez des réponses instantanées à vos questions et un support personnalisé
            </p>
            <button className="bg-white text-indigo-600 px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors duration-200 flex items-center">
              <MessageCircle className="h-5 w-5 mr-2" />
              Essayer l'assistant
            </button>
          </div>
          <div className="hidden lg:block">
            <MessageCircle className="h-32 w-32 opacity-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;