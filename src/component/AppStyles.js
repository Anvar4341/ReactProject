import styled, {css} from 'styled-components';

import {Switch} from "@styled-icons/icomoon/Switch";
import {Settings} from "@styled-icons/ionicons-sharp/Settings";
import {Moon} from "@styled-icons/bootstrap/Moon";
import {Grid} from "@styled-icons/bootstrap/Grid";
import {UserCheck} from "@styled-icons/boxicons-regular/UserCheck";
import {UserPlus} from "@styled-icons/boxicons-regular/UserPlus";
import {PermMedia} from "@styled-icons/material-twotone/PermMedia";
import {CommentDots} from "@styled-icons/boxicons-regular/CommentDots";
import {BellFill} from "@styled-icons/bootstrap/BellFill";
import { KeyboardArrowLeft } from '@styled-icons/material';

import Toggle from "react-dark-mode-toggle";

export const ToggleMode = styled(Toggle)`
margin-left: auto;
`


export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-diraction: column;
// width: 100%;
`
export const MobileContainer = styled.div`
width: 350px;
height: 600px;
box-sizing: border-box;
border-radius: 20px;
box-shadow: 1px 2px 10px rgba(0,0,0,0.25);
background: ${({color}) => color}
`

export const IconCon = styled.div`
display: flex;
width: 100%;
padding: 20px;
box-sizing: border-box;
`

export const Icon = styled.div`
color: red;
`

Icon.Arrow = styled(KeyboardArrowLeft)`
width: 30px;
height: 30px;
pursor: pointer;
color: ${({color})=> color};
`

Icon.Switch = styled(Switch)`
width: 20px;
height: 20px;
pursor: pointer;
color: ${({color})=> color};
margin-left: auto;
`

export const ImgWrapper = styled.div`
padding-top: 30px;
display: flex;
justify: center;
align-items: center;
flex-diraction: column;
`

export const Img = styled.img`
width: 100px;
height: 100px;
margin: 5px auto;
border: 1px solid #cccccc;
border-radius: 50%;
`

export const TitleImg = styled.div`
  text-align: center;
  font-size: 22px;
  fonst-style: bold;
  font-family: Sans-serif;
  color: ${({color})=> color};
`

export const Desc = styled.div`
  text-align: center;
  font-size: 18px;
  fonst-style: 500;
  font-family: Sans-serif;
  color: ${({color})=> color};
`

export const Item = styled.div`
display: flex;
padding: 10px 30px;
`

export const Title = styled.div`
font-size: 17px;
font-style: bold;
font-family: Sans-serif;
padding-left: 15px;
color: ${({color})=> color};
`
export const Line = styled.div`
height: 2px;
background: #E9E9E9;
margin: 10px 30px;
box-sizing: border-box;
`

Icon.Dark = styled(Moon)`
width: 18px;
height: 18px;
color: ${({color})=> color};
`

Icon.Grid = styled(Grid)`
width: 18px;
height: 18px;
color: #FBB65C;
`
Icon.UserCheck = styled(UserCheck)`
width: 18px;
height: 18px;
color: #FF7EB0;
`

Icon.UserPlus = styled(UserPlus)`
width: 18px;
height: 18px;
color: #36F3FF;
`
Icon.PermMedia = styled(PermMedia)`
width: 18px;
height: 18px;
color: #5476FF;
`
Icon.CommentDots = styled(CommentDots)`
width: 18px;
height: 18px;
color: #00C630;
`

Icon.BellFill = styled(BellFill)`
width: 18px;
height: 18px;
color: #A394C2;
`

Icon.Settings = styled(Settings)`
width: 18px;
height: 18px;
color: #00C630;
`
