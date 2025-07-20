import React, { createContext, useContext, useState, ReactNode } from 'react';

interface QuotationContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const QuotationContext = createContext<QuotationContextType | undefined>(undefined);

export const useQuotation = () => {
  const context = useContext(QuotationContext);
  if (!context) {
    throw new Error('useQuotation must be used within a QuotationProvider');
  }
  return context;
};

interface QuotationProviderProps {
  children: ReactNode;
}

export const QuotationProvider = ({ children }: QuotationProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <QuotationContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </QuotationContext.Provider>
  );
};