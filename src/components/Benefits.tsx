import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Car, Users, CarFront, Wallet, Heart } from 'lucide-react';
import { useQuotation } from '../contexts/QuotationContext';

const benefits = [
  {
    icon: Shield,
    title: 'Proteção Total',
    description: 'Seu veículo protegido contra roubo, furto, colisão, incêndio e eventos naturais.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Car,
    title: 'Assistência 24h',
    description: 'Guincho, socorro mecânico, troca de pneu, pane seca e chaveiro em qualquer lugar.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Users,
    title: 'Cobertura para Terceiros',
    description: 'Segurança financeira em caso de danos materiais ou corporais a terceiros.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: CarFront,
    title: 'Carro Reserva',
    description: 'Continue sua rotina mesmo durante reparos, com carro reserva disponível.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Wallet,
    title: 'Custo-benefício',
    description: 'Planos acessíveis e personalizados conforme seu perfil e necessidade.',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: Heart,
    title: 'Tranquilidade',
    description: 'Atendimento rápido, suporte humanizado e resolução ágil de sinistros.',
    color: 'from-red-500 to-red-600'
  }
];

export const Benefits = () => {
  const { openModal } = useQuotation();

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
            Vantagens e Benefícios
            <span className="block text-blue-600">do Seguro</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra por que milhares de pessoas confiam na nossa proteção veicular
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                onClick={openModal}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            onClick={openModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <Shield className="w-6 h-6" />
            Solicitar Cotação Agora
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};