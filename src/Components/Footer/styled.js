import styled from 'styled-components';


export const Footer = styled.footer`
background-color: #F2F4F1;
width:100%;
height:25vh;
@media screen and (max-width:600px){
    height:10vh;

      
}
`
export const Nav = styled.nav`
display:flex;
align-items:center;
justify-content: space-between;
padding:4%;
@media screen and (max-width:600px){
    flex-direction: column-reverse;
}

`
export const Ul = styled.ul`
display:flex;
align-items:center;
list-style:none;
width:40%;
justify-content: space-evenly;
font-family:Arial,Helvetica,sans-serif;

li:hover{
cursor:pointer;
}
@media screen and (max-width:600px){
    width:60%;
    flex-direction: column;
    
}
`
export const Figure = styled.figure`
display:flex;
align-items:center;
width:20%;
justify-content: space-evenly;
img{
    width:30px;
    cursor:pointer;
}
`
export const Div = styled.div`
background-color: #446061;
color:white;
font-size:12px;
height:30px;
display:flex;
align-items:center;
justify-content: center;
@media(max-width:500px){
    font-size:5px;  
`