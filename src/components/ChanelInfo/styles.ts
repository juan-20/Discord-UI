import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';

export const Container = styled.div`
grid-area: CI;

display: flex;
align-items: center;

padding: 0 17px;

background: var(--primary);

box-shadow: rgba(0,0,0, 0.2) 0px 1px 0px 0px;
z-index: 2;


`;
export const HastagIcon = styled(Hashtag)`
    width: 24px;
    height: 24px;

    color: #fff;
`;
export const Description = styled.div`

`;
export const Separator = styled.div`

`;
export const Title = styled.div`

`;