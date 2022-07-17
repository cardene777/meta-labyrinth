import React from 'react'
import { Link } from "react-router-dom";
import imagesFunction from "./funcs/Images";

const images = imagesFunction.imageAll(require.context('../static/img/', false));

export const Card = () => {
    const image = images.map((img, index) => {
        return (
            <div className="rounded-lg shadow-lg bg-white max-w-sm m-2" key={img.name}>
                <Link to={`/meta-labyrinth/${index}`} className="card">
                    <figure>
                    <img className="rounded-t-lg meta-laby-img" src={img.path} alt=""/>
                    </figure>
                </Link>
                <div className="flex justify-center p-6">
                <h5 className="text-gray-900 meta-laby-name text-2xl font-bold">{img.name.replace('.gif', '')}</h5>
                </div>
            </div>
        )
    });
    return <div className="flex flex-wrap justify-center">{image}</div>;
}

export default Card;