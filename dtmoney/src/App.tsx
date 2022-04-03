
import { DashBoard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';

import { TransactionModal} from '../src/components/TransactionModal';
import { TransactionsProvider } from './components/hooks/useTransactionsContext';


export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }

  

  return (
    <TransactionsProvider>   {/*contexto-> quando componentes diferente precisa acessar a mesma informação*/ }
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
     <DashBoard />
     
     
    <TransactionModal isModalOpen={isNewTransactionModalOpen} onCloseNewTransactionModal={handleCloseNewTransactionModal}/>

     <GlobalStyle />
    </TransactionsProvider>
  );
}


