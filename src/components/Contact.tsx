import { motion } from 'framer-motion';
import { Clock, FileText, MapPin, MessageCircle, Phone } from 'lucide-react';
import { useQuotation } from '../contexts/QuotationContext';
import { openWhatsAppWithPredefinedMessage } from '../utils/whatsapp';

export const Contact = () => {
  const { openModal } = useQuotation();
  
  const handleWhatsAppClick = () => {
    openWhatsAppWithPredefinedMessage('contact');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Seu consultor de
            <span className="block text-blue-600">seguros</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Atendimento personalizado com mais de 10 anos de experiência no mercado
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Lincon Dias</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Especialista em proteção veicular com mais de uma década de experiência. 
                Ajudo pessoas a protegerem seu patrimônio com as melhores condições do mercado.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">(67) 99147-1070</p>
                    <p className="text-sm text-gray-500">Disponível via WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Segunda a Sexta</p>
                    <p className="text-sm text-gray-500">8h às 18h</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Atendimento Digital</p>
                    <p className="text-sm text-gray-500">Todo o Brasil</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Pronto para se proteger?</h3>
              <p className="text-blue-100 mb-6">
                Receba sua cotação personalizada em menos de 5 minutos
              </p>

              <div className="space-y-4">
                <motion.button
                  onClick={handleWhatsAppClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-center gap-3">
                    <MessageCircle className="w-6 h-6" />
                    Conversar no WhatsApp
                  </div>
                </motion.button>

                <motion.button
                  onClick={openModal}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full bg-white/10 backdrop-blur-lg hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white py-4 px-6 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-center gap-3">
                    <FileText className="w-6 h-6" />
                    Solicitar Cotação
                  </div>
                </motion.button>
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">24h</div>
                <div className="text-sm text-gray-600">Atendimento</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Digital</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};