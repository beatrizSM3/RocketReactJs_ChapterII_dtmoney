import Modal from 'react-modal';
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saidas.svg'
import closeImg from '../../assets/Fechar.svg'
import { Container, TransactionTypeContainer, Box } from './style';
import { FormEvent, useState} from 'react';
import { useTransactions } from '../hooks/useTransactionsContext';

interface TransactionModalProps{
    isModalOpen: boolean;
    onCloseNewTransactionModal: ()=>void;
}

export function TransactionModal({isModalOpen, onCloseNewTransactionModal}:TransactionModalProps){

    const {CreateTransaction} = useTransactions();

    const [title,setTitle]= useState('');
    const [value, setValue]=useState(0);
    const [category, setCategory]=useState('');

    const [type, setType] = useState('');

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        await CreateTransaction({
            title,
            value,
            category,
            type
        })

        setTitle('');
        setType('');
        setValue(0);
        setCategory('');
        onCloseNewTransactionModal();

    }


    return(
        <Modal isOpen={isModalOpen} 
        onRequestClose={onCloseNewTransactionModal}
        overlayClassName="react-overlay-modal"
        className="react-modal"
        
        >
        <button type='button' onClick={onCloseNewTransactionModal} className="react-modal-close">
            <img src={closeImg} alt="Botão Fechar" />
        </button>
        <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

            <input placeholder='Título' value={title} onChange={event => setTitle(event.target.value)}/>
            <input type='number' value={value} onChange={event=> setValue(Number(event.target.value))} placeholder='Valor'/>
            <TransactionTypeContainer>
                    <Box
                    type='button'
                    onClick={()=>{
                        setType("deposito");
                    }}
                    isActive={type==="deposito" } 
                    activeColor="green"
                    >
                        <img src={incomeImg} alt= "Botão Entrar"/>
                        <span>Entrada</span>
                    </Box>

                    <Box
                    type='button'
                    onClick={()=>{
                        setType("retirada");
                    }}
                    isActive={type==="retirada"}
                    activeColor="red"
                    >
                        <img src={outcomeImg} alt="Botão Sair"/>
                        <span>Saída</span>
                    </Box>
            </TransactionTypeContainer>
            <input placeholder='Categoria' value={category} onChange={event=> setCategory(event.target.value)}/>

            <button type="submit"> 
                Cadastrar
            </button>
            
        </Container>
        </Modal>

    )

}