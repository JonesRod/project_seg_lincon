import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 px-4"
    >
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://solidyprotecaoveicular.com.br/wp-content/uploads/2025/05/logo-da-solidy.png"
            alt="Solidy Proteção Veicular"
            className="h-16 w-auto mx-auto mb-4"
          />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Protegendo seu patrimônio e oferecendo tranquilidade na estrada há mais de 10 anos.
          </p>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
            <div className="flex items-center gap-2 text-gray-300">
              <Shield className="w-5 h-5" />
              <span>© 2025 Solidy Proteção Veicular. Todos os direitos reservados.</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <span>Desenvolvido por Jones R. Santos</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};