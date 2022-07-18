import React from 'react'
import Header from './Header'
import { Link } from "react-router-dom";
import half_angel from "../static/gif/Half_Angel_Lucifer.gif";
import opensea from "../static/logo/opensea.png";
import metaLogo from "../static/logo/Meta.png";
import '../static/css/style.css';
import robot from "../static/img/ML_708_N.png";
import fallenAngel from "../static/img/Fallen_Angel_Lucifer.png";
import angel from "../static/img/Angel_Michael.png";
import { Item } from "./ImagesList"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChessKnight} from "@fortawesome/free-regular-svg-icons"
import {faDiceD20} from "@fortawesome/free-solid-svg-icons"
import {faEarlybirds} from "@fortawesome/free-brands-svg-icons"
import {faDragon} from "@fortawesome/free-solid-svg-icons"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';
import Head from "./Head"; 

export const Home = () => {
    return (
        <div>
            <Head title="トップページ | Meta Labyrinth" />
            <Header />
            
            <div>
                <section className="">
                    <div className="px-6 lg:py-32 py-10 md:px-12 text-gray-800 text-center lg:text-left">
                        <div className="container mx-auto xl:px-32">
                        <div className="grid lg:grid-cols-2 items-center">
                            <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                            <div className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14" style={{background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)'}}>
                                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 menlo">Meta <span className="menlo">Labyrinth</span></h1>
                                <Link to={`/meta-labyrinth/`} className="inline-block px-7 py-3 mb-2 md:mb-0 md:mr-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-teal-600 hover:shadow-lg focus:bg-teal-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-600 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">
                                    <img
                                        className="h-11"
                                        src={metaLogo}
                                        alt="Opensea"
                                    />
                                </Link>
                                <a className="inline-block px-7 py-3 mb-2 md:mb-0 md:mr-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-500 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="https://opensea.io/collection/meta-labyrinth" target="_blank" rel="noopener noreferrer" role="button">
                                    <img
                                        className="h-11"
                                        src={opensea}
                                        alt="Opensea"
                                    />
                                </a>
                            </div>
                            </div>
                            <div className="md:mb-12 lg:mb-0">
                                <img src={half_angel} className="w-full rounded-lg shadow-lg" alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
            
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
                <div className="flex justify-center mb-10">
                    <h2 className="w-2/4 text-gray-300 text-size text-2xl font-bold text-center my-10">Feature</h2>
                </div>
            </AnimationOnScroll>
            
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
                <div className="x-auto grid grid-cols-2 gap-4 m-10 content-center bg-gray-200">
                    <div className="col-span-2 lg:col-span-1 m-5">
                        <img className="rounded-lg meta-laby-img" src={robot} alt="robot"/>
                    </div>
                    <div className="col-span-2 lg:col-span-1 m-5 flex justify-center items-center">
                        <div className="tape text-center pt-16 pb-16 px-5 py-5 rounded-lg">
                            <p className="marugo text-xl">Meta Labyrinthは迷路から作られた可愛いキャラクターです。</p>
                            <br />
                            <p className="marugo text-xl">Meta Labyrinth is a cute character created from a maze.</p>
                        </div>
                    </div>
                </div>
            </AnimationOnScroll>
            
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce="true">
                <div className="x-auto grid grid-cols-2 gap-4 m-10 content-center ">
                    <div className="order-last lg:order-first col-span-2 lg:col-span-1 m-5 flex justify-center items-center">
                        <div className="tape text-center pt-16 pb-16 px-5 py-5 rounded-lg">
                            <p className="marugo text-xl">1体1体名前と特徴があり、今日も迷路界で楽しく生活しています。</p>
                            <br />
                            <p className="marugo text-xl">Each one has its own name and characteristics, and they are happily living in the maze world today.</p>
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 m-5">
                        <img className="rounded-lg meta-laby-img" src={fallenAngel} alt="Fallen Angel"/>
                    </div>
                </div>
            </AnimationOnScroll>
            
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
                <div className="x-auto grid grid-cols-2 gap-4 m-10 content-center bg-gray-200">
                    <div className="col-span-2 lg:col-span-1 m-5">
                        <img className="rounded-lg meta-laby-img" src={angel} alt="angel"/>
                    </div>
                    <div className="col-span-2 lg:col-span-1 m-5 flex justify-center items-center">
                        <div className="tape text-center pt-16 pb-16 px-5 py-5 rounded-lg">
                            <p className="marugo text-xl">作品自体は3Dで、所有者は3Dアバターをダウンロードできます。</p>
                            <br />
                            <p className="marugo text-xl">The work itself is in 3D and the owner can download a 3D avatar.</p>
                        </div>
                    </div>
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
                <div className="flex justify-center mt-20">
                    <h2 className="w-2/4 text-gray-300 text-size text-2xl font-bold text-center">Concept</h2>
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
                <div className="grid md:mt-5 grid-cols-2">
                    <div className="lg:mb-5 lg:col-span-1 col-span-2">
                        <div className="box p-10 lg:m-10 mx-20 lg:my-20 my-10">
                            <div className="flex justify-center content-center">
                                <FontAwesomeIcon icon={faChessKnight} size="3x" />
                            </div>
                            <div className="flex justify-center mt-5 text-xl">
                                <p  className="text-center">1体1体が特定のものを題材に作られ、<br />名前や性格・特徴も連想してつけている。</p>
                            </div>
                        </div>
                        <div className="box p-10 lg:m-10 mx-20 lg:my-20 my-5">
                            <div className="flex justify-center content-center">
                                <FontAwesomeIcon icon={faDiceD20} size="3x" />
                            </div>
                            <div className="flex justify-center mt-5 text-xl">
                                <p  className="text-center">迷路を手作業で1から描き、<br />1体1体心をを込めて作成しています。</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:mb-5 lg:col-span-1 col-span-2">
                        <div className="box p-10 lg:m-10 mx-20 lg:my-20 my-5">
                            <div className="flex justify-center content-center">
                                <FontAwesomeIcon icon={faEarlybirds} size="3x" />
                            </div>
                            <div className="flex justify-center mt-5 text-xl">
                                <p className="text-center">作品だけでなく、性格・特徴も見ることで、<br />あなた好みのメタラビが見つかります。</p>
                            </div>
                        </div>
                        <div className="box p-10 lg:m-10 mx-20 lg:my-20 my-10">
                            <div className="flex justify-center content-center">
                                <FontAwesomeIcon icon={faDragon} size="3x" />
                            </div>
                            <div className="flex justify-center mt-5 text-xl">
                                <p className="text-center">3D作品にとどまらず迷路界をメタバース上で作成し、<br />メタラビたちが暮らす迷路界を体験できるようにする。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
                <div className="flex justify-center mb-20">
                    <h2 className="w-2/4 text-gray-300 text-size text-2xl font-bold text-center">Road Map</h2>
                </div>
            </AnimationOnScroll>
            
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
                <div className="mt-10 mb-20 bg-gray-200 py-10 mx-10">
                    <ol className=" mx-16 border-l md:border-l-0 md:border-t border-gray-300 md:flex md:justify-between md:gap-6">
                        <li>
                            <div className="flex md:block flex-start items-center pt-2 md:pt-0">
                                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 md:ml-0 mr-3 md:mr-0 md:-mt-1" />
                            </div>
                            <div className="mt-0.5 ml-4 md:ml-0 pb-5">
                                <h4 className="text-gray-800 font-semibold text-xl mb-1.5">Q2</h4>
                                <p className="text-gray-500 mb-3 text-xl">
                                    ホームページ作成
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="flex md:block flex-start items-center pt-2 md:pt-0">
                                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 md:ml-0 mr-3 md:mr-0 md:-mt-1" />
                            </div>
                            <div className="mt-0.5 ml-4 md:ml-0 pb-5">
                                <h4 className="text-gray-800 font-semibold text-xl mb-1.5">Q3</h4>
                                <p className="text-gray-500 mb-3 text-xl">
                                    メタラビワールドの作成
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="flex md:block flex-start items-center pt-2 md:pt-0">
                                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 md:ml-0 mr-3 md:mr-0 md:-mt-1" />
                            </div>
                            <div className="mt-0.5 ml-4 md:ml-0 pb-5">
                                <h4 className="text-gray-800 font-semibold text-xl mb-1.5">Q4</h4>
                                <p className="text-gray-500 mb-3 text-xl">
                                    メタラビジェネラティブ
                                </p>
                            </div>
                        </li>
                    </ol>
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
                <div className="flex justify-center mb-20 mt-10">
                        <h2 className="w-2/4 text-gray-300 text-size text-2xl font-bold text-center">Meta Labyrinth</h2>
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
                <Item start="0" end="5"/>
                <Item start="5" end="10"/>
                <Item start="10" end="15"/>
                <Item start="15" end="20"/>
                <Item start="20" end="25"/>
            </AnimationOnScroll>


            
        </div>
    )
}

export default Home;