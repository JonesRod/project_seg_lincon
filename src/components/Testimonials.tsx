import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'João Silva',
    text: 'Tive um acidente e fui atendido rapidamente. O suporte foi excepcional e todo o processo foi muito tranquilo. Recomendo muito!',
    rating: 5,
    location: 'São Paulo, SP'
  },
  {
    name: 'Maria Oliveira',
    text: 'O seguro me salvou quando precisei de guincho na estrada. Atendimento nota 10, chegaram em menos de 30 minutos!',
    rating: 5,
    location: 'Rio de Janeiro, RJ'
  },
  {
    name: 'Carlos Souza',
    text: 'Preço justo e muita agilidade na resolução dos problemas. Já sou cliente há 3 anos e nunca tive problemas.',
    rating: 5,
    location: 'Belo Horizonte, MG'
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            O que dizem nossos
            <span className="block text-blue-600">clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 10.000 clientes satisfeitos confiam na nossa proteção
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="text-center">
                <h4 className="font-bold text-gray-800 mb-1">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-green-50 text-green-700 px-6 py-3 rounded-full border border-green-200">
            <Star className="w-5 h-5 text-green-600 fill-current" />
            <span className="font-semibold">4.9/5 estrelas • Mais de 1.000 avaliações</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};