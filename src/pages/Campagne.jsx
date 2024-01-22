
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import logo  from "../data/promo2.jpg";
import axios from 'axios';
const Campagne = () => {
   
    const [camp, setCamp] = useState([]);
    
    useEffect(() => {
        // Fetch data from your Django backend when the component mounts
        axios.get('http://localhost:8000/api/v1/campagnes/')
        .then(response => {
            setCamp(response.data.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []); // The empty dependency array ensures that this effect runs only once when the component mounts
    return (
        <div className='text-red-600  bg-white m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl'>
          <h1 className='text-white p-11 bg-slate-600 rounded-3xl'>Campagnes </h1>
          <div className='flex ...'>
            {camp.map(campagnes => (
              <div key={campagnes.id} className="max-w-sm bg-white md:m-5 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to="#">
                  <img className="rounded-t-lg w-100 h-100" src={logo} alt="" />
                </Link>
                <div className="p-5">
                  <Link to="#">
                    <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> <stron>Campagne de:</stron> {campagnes.nomCampagne}</p>
                  </Link>
                  {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Description: {campagnes.description}</p> */}
                  {/* <Link to="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
          <Link to="/all-bons" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Voir tous
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
            </Link>
        </div>
    );
}

export default Campagne;
