import React from 'react';
import StarImg from '/Star 1.jpg'

function CardComponent(props) {
    return (
        <div className='cards-component'>
            <img className='img-cards' src={props.img} alt="" />
            <div className='caption'>
                <div className='star-el'>
                    <img className='star-img' src={StarImg} alt="" />
                    <p className='star-p'>{props.rating} <span className='gray'>{props.reviewCount} &#x2022; {props.location}</span></p>
                </div>
                <p className='description'>{props.title}</p>
                <p><strong className='strong'>From ${props.price}</strong> / person</p>
            </div>
        </div>
    )
}

export default CardComponent