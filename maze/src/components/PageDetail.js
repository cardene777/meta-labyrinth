import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import { Link } from "react-router-dom";

import imagesFunction from "./funcs/Images";

const images = imagesFunction.imageAll(require.context('../static/gif/', false));

export const PageDetail = () => {
  const metalabyId = useParams();
  const metaLaby = images[metalabyId.id];
  return (
    <div>
      <Header />
      <div class="container mt-10 mx-auto">
        <nav class="px-5 py-3 rounded-md w-full">
            <ol class="list-reset flex">
              <li>
                <Link to={`/`} className="text-blue-600 hover:text-blue-700 font-bold">
                  Home
                </Link>
              </li>
              <li><span class="text-gray-500 mx-2">/</span></li>
              <li>
                <Link to={`/meta-labyrinth`} className="text-blue-600 hover:text-blue-700 font-bold">
                  List
                </Link>
              </li>
              <li><span class="text-gray-500 mx-2">/</span></li>
              <li class="text-gray-500 font-bold">{metaLaby.name}</li>
            </ol>
          </nav>
      </div>
      <div class="container mx-auto grid grid-cols-2 gap-4 m-10">


        <div class="col-span-2 lg:col-span-1 m-5">
          <img className="rounded-t-lg" src={metaLaby.path} alt=""/>
        </div>

        <div class="col-span-2 lg:col-span-1 m-5">
          <h3 class="text-2xl text-gray-700 font-bold mb-6 -ml-3">{metaLaby.name}</h3>
          <ol class="border-l-2 border-purple-600">
            <li>
              <div class="md:flex flex-start">
                <div class="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" class="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                </div>
                <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                  <div class="flex justify-between mb-4">
                    <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">Description</a>
                  </div>
                  <p class="text-gray-700 mb-6">Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto recusandae natus sapiente sit nam eaque, consectetur porro molestiae ipsam an deleniti.</p>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
