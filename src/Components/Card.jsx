import React from 'react'
import '../App.css'

function Card(props)
{   let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
console.log(props)

     return(
        <div className="card">
            <img className="card--image" src={`../../public/images/${props.item.coverImg}`} alt="swimmer" />
           {badgeText && <div className="card--badge">{badgeText}</div>}
            <div className="card--stats">
                <i className="fa-sharp fa-solid fa-star" />
                <span> {props.item.stats.rating}</span>
                <span className="gray">( {props.item.stats.reviewCount} ) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span><b>{props.item.price}</b></span> /person</p>
        </div>
    )
}

export default Card
