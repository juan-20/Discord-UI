import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({
  channelName,
  selected,
}) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div className="">
        <HashtagIcon />

        <span>{channelName}</span>
      </div>

      <div className="">
        <InviteIcon />
        <SettingsIcon />

      </div>
    </Container>
  );
};

export default ChannelButton;
