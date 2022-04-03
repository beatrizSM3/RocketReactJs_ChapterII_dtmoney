
import style from 'styled-components';

export const Container = style.form`
        h2{
            color: var(--text-title);
            font-size: 1.5rem;
            margin-bottom: 2rem;

        }

        input{
            width:100%;
            padding: 0 1.5rem;
            height: 4rem;
            border-radius: 0.25rem;
            border: 0;

            border: 1px solid #d7d7d7
            background: #e7e9ee;
            font-weight: 400;
            font-size: 1rem;

            &::placeholder{
                color: var(--text-body);
            }

            & + input{
                margin-top: 1rem;
            }

        }

        button[type="submit"]{
            width: 100%;
            padding: 0 1.5rem;
            height: 4rem;
            background: var(--green);
            color: #fff;
            border-radius: 0.25rem;
            border:0;
            font-size: 1rem;
            margin-top: 1.5rem;
            font-weight: 600;

            transition: filter 0.2s;
            &:hover{
              filter: brightness(0.9);
            }

        }

`

export const TransactionTypeContainer = style.div`
        margin: 1rem 0;
        display:grid;
        grid-template-columns: repeat(2,1fr);
        gap:0.5rem;

`

interface buttonProps{
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors={
    'green': 'rgb(51,204,149,0.1)',
    'red': 'rgb(229,46,77,0.1)'
}

export const Box= style.button<buttonProps>`
            
        height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;


        background: ${(props)=> props.isActive? colors[props.activeColor]: 'transparent'};
       


        display: flex;
        aligh-items: center;
        justify-content: center;


        transition: border-color 0.2s;

        &:hover{
            border-color: #aaa;
        }


        img{
            margin-top: 1rem;
            width: 20px
            height: 20px;

        }

        span{
            display: inline-block;
            margin-top: 1rem;
            margin-left:0.5rem;
            font-size: 1rem;
            color: var(--text-title);
 
        }
`
