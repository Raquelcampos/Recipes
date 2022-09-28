import styled from 'styled-components';
// export const = styled.`` @media(max-width:500px){
    export const Main = styled.main`
    width:100%;
    margin-top:10px;
    `
    export const Recipes = styled.div`
    background-color:#F2F4F1;
    display:flex;
    flex-direction: column;
    
    h2{
        text-align: center;
        font-family:Arial, Helvetica, sans-serif;
        color:#373737;
        margin: 10% 0 -50px 0;
    }
    section{
        background-color:#373737;
        width:50px;
        height:4px;
        margin:60px auto;
    }
    `
    export const Linha = styled.div`
    width:30px;
    height:2px;
    background-color: black;
    margin:15% auto;
    `
    export const Receitas = styled.div`
    display: flex;
    width:100%;
    justify-content: space-evenly;
    @media(max-width:600px){
        flex-direction: column;
        align-items: center;
    }
    `
    export const Figure = styled.figure`
    width:300px;
    height:60vh;
    background-color: white;
    text-align: center;
    margin-bottom: 20%;
    box-shadow: 0px 7px 6px #00000029;
    img{
        width:100%;
        height:60%;
        object-fit: cover;
    }
    @media(max-width:950px){
        width:80%; 
        margin-bottom: 5%;
        font-size:20px;
    }
    `
    export const About = styled.div`
    width:100%;
    display:flex;
    img{
        width:50%;
    }
    @media(max-width:867px){
        flex-direction: column;
        align-items: center;
    }
    `
    export const Text = styled.div`
    width:60%;
    margin: 0 auto;
    font-family:Arial, Helvetica, sans-serif;
    h2{
        margin-top:15%;
        text-align:center;
    }
    section{
        width:30px;
        height:2px;
        background-color:#373737;
        margin:5px auto;
    }
    p{
        margin:10%;
        font-size:22px;
    }
    @media(max-width:867px){
        width:100%;
    }
    `
    export const Subscribe = styled.div`
    background-color: #DFE4DE;
    font-family:Arial, Helvetica, sans-serif;
    text-align: center;
    color:#373737;
    padding:10%;
    h2{
        letter-spacing: 4.2px;
    }
    p{
        font-size:1.5rem;
        letter-spacing: 2.05px;
    }
    `
    export const Form = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;
    input{
        background-color: #EFF1EE;
        width:100%;
        border:none;
        height:50px;
        margin-top:3%;
        padding:10px;
    }
    button{
        margin-top:3%;
        width: 140px;
        height: 60px; 
        background-color: #DFE4DE;
        cursor:pointer; 
    }
    `