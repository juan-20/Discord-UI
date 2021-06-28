import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */

    cursor: pointer;

    padding: 5px 3px;
    border-radius: 5px;

    background-color: transparent;

    transition: background-color .2s ;

    >div{
        display: flex;
        align-items: center;
    }

    >div span{
        margin-left: 5px;
        color: var(--senary);
    }

    /*hover dos canais  */
  &:hover,
  &.active {
    background-color: var(--quinary);
    > div span {
      color: var(--white);
    }
  }
`;

export const HashtagIcon = styled(Hashtag)`
      width: 20px;
      height: 20px;
      color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;
  color: var(--symbol);
  cursor: pointer;

  transition: color .2s;
`;

export const SettingsIcon = styled(Settings)`
`;