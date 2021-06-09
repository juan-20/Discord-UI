import styled from 'styled-components';
import { Props } from '.';


export const Button = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: 48px;
    height: 48px;
    border-radius: 50%;

    margin-bottom: 8px;
    background-color: ${props => props.isHome ? 'var(--discord)' : 'var(--primary)'};
    cursor: pointer;
    position: relative;

    >img{
        width: 24px;
        height: 24px;
    }

    &:hover, &:active {
        border-radius: 16px;
        transition: 0.2s;
        background-color: ${props => props.isHome ? 'var(--discord)' : '#5768A6'}
    }

    &::before{
        width: 9px;
        height: 9px;

        position: absolute;
        left: -17px;
        top: calc(50% - 4.5px);

        background-color: #fff;
        border-radius: 50%;
        content: '';
        display: ${props => props.hasNotifications ? 'inline' : 'none'};
    }

    &::after{
        background: var(--notification);
        width: auto;
        padding: 0 4px ;
         position: absolute;
         bottom: -4px;
         right: -4px;
         border-radius: 12px;
         border: 4px solid var(--quaternary);

         text-align: center;
         font-size: 13px;
         font-weight: bold;
         color: var(--white);
         /* numero de menções */
         /* content: '3'; */
         content: '${(props) => props.mentions && props.mentions} ';
         /* se vai aparecer o circulo ou não: */
         display: ${props => props.mentions && props.mentions > 0 ? 'inline' : 'none'};
    }
`;
