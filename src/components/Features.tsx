import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MessageCircle, FileText, Phone } from 'lucide-react';
import { useQuotation } from '../contexts/QuotationContext';

const features = [
  'Proteção contra roubo, furto e acidentes',
  'Assistência 24h (guincho, pane seca, troca de pneu, chaveiro)',
  'Cobertura para terceiros',
  'Carro reserva e muito mais!'
];

const vehicleImages = [
  {
    src: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=500',
    caption: 'Proteção contra roubo e furto',
    alt: 'Carro sendo protegido com alarme'
  },
  {
    src: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=500',
    caption: 'Assistência 24h na estrada',
    alt: 'Mecânico prestando assistência'
  },
  {
    src: 'https://static.wixstatic.com/media/e4a89f_24867d70267a43b5b0543d1d7401e251~mv2.png/v1/fit/w_2500,h_1330,al_c/e4a89f_24867d70267a43b5b0543d1d7401e251~mv2.png',
    caption: 'Guincho especializado',
    alt: 'Caminhão guincho transportando carro'
  },
  {
    src: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=500',
    caption: 'Cobertura para acidentes',
    alt: 'Profissional avaliando danos do veículo'
  }
];

export const Features = () => {
  const { openModal } = useQuotation();
  const whatsappUrl = "https://wa.me/556791617815?text=Olá%20Lincon%2C%20gostaria%20de%20tirar%20dúvidas%20sobre%20seguros.";

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
                Por que ter um
                <span className="block text-blue-600">seguro?</span>
              </h2>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 justify-center"
              >
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Tirar Dúvidas
              </motion.a>

              <motion.button
                onClick={openModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 justify-center"
              >
                <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Solicitar Cotação
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {vehicleImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium text-sm leading-tight">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};