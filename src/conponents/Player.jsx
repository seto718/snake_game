import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faVolumeOff,
    faVolumeMute
}from '@fortawesome/free-solid-svg-icons';


const Player = ({soundstatus,onChange,id1,id2}) => {

    const change_status =() => onChange(soundstatus,id1,id2)
    const change_icon = soundstatus === "on" ? faVolumeOff : faVolumeMute;
    const change_class = soundstatus === "on" ? `music-btn btn sound-btn` : `music-btn-mute btn sound-btn`;

    
    return (
        <button className={change_class} onClick={change_status}>
            <FontAwesomeIcon icon={change_icon} />
        </button>
    )
}


export default Player;