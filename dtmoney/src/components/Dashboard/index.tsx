import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import {Container} from './style'

export function DashBoard(){

    return (
        <Container>
            <Summary/>
            <TransactionsTable/>

        </Container>

    );
}