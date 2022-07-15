import React from 'react'
import Header from './Header';
import '../static/css/style.css';
import { Card } from './Card';
import { Link } from "react-router-dom";

export const ListPage = () => {
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
                <li class="text-gray-500 font-bold">List</li>
              </ol>
          </nav>
        </div>
        <Card />
      </div>
  )
}
