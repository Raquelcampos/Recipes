import styled from 'styled-components';
import FundoG from '../img/fundoG.png'


export const Header = styled.header`
background-image: url(${FundoG});
background-repeat: no-repeat;
background-size:95%; 
background-position: center; 
@media screen and (max-width: 600px){


}
`
export const Nav = styled.nav`
display:flex;
justify-content: space-around;
@media screen and (max-width: 600px){
    background-size:cover;

    figure{
        display: none;
    }
}
`
export const Ul = styled.ul`
display:flex;
align-items:center;
list-style:none;
width:30%;
justify-content: space-evenly;
    
}
li{
    width:20%;
    cursor: pointer;
    display:flex;
    font-family:Arial,Helvetica,sans-serif;
    align-items:center;
    justify-content: center;
    @media screen and (max-width:600px){
        display: none;
}
li:hover{
    cursor: pointer;
    border:solid 1px;
    height:25px;
    text-align: center;
    
}
@media screen and (max-width:300px){
    width:60%;
}
`
export const H1 = styled.h1`
color:#373737;
font-family:Arial,Helvetica,sans-serif;
font-size:150px;
padding:25%;
text-align: center;
@media screen and (max-width:800px){
    font-size:50px;   
    padding:20% 0% 25% 0%;
  
}
`

