import React, { useEffect, useState, createContext } from 'react';

import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';
import { ModalProvider } from './ModalProvider';
import { AlertTypes } from './Actions/Types';

const UIContext = createContext<{
   responsive: boolean;
   alert: (message: string, type: AlertTypes) => any;
}>({
   responsive: false,
   alert: () => null,
});

const UIProvider: React.FC = ({ children }) => {
   const [responsive, setResponsive] = useState(false);

   const alert = (message: string, type: AlertTypes) => toast(message, {});

   useEffect(() => {
      if (window.innerWidth < 1000) {
         console.log(window.innerHeight, window.innerWidth);
         setResponsive(true);
         console.log(responsive);
      }
   }, [responsive]);

   return (
      <UIContext.Provider value={{ responsive, alert }}>
         <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />
         <ModalProvider>{children}</ModalProvider>
      </UIContext.Provider>
   );
};

export { UIProvider, UIContext };
