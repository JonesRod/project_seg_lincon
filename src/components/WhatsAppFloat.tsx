import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { openWhatsAppWithPredefinedMessage } from '../utils/whatsapp';

export const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    openWhatsAppWithPredefinedMessage('contact');
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 0 0 8px rgba(37, 211, 102, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
        className="group relative bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300"
        title="Fale com Lincon Dias no WhatsApp"
        aria-label="Fale com Lincon Dias no WhatsApp"
      >
        <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
        
        {/* Pulse Animation */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 0, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-green-500 rounded-full"
        />
      </motion.button>
    </motion.div>
  );
};