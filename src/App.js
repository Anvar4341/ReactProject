import React, {useState, useContext} from "react";
import { Container, MobileContainer, ToggleMode, Line, Desc, Item, Title, IconCon, TitleImg, Icon, Img, ImgWrapper } from "./component/AppStyles";
import img from "./img/logo6.jpg";
import {ThemeContext} from "./component/context";

const App = () => {
  const [mode, setMode] = useState(false)
  const [theme, setTheme] = useContext(ThemeContext)


  const dark = {
    icon: 'black',
    title: 'black',
    background: 'white'
  }
  const light = {
    icon: 'white',
    title: 'white',
    background: 'black'
  }


  const onChange = ()=>{
    setMode(!mode)
    setTheme(mode ? dark : light)
  }

  return (
    <Container >
        <MobileContainer color={theme.background}>
          <IconCon>
            <Icon.Arrow color={theme.icon}/>
            <Icon.Switch color={theme.icon}/>
          </IconCon>
          <ImgWrapper>
            <Img src={img} alt="mobile logo"/>
          </ImgWrapper>
          <TitleImg color={theme.title}>HK Academy</TitleImg>
          <Desc color={theme.title}>Company</Desc>
          {/* dark */}
          <Item>
            <Icon.Dark color={theme.icon}/>
            <Title color={theme.title}>Dark Mode</Title>
            <ToggleMode
              onChange={onChange}
              checked={mode}
              size={50}
            />
          </Item>
          {/* Grid */}
          <Item>
              <Icon.Grid/>
              <Title color={theme.title}>Story</Title>
          </Item>
          {/* userCheck */}
          <Item>
              <Icon.UserCheck/>
              <Title color={theme.title}>Chat Head</Title>
          </Item>
          {/* userChat */}
          <Item>
              <Icon.UserPlus/>
              <Title color={theme.title}>Story</Title>
          </Item>
          <Line/>
          <Item>
              <Icon.PermMedia/>
              <Title color={theme.title}>Media and photos</Title>
          </Item>
          <Item>
              <Icon.Settings/>
              <Title color={theme.title}>Settings and privacy</Title>
          </Item>
          <Item>
              <Icon.CommentDots/>
              <Title color={theme.title}>CommentDots</Title>
          </Item>
          <Item>
              <Icon.BellFill/>
              <Title color={theme.title}>Story</Title>
          </Item>
        </MobileContainer>
    </Container>
  );
}

export default App;
