import { AddCategoryIcon, Category, Container } from './styles';


// aqui o filho chora e a mãe vê

function ChannelList() {
  return (
    <Container>
      <Category>

        <span>Canais de texto</span>

        <AddCategoryIcon />

      </Category>

      {/* <ChannelButton chanelName="chat-livre" />
      <ChannelButton chanelName="" />
      <ChannelButton chanelName="" />
      <ChannelButton chanelName="" />
      <ChannelButton chanelName="" />
      <ChannelButton chanelName="" /> */}

    </Container>
  );
};

export default ChannelList;
