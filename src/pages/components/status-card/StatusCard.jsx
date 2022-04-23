import React, {useEffect} from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
import './statuscard.css'
import 'boxicons/css/boxicons.min.css'
const StatusCard = props => {
    useEffect(() => {
        AOS.init({duration: 1000})
    }, [])
    return (
        <div className='status-card' data-aos={props.action}>

        <div className="status-card__icon">
            {

                <i className={props.icon}/>


            }

        </div>
        <div className="status-card__info">
            <h4>{props.count}</h4>
            <span>{props.title}</span>
        </div>
    </div>)
}

export default StatusCard
