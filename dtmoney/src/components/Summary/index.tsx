import { Container } from "./style";
import incomeImg from "../../assets/Entradas.svg"
import outcomeImg from "../../assets/Saidas.svg"
import totalImg from "../../assets/Total.svg"
import { useTransactions } from "../hooks/useTransactionsContext";

export function Summary(){

    const {transactions} = useTransactions();

    const summary = transactions.reduce((acc, transaction)=>{

        if(transaction.type==="deposito"){
            acc.deposito += transaction.value
            acc.total+=transaction.value
        } else{
            acc.retirada+=transaction.value
            acc.total-= transaction.value
        }

        return acc

    },{
        deposito: 0,
        retirada: 0,
        total:0,
    })

    return (
       <Container>
           <div>
               <header>
                   <p>Entradas</p>
                   <img src={incomeImg} alt="Entradas"/>
               </header>
               <strong>{new Intl.NumberFormat('pt-BR',{
                   style: 'currency',
                   currency: 'BRL'
               }).format(summary.deposito)}</strong>
           </div>

           <div>
               <header>
                   <p>Saídas</p>
                   <img src={outcomeImg} alt="Saídas"/>
               </header>
               <strong>-{new Intl.NumberFormat('pt-BR',{
                   style: 'currency',
                   currency: 'BRL'
               }).format(summary.retirada)}</strong>
           </div>

           <div className="highlight-background">
               <header>
                   <p>Total</p>
                   <img src={totalImg} alt="Total"/>
               </header>
               <strong>{new Intl.NumberFormat('pt-BR',{
                   style: 'currency',
                   currency: 'BRL'
               }).format(summary.total)}</strong>
           </div>
       </Container>
    );
}