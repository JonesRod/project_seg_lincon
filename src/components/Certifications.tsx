import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle } from 'lucide-react';
import { useQuotation } from '../contexts/QuotationContext';

export const Certifications = () => {
  const { openModal } = useQuotation();

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Nossas
            <span className="block text-blue-600">Certificações</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Somos uma empresa certificada e regulamentada, oferecendo total segurança e confiabilidade
          </p>
        </motion.div>

        {/* Certifications Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <img
            src="https://solidyprotecaoveicular.com.br/wp-content/uploads/2025/05/icones.png"
            alt="Certificações Solidy"
            className="max-w-md w-full h-auto mx-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Regulamentada</h3>
            <p className="text-gray-600 text-center">
              Empresa totalmente regulamentada pelos órgãos competentes
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Certificada</h3>
            <p className="text-gray-600 text-center">
              Certificações de qualidade e excelência no atendimento
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Premiada</h3>
            <p className="text-gray-600 text-center">
              Reconhecida pela excelência em proteção veicular
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={openModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <CheckCircle className="w-6 h-6" />
            Solicitar Cotação Agora
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};