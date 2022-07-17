import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import { Link } from "react-router-dom";
import itemsData from "../json/metaLaby.json"

import imagesFunction from "./funcs/Images";

const images = imagesFunction.imageAll(require.context('../static/gif/', false));

export const PageDetail = () => {
  const metalabyId = useParams();
  const metaLaby = images[metalabyId.id];
  const items = itemsData.data

  const itemKey = metaLaby.name.replace('.gif', '')
  const itemData = eval(`items.${itemKey}`)

  const [typeCharacter, setTypeCharacter] = useState("Character")

  useEffect(()=>{
    if (metaLaby.name.replace('.gif', '').indexOf("ML") >= 0) {
      setTypeCharacter("Type")
    }
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Header />
      <div className="container mt-10 mx-auto">
        <nav className="px-5 py-3 rounded-md w-full">
            <ol className="list-reset flex">
              <li>
                <Link to={`/`} className="text-blue-600 hover:text-blue-700 font-bold">
                  Home
                </Link>
              </li>
              <li><span className="text-gray-500 mx-2">/</span></li>
              <li>
                <Link to={`/meta-labyrinth`} className="text-blue-600 hover:text-blue-700 font-bold">
                  List
                </Link>
              </li>
              <li><span className="text-gray-500 mx-2">/</span></li>
              <li className="text-gray-500 font-bold">{metaLaby.name}</li>
            </ol>
          </nav>
      </div>
      <div className="container mx-auto grid grid-cols-2 gap-4 m-10">


        <div className="col-span-2 lg:col-span-1 m-5">
          <img className="rounded-t-lg" src={metaLaby.path} alt=""/>
        </div>

        <div className="col-span-2 lg:col-span-1 m-5">
          <div className="flex justify-between content-end">
            <h3 className="text-2xl text-gray-700 font-bold mb-6 -ml-3">{metaLaby.name.replace('.gif', '')}</h3>
            <a href={itemData.url} target="_blank" rel="noopener noreferrer" class="btn btn-flat mb-3 ml-3 py-3 px-10"><span className="font-bold text-lg">Opensea</span></a>
          </div>
          <ol className="border-l-2 border-purple-600">
            <li>
              <div className="md:flex flex-start">
                <div className="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                </div>
                <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                  <div className="flex justify-between mb-4">
                    <a href="#!" className="font-bold text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-lg">Description</a>
                  </div>
                  <p className="text-gray-700">{itemData.Description}<br /><br />{itemData.DescriptionEn}</p>
                </div>
              </div>
            </li>
            <li>
              <div className="md:flex flex-start">
                <div className="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                </div>
                <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                  <div className="flex justify-between mb-4">
                    <a href="#!" className="font-bold text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-lg">Price</a>
                  </div>
                  <p className="text-gray-700">{itemData.price}</p>
                </div>
              </div>
            </li>
            <li>
              <div className="md:flex flex-start">
                <div className="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                </div>
                <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                  <div className="flex justify-between mb-4">
                    <a href="#!" className="font-bold text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-lg">{typeCharacter}</a>
                  </div>
                  <p className="text-gray-700">{itemData.character}</p>
                </div>
              </div>
            </li>
            <li>
              <div className="md:flex flex-start">
                <div className="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                </div>
                <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                  <div className="flex justify-between mb-4">
                    <a href="#!" className="font-bold text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-lg">Color</a>
                  </div>
                  <p className="text-gray-700">{itemData.color}</p>
                </div>
              </div>
            </li>
            <li>
              <div className="md:flex flex-start">
                <div className="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                </div>
                <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                  <div className="flex justify-between mb-4">
                    <a href="#!" className="font-bold text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-lg">Personality</a>
                  </div>
                  <p className="text-gray-700">{itemData.personality}</p>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
