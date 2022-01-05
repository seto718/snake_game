import React from 'react';
import exp1 from '../img/exp1.jpg';
import exp2 from '../img/exp2.jpg';
import gameover1 from '../img/gameover1.jpg';
import gameover2 from '../img/gameover2.jpg';
import gameover3 from '../img/gameover3.jpg';
import gameover4 from '../img/gameover4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDoubleRight,
    faAngleDoubleLeft,
    faTimesCircle
}from '@fortawesome/free-solid-svg-icons';


let exp_imgs = exp1
let style = {
    backgroundImage: `url(${exp_imgs})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}



const Popup = () => {

    const first_arrow_icon = () => {
        if(exp_imgs === exp1 ){
            return <FontAwesomeIcon icon={faAngleDoubleRight} className="arrow_icon" onClick={next_popup} />
        }else{
            return <FontAwesomeIcon icon={faAngleDoubleLeft} className={`arrow_icon arrow_icon_left`} onClick={next_popup} />
        }
    }

    const next_popup = () => {

        if (exp_imgs === exp1){
            exp_imgs = exp2
            style = {
                backgroundImage: `url(${exp_imgs})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }
        }else{
            exp_imgs = exp1
            style = {
                backgroundImage: `url(${exp_imgs})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }
        }
    }

    const close_popup = () => {
        style = {
            display: 'none'
        }
    }

    const text = () => {
        if(exp_imgs === exp1){
            return <p className="text-box">やあ！スネークゲームにようこそ！<br />このゲームはぼくを食べ物のところに連れて行って大きくしていくゲームだよ。<br />沢山食べさせて大きくしてね！<br />矢印ボタンを押してゲーム説明を読んでね</p>
        }
        if(exp_imgs === exp2){
            return <p className="text-box2">Startボタンを押したら白いドットが動き出すよ。<br />矢印キーで操作してピンクのエサまで連れて行こう！<br />右上の難易度によってへびの速さが変わるよ。<br />へびをより長く出来るように頑張ってね！</p>
        }
    }

    return (
        <div className={`popup_image`} style={style}>
            {text()}
            <FontAwesomeIcon icon={faTimesCircle} className="close_icon" onClick={close_popup} />
            {first_arrow_icon()}
        </div>
    )

}

export default Popup;