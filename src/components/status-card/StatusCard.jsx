import React from 'react'

import './status-card.css'
import {Link} from "react-router-dom";
import 'boxicons/css/boxicons.css'

const StatusCard = props => {
    return (
        <div className='status-card'>

            <div className="status-card__icon props.icon">

            </div>
            <div className="status-card__info">
                <h4>{props.count}</h4>
                <span>{props.title}</span>
            </div>
        </div>
    )
}

export default StatusCard
