import React from 'react';
import exp1 from '../img/exp1.jpg';
import exp2 from '../img/exp2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDoubleRight,
    faAngleDoubleLeft,
    faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';


let imgs = exp1
let style = {
    display: 'block'
}

const Popup = () => {

    const first_arrow_icon = () => {
        if (imgs === exp1) {
            return <FontAwesomeIcon icon={faAngleDoubleRight} className="arrow_icon" onClick={next_popup} />
        } else {
            return <FontAwesomeIcon icon={faAngleDoubleLeft} className={`arrow_icon arrow_icon_left`} onClick={next_popup} />
        }
    }

    const next_popup = () => {

        if (imgs === exp1) {
            imgs = exp2
            return <LazyLoadImage src={imgs}></LazyLoadImage>
        } else {
            imgs = exp1
            return <LazyLoadImage src={imgs}></LazyLoadImage>
        }
    }

    const close_popup = () => {
        style = {
            display: 'none'
        }
    }

    const text = () => {
        if (imgs === exp1) {
            return <p className="text-box">やあ！スネークゲームにようこそ！<br />このゲームはぼくを食べ物のところに連れて行って大きくしていくゲームだよ。<br />沢山食べて大きくしてね！<br />矢印ボタンを押してゲーム説明を読んでね</p>
        }
        if (imgs === exp2) {
            return <p className="text-box2">Startボタンを押したら白いドットが動き出すよ。<br />矢印キーで操作してピンクのエサまで連れて行こう！<br />右上の難易度によってへびの速さが変わるよ。<br />へびをより長く出来るように頑張ってね！</p>
        }
    }

    return (
        <div className='popup_image' style={style}>
            <LazyLoadImage src={imgs} className='exp_imgs'></LazyLoadImage>
            {text()}
            <FontAwesomeIcon icon={faTimesCircle} className="close_icon" onClick={close_popup} />
            {first_arrow_icon()}
        </div>
    )

}

export default Popup;
