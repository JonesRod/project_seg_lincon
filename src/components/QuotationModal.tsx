import { AnimatePresence, motion } from 'framer-motion';
import { Bike, Car, MessageCircle, Package, Truck, X } from 'lucide-react';
import React, { useState } from 'react';
import { useQuotation } from '../contexts/QuotationContext';
import { openWhatsApp } from '../utils/whatsapp';

interface FormData {
  vehicle: string;
  model: string;
  customModel: string;
  year: string;
  plate: string;
  name: string;
  phone: string;
}

const vehicleOptions = [
  { value: 'Carro', label: 'Carro', icon: Car },
  { value: 'Moto', label: 'Moto', icon: Bike },
  { value: 'Caminhão', label: 'Caminhão', icon: Truck },
  { value: 'Outro', label: 'Outro', icon: Package }
];

const vehicleModels = {
  'Carro': [
    'Honda Civic', 'Honda City', 'Honda HR-V', 'Honda Fit',
    'Toyota Corolla', 'Toyota Etios', 'Toyota Yaris', 'Toyota Hilux',
    'Volkswagen Gol', 'Volkswagen Polo', 'Volkswagen T-Cross', 'Volkswagen Jetta',
    'Chevrolet Onix', 'Chevrolet Prisma', 'Chevrolet Cruze', 'Chevrolet S10',
    'Ford Ka', 'Ford Fiesta', 'Ford Focus', 'Ford EcoSport',
    'Fiat Uno', 'Fiat Argo', 'Fiat Toro', 'Fiat Strada',
    'Hyundai HB20', 'Hyundai Creta', 'Hyundai Tucson',
    'Nissan Versa', 'Nissan Kicks', 'Nissan Frontier',
    'Renault Kwid', 'Renault Sandero', 'Renault Duster',
    'Peugeot 208', 'Peugeot 2008', 'Peugeot 3008',
    'Jeep Renegade', 'Jeep Compass',
    'Outro modelo'
  ],
  'Moto': [
    'Honda CG 160', 'Honda CG 150', 'Honda CB 600F', 'Honda CB 650F',
    'Honda PCX 150', 'Honda Biz 125', 'Honda Pop 110',
    'Yamaha Factor 150', 'Yamaha XTZ 150', 'Yamaha MT-07', 'Yamaha R3',
    'Yamaha Neo 125', 'Yamaha Crypton 115',
    'Suzuki Intruder 150', 'Suzuki GSX-S750', 'Suzuki Burgman 400',
    'Kawasaki Ninja 300', 'Kawasaki Z400', 'Kawasaki Versys 650',
    'BMW G 310 GS', 'BMW F 850 GS',
    'Harley Davidson Street 750', 'Harley Davidson Iron 883',
    'Ducati Monster 797',
    'Outro modelo'
  ],
  'Caminhão': [
    'Mercedes-Benz Accelo', 'Mercedes-Benz Atego', 'Mercedes-Benz Axor',
    'Volvo VM', 'Volvo FH', 'Volvo FM',
    'Scania P-Series', 'Scania G-Series', 'Scania R-Series',
    'Iveco Daily', 'Iveco Tector', 'Iveco Stralis',
    'Ford Cargo', 'Ford F-4000',
    'Volkswagen Delivery', 'Volkswagen Constellation',
    'MAN TGX', 'MAN TGS',
    'Outro modelo'
  ],
  'Outro': [
    'Van', 'Micro-ônibus', 'Ônibus', 'Trator', 'Máquina agrícola',
    'Outro modelo'
  ]
};

export const QuotationModal = () => {
  const { isModalOpen, closeModal } = useQuotation();
  const [formData, setFormData] = useState<FormData>({
    vehicle: '',
    model: '',
    customModel: '',
    year: '',
    plate: '',
    name: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{4,5})(\d{0,4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else {
      value = value.replace(/^(\d*)/, '($1');
    }
    
    setFormData(prev => ({ ...prev, phone: value }));
  };

  const handlePlateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    
    if (value.length > 7) value = value.slice(0, 7);
    
    if (value.length >= 4) {
      const letters = value.slice(0, 3);
      const remaining = value.slice(3);
      
      // Verifica se está seguindo o padrão Mercosul (letra na 5ª posição)
      if (remaining.length >= 2 && /[A-Z]/.test(remaining[1])) {
        // Formato Mercosul: ABC1D23
        value = letters + remaining;
      } else {
        // Formato Antigo: ABC-1234
        value = letters + '-' + remaining;
      }
    }
    
    setFormData(prev => ({ ...prev, plate: value }));
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove tudo que não for número
    let value = e.target.value.replace(/\D/g, '');
    
    // Limita a 4 dígitos
    if (value.length > 4) value = value.slice(0, 4);
    
    setFormData(prev => ({ ...prev, year: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const finalModel = formData.model === 'Outro modelo' ? formData.customModel : formData.model;
    
    const message = `Olá, sou o(a) ${formData.name}.\n` +
      `Eu gostaria de solicitar uma cotação:\n` +
      `Veículo: ${formData.vehicle}\n` +
      `Modelo: ${finalModel}\n` +
      `Ano: ${formData.year}\n` +
      `Placa: ${formData.plate}\n` +
      `Telefone: ${formData.phone}`;

    openWhatsApp(message);
    
    // Reset form and close modal
    setFormData({
      vehicle: '',
      model: '',
      customModel: '',
      year: '',
      plate: '',
      name: '',
      phone: ''
    });
    closeModal();
  };

  const availableModels = formData.vehicle ? vehicleModels[formData.vehicle as keyof typeof vehicleModels] || [] : [];
  const showCustomModelField = formData.model === 'Outro modelo';

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto pt-8"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl mb-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">Solicite sua Cotação</h3>
              <button
                onClick={closeModal}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-4 text-center text-sm">
              Preencha os campos e receba sua cotação via WhatsApp
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Vehicle Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tipo de Veículo
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {vehicleOptions.map((option) => {
                    const IconComponent = option.icon;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ 
                          ...prev, 
                          vehicle: option.value,
                          model: '', // Reset model when vehicle changes
                          customModel: ''
                        }))}
                        className={`p-2 rounded-lg border-2 transition-all duration-200 flex flex-col items-center gap-1 ${
                          formData.vehicle === option.value
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-gray-300 text-gray-600'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span className="text-xs font-medium">{option.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Model Selection */}
              {formData.vehicle && (
                <div>
                  <label htmlFor="model" className="block text-sm font-semibold text-gray-700 mb-1">
                    Modelo
                  </label>
                  <select
                    id="model"
                    name="model"
                    value={formData.model}
                    onChange={handleInputChange}
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                    required
                  >
                    <option value="">Selecione o modelo</option>
                    {availableModels.map((model, index) => (
                      <option key={index} value={model}>
                        {model}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Custom Model Field */}
              {showCustomModelField && (
                <div>
                  <label htmlFor="customModel" className="block text-sm font-semibold text-gray-700 mb-1">
                    Descreva o modelo
                  </label>
                  <input
                    type="text"
                    id="customModel"
                    name="customModel"
                    value={formData.customModel}
                    onChange={handleInputChange}
                    placeholder="Ex: Ford Ranger 2.2 XLS..."
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                    required
                  />
                </div>
              )}

              {/* Year */}
              <div>
                <label htmlFor="year" className="block text-sm font-semibold text-gray-700 mb-1">
                  Ano
                </label>
                <input
                  type="text"
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleYearChange}
                  placeholder="Ex: 2022"
                  maxLength={4}
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Digite apenas o ano com 4 dígitos
                </p>
              </div>

              {/* Plate */}
              <div>
                <label htmlFor="plate" className="block text-sm font-semibold text-gray-700 mb-1">
                  Placa do Veículo
                </label>
                <input
                  type="text"
                  id="plate"
                  name="plate"
                  value={formData.plate}
                  onChange={handlePlateChange}
                  placeholder="ABC-1234 ou ABC1D23"
                  maxLength={8}
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm font-mono"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Formato antigo (ABC-1234) ou Mercosul (ABC1D23)
                </p>
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Nome completo"
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="(99) 99999-9999"
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 mt-6"
              >
                <MessageCircle className="w-5 h-5" />
                Enviar via WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};