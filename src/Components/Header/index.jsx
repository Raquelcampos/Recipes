import React from 'react'
import RC from '../img/RC.png'
import * as S from './styled.js';

export default function Header(){

    return(
        <S.Header>
     <S.Nav>
            <figure>
                <img src={RC} alt="RC" />
            </figure>
        <S.Ul>
            <li>ABOUT</li>
            <li>RECIPES</li>
            <li>SUBSCRIBE</li>
        </S.Ul>
        </S.Nav>
        <S.H1>RECIPES</S.H1>
        </S.Header>
    )
}