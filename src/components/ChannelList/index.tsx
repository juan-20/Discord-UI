import ChannelButton from '../ChannelButton';
import { AddCategoryIcon, Category, Container } from './styles';


// aqui o filho chora e a mãe vê

function ChannelList() {
  return (
    <Container>
      <Category>

        <span>Canais de texto</span>

        <AddCategoryIcon />

      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="lol" />
      <ChannelButton channelName="vava" />
      <ChannelButton channelName="mine" />
      <ChannelButton channelName="filminho" />

    </Container>
  );
};

export default ChannelList;
