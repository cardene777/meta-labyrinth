import React from 'react'
import { Link } from "react-router-dom";
import imagesFunction from "./funcs/Images";
import '../static/css/style.css';

const images = imagesFunction.imageAll(require.context('../static/img/', false));

export const Item = ({ start, end}) => {
    const sliceImage = images.slice(Number(start), Number(end))
    
    const image = sliceImage.map((img, index) => {
        const metaId = index+Number(start)
        return (
            <div className="w-2/12 mx-3" key={img.name}>
                <Link to={`/meta-labyrinth/${metaId}`} className="item-link">
                    <img className="rounded-lg meta-laby-img" src={img.path} alt="angel"/>
                </Link>
            </div>
        )
    });
    return <div className="flex justify-center my-3">{image}</div>;
}

export default Item;