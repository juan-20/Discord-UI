import { Button } from "./styles";


export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions

}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src={'https://discord.com/assets/145dc557845548a36a82337912ca3ac5.svg'} alt="Logo" />}
    </Button>
  )
};

export default ServerButton;
