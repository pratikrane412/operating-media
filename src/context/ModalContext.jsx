import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  const openBrochureModal = () => setIsBrochureModalOpen(true);
  const closeBrochureModal = () => setIsBrochureModalOpen(false);

  return (
    <ModalContext.Provider value={{ isBrochureModalOpen, openBrochureModal, closeBrochureModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
