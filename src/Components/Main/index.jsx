import React from 'react'
import Bolo from '../img/bolo.png'
import Pizza from '../img/pizza.png'
import Vitamina from '../img/vitamina.png'
import Colher from '../img/colher.png'
import * as S from './styled.js';

export default function Main(){

    return(
        <S.Main>
        <S.Recipes>
         <h2>LATEST RECIPES</h2>
         <section></section>
         <S.Receitas>
         <S.Figure>
         <img src={Bolo} alt="" />
         <S.Linha></S.Linha>
         <p>Red Velvet Cake</p>
         </S.Figure>
         <S.Figure>
         <img src={Pizza} alt="" />
         <S.Linha></S.Linha>
         <p>Margherita Pizza</p>
         </S.Figure>
         <S.Figure>
         <img src={Vitamina} alt="" />
         <S.Linha></S.Linha>
         <p>Peanut Smoothie</p>
         </S.Figure>
         </S.Receitas>
        </S.Recipes>
        <S.About>
            <img src={Colher} alt="collher" />
            <S.Text>
                <h2>ABOUT</h2>
                <section></section>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</p>
            </S.Text>
        </S.About>
        <S.Subscribe>
            <h2>SUBSCRIBE</h2>
            <p>Sign up for newsletter</p>
            <S.Form>
              <input type="text" placeholder='Your Email'/>
              <button>SUBMIT</button>
            </S.Form>
        </S.Subscribe>
        </S.Main>
    )
}