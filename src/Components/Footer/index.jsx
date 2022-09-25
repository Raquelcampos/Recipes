import React from 'react'
import Insta from '../img/insta.png'
import Twitter from '../img/twitter.png'
import Face from '../img/face.png'
import Pinterest from '../img/pint.png'
import * as S from './styled.js';
export default function Footer(){

    return(
    <>
        <S.Footer>
        <S.Nav>
            <S.Figure>
                <img src={Insta} alt="instagran" />
                <img src={Twitter} alt="twitter" />
                <img src={Face} alt="facebook" />
                <img src={Pinterest} alt="pinterest" />
            </S.Figure>
        <S.Ul>
            <li>ABOUT</li>
            <li>RECIPES</li>
            <li>SUBSCRIBE</li>
        </S.Ul>
        </S.Nav>
        
        </S.Footer>
        <S.Div>
            <p>Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/</p>
        </S.Div>
        </>
    )
}