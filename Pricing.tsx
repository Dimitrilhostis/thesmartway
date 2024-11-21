import React from 'react';
import { CreditCard, Check } from 'lucide-react';

const PricingTier = ({ 
  title, 
  price, 
  description, 
  features, 
  highlighted = false 
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}) => (
  <div className={`bg-white rounded-lg shadow-lg p-8 ${highlighted ? 'ring-2 ring-indigo-600' : ''}`}>
    <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    <p className="mt-4 text-gray-600">{description}</p>
    <p className="mt-8">
      <span className="text-4xl font-bold text-gray-900">{price}</span>
      {price !== 'Sur devis' && <span className="text-gray-600">/mois</span>}
    </p>
    <ul className="mt-8 space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className="h-5 w-5 text-indigo-600 mr-2" />
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`mt-8 w-full py-3 px-4 rounded-md font-medium ${
      highlighted 
        ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
    } transition-colors duration-200`}>
      Choisir cette offre
    </button>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      title: 'Classic',
      price: '10€',
      description: 'L\'essentiel pour commencer votre transformation',
      features: [
        'Accès à l\'emploi du temps',
        'Suivi de 5 habitudes',
        'Accès à la bibliothèque de conseils',
        'Assistant IA basique'
      ]
    },
    {
      title: 'Premium',
      price: '100€',
      description: 'Un accompagnement personnalisé basé sur vos besoins',
      features: [
        'Tous les avantages Classic',
        'Analyse approfondie de votre profil',
        'Plan personnalisé',
        'Recommandations sur mesure',
        'Assistant IA avancé'
      ],
      highlighted: true
    },
    {
      title: 'Premium+',
      price: 'Sur devis',
      description: 'Un coach personnel dédié à votre réussite',
      features: [
        'Tous les avantages Premium',
        'Coach personnel dédié',
        'Suivi hebdomadaire',
        'Ajustements en temps réel',
        'Support prioritaire 24/7'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-3">
          <CreditCard className="h-8 w-8 text-indigo-600" />
          Nos Offres
        </h1>
        <p className="mt-2 text-gray-600">
          Choisissez l'offre qui correspond le mieux à vos besoins
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <PricingTier key={plan.title} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;