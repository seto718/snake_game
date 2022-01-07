import React from 'react';
import gameover1 from '../img/gameover1.jpg';
import gameover2 from '../img/gameover2.jpg';
import gameover3 from '../img/gameover3.jpg';
import gameover4 from '../img/gameover4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTimesCircle
}from '@fortawesome/free-solid-svg-icons';
import { GameStatus } from "../constants";


let imgs =""
let styles = {display: 'none'}

const Gameover = ({ gameoverstatus, status, close_popup2,imgstatus }) => {
    
    const close_popup_img =() => close_popup2(imgstatus)
    if(status === GameStatus.gameover){
        imgs = gameoverstatus === 1 ? gameover1 : gameoverstatus === 2 ? gameover2 : gameoverstatus === 3 ? gameover3 : gameoverstatus === 4 ? gameover4 : '';
        styles = {
            backgroundImage: `url(${imgs})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
    }
    let close = imgstatus === 1 && 'close';
    
    return(
        <div className={`popup_image2 pop_opacity ${close}`} style={styles}>
            <FontAwesomeIcon icon={faTimesCircle} className={`close_icon close_icon2`} onClick={close_popup_img} />
        </div>
    )
}

export default Gameover;