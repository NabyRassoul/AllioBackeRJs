
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import logo  from "../data/promo2.jpg";
import axios from 'axios';
import BonModal from './BonModal';
const Bon = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    // Function to close the modal
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    // Function to handle adding a new "bon"
    const handleAddBon = (formData) => {
      // Implement the logic to add the new "bon" to your database
      console.log('Adding bon:', formData);
      // You might want to make an API request to your Django backend here
      // Close the modal after adding the bon
      handleCloseModal();
    };
   
    const [bons, setBons] = useState([]);
    
    useEffect(() => {
        // Fetch data from your Django backend when the component mounts
        axios.get('http://localhost:8000/api/v1/bon/')
        .then(response => {
            console.log(response.data); // Log the received data

            // Slice the array to get the four latest items
            const latestBons = response.data.data.slice(0, 4);
    
            setBons(latestBons);
          })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []); // The empty dependency array ensures that this effect runs only once when the component mounts
    return (
        <div className='bg-backthird m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl'>
          <h1 className='text-white p-11 bg-slate-600 rounded-3xl'>Bon de reduction</h1>
      
          {/* Render the "Ajouter" button at the top */}
          <button onClick={handleOpenModal}>Ajouter</button>
      
          <div className='flex ...'>
            {bons.map(bon => (
              <div key={bon.id} className="max-w-sm bg-white md:m-5 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to="#">
                  <img className="rounded-t-lg w-100 h-100" src={logo} alt="" />
                </Link>
                <div className="p-5">
                  <Link to="#">
                    <p className="mb-3 font-bold text-gray-700 dark:text-white"><strong>Type de bon:</strong> {bon.typeDeReduction}</p>
                  </Link>
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
      
          {/* Render the BonModal component */}
          <BonModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onAddBon={handleAddBon}
          />
        </div>
      );
      

}

export default Bon;
