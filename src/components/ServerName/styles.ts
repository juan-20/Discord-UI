import styled from 'styled-components';
import { ExpandMore } from 'styled-icons/material';
export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

padding: 0 11px 0 16px;

background:var(--secondary);

box-shadow: rgba(0,0,0,0.2) 0px 1px 0px 0;
z-index: 2;
`;
export const Title = styled.div`
    font-size: 16px;
    font-weight: bold;

    color: #fff;
`;
export const ExpandIcon = styled(ExpandMore)`
    width: 16px;
    height: 28px;

    color: #fff;
    cursor: pointer;
`;
