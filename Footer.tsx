import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Activity className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">WellnessHub</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transformez votre vie quotidienne avec nos outils de développement personnel et notre accompagnement expert.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/schedule" className="hover:text-indigo-400 transition-colors duration-200">
                  Emploi du temps
                </Link>
              </li>
              <li>
                <Link to="/habits" className="hover:text-indigo-400 transition-colors duration-200">
                  Habitudes
                </Link>
              </li>
              <li>
                <Link to="/advice" className="hover:text-indigo-400 transition-colors duration-200">
                  Conseils
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-indigo-400 transition-colors duration-200">
                  Tarifs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-indigo-400" />
                <a href="mailto:contact@wellnesshub.com" className="hover:text-indigo-400 transition-colors duration-200">
                  contact@wellnesshub.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-indigo-400" />
                <a href="tel:+33123456789" className="hover:text-indigo-400 transition-colors duration-200">
                  +33 1 23 45 67 89
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} WellnessHub. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;