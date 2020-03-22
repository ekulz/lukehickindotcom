import React from 'react';
import './App.css';
import { Container, Header, Divider, Icon, Segment, Button, Image } from 'semantic-ui-react'
import MenuBar from './components/MenuBar'

const App = () => {
  
  const handleClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="App">
      <MenuBar />
      <Container text textAlign='center'>

        <Segment basic className='segmentHeader' size='huge'>
          <Header as='h1' icon textAlign='center' color='blue'>
            <Image circular src='me.jpg' style={{'fontSize':50}}/>
            <Header.Content>Luke Hickin</Header.Content>
          </Header>
        </Segment>

        <Divider className='dividerHeader'/>

        <Segment basic size='large' textAlign='left'>
          <p>
            Hi, I'm <b>Luke</b>. 
            <span role="img" aria-label="wave"> 👋</span>
          </p>
          <p>
            I recently moved to Vancouver BC, Canada!
            <span role="img" aria-label="flag-ca"> 🇨🇦</span>
          </p>
          <p>
            I looooove <b>building software</b>, but I have a passion for <b>ops</b>. 
            My ideal role is one where I can do both <span role="img" aria-label="blush">😊</span>
          </p>
          <p>
            I'm currently looking for opportunities in the area. 
            If are looking for Engineers, please don't hesistate to <a href={"mailto:lukehickin@hotmail.com"}>contact me!</a>
          </p>
        </Segment>

        <Divider />

        <Segment basic size='large'>
          <p>Get in touch, I'd love to connect with you:</p>
          <div>
            <Button color='black' onClick={() => handleClick('https://github.com/ekulz')}>
              <Icon name='github' /> Github
            </Button>
            <Button color='linkedin' onClick={() => handleClick('https://www.linkedin.com/in/lhickin/')}>
              <Icon name='linkedin' /> LinkedIn
            </Button>
            <Button color='twitter' onClick={() => handleClick('https://twitter.com/lukeee_h')}>
              <Icon name='twitter' /> Twitter
            </Button>
          </div>
        </Segment>

      </Container>
    </div>
  );
};

export default App;
