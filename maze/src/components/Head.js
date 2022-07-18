import * as React from "react"
// react-helmetをimportするのはこのコンポーネントだけになります
import { Helmet } from "react-helmet"
import "../index.css"

// ページコンポーネントから、titleをpropしています
const Head = (props) => {
    const {title} = props
    return (
        <Helmet>
            <title>{title}</title>
            <meta
                name="description"
                content="Meta Labyrinthのホームページです。"
            />
            <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0"></meta>
            <head prefix="og: https://labyrinze.com/" />
            <meta property="og:url" content="https://labyrinze.com/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Meta Labyrinth HP" />
            <meta property="og:description" content="Meta Labyrinthのホームページです。" />
            <meta property="og:site_name" content="Meta Labyrinth HP" />
            <meta property="og:image" content="https://labyrinze.com/static/media/Half_Angel_Lucifer.ec8394a7.png" />
        </Helmet>
    )
}

export default Head