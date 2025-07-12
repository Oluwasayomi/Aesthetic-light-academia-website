import React from "react";

import './Card.css'

const Card = ({
    imgSrc,
    imgAlt,
    location,
    category,
    title,
    rating,
    description,
}) => {

    return (
        <section className="card-container">
            <div className="card-inner">

                <div className="card-front">
                    <div className="card__image">
                    {imgSrc && imgAlt && (<img src={imgSrc} alt={imgAlt}/>)}
                    </div>

                    <div className="over__image">
                        <div className="card__location">
                            {location && (<p>{location}</p>)}
                        </div>

                        <div className="card__bottom">
                        {title && (<h3 className="card__title">{title}</h3>)}
                        {category && (
                            category.split(" ").map((word, index) => (
                                <span key={index} className="card__category">{word}</span>
                            ))
                        )}
                        </div>
                    </div>
                </div>

                <div className="card-back">
                    <div className="card__content">
                    {title && (<h3 className="card__title">{title}</h3>)}
                    {rating && (<p className="card__rating">{rating}</p>)}
                    {description && (<p className="card__description">{description}</p>)}
                    <button className="btn">Now Inspired!</button>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Card