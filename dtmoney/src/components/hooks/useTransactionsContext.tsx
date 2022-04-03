import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { api } from '../../services/api';


interface transactionsProps{
    id: number,
    title: string,
    type: string,
    value: number,
    category: string,
    data: string,

}

interface transactionsProviderProps{
    children: ReactNode;
}
type TransactionInput = Omit<transactionsProps, 'id' | 'data'>

interface TransactionsContextData{
    transactions : transactionsProps[],
    CreateTransaction : (transaction : TransactionInput) => Promise<void>;
}


const TransactionsContext= createContext<TransactionsContextData>({} as TransactionsContextData);


export function TransactionsProvider ({children}: transactionsProviderProps){
    const [transactions, setTransactions] = useState<transactionsProps[]>([]);

    useEffect(()=>{
        api.get('transactions')
        .then(response=> setTransactions(response.data.transactions))

    },[]);

    async function CreateTransaction(transactionInput : TransactionInput){
        const response = await api.post('/transactions',{
            ...transactionInput, data: new Date(),
        })
        const {transaction}= response.data;

        setTransactions([
            ...transactions, transaction,
        ])

    }

    return (
        <TransactionsContext.Provider value={{transactions, CreateTransaction}}>
                {children}
        </TransactionsContext.Provider>

    );

}


export function useTransactions(){
    const context = useContext(TransactionsContext);

    return context;
}