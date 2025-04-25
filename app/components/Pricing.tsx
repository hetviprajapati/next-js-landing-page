'use client';
import { useState } from 'react';

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      monthly: '$10/mo',
      yearly: '$100/yr',
      features: ['Task Boards', 'Basic Analytics', 'Email Support'],
    },
    {
      name: 'Pro',
      monthly: '$20/mo',
      yearly: '$200/yr',
      features: [
        'Everything in Starter',
        'Team Collaboration',
        'Advanced Reports',
      ],
    },
    {
      name: 'Business',
      monthly: '$30/mo',
      yearly: '$300/yr',
      features: ['Priority Support', 'Custom Workflows', 'Unlimited Storage'],
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Simple Pricing</h2>
      <p className="text-gray-600 mb-8">Choose the plan that fits your team</p>

      <div className="flex justify-center mb-8">
        <button
          onClick={() => setYearly(false)}
          className={`px-4 py-2 rounded-l-full border ${
            !yearly ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setYearly(true)}
          className={`px-4 py-2 rounded-r-full border ${
            yearly ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'
          }`}
        >
          Yearly
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold mb-4">
              {yearly ? plan.yearly : plan.monthly}
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              {plan.features.map((feat, j) => (
                <li key={j}>✅ {feat}</li>
              ))}
            </ul>
            <button className="bg-indigo-600 text-white w-full py-2 rounded hover:bg-indigo-700 transition">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
