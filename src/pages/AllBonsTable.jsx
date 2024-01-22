import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllBonsTable = () => {
  const [allBons, setAllBons] = useState([]);
  

  useEffect(() => {
    // Fetch all Bons from your Django backend when the component mounts
    axios.get('http://localhost:8000/api/v1/bon/')
      .then(response => {
        console.log(response.data); // Log the received data
        setAllBons(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <div className="container mx-auto mt-10">
      
      <table className="min-w-full bg-white border border-gray-300 shadow rounded-3xl">
        <thead className='bg-backthird m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl dark:text-white' >
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Type de Reduction</th>
            <th className="py-2 px-4 border-b">Montant de Reduction</th>
            <th className="py-2 px-4 border-b">Date Debut</th>
            <th className="py-2 px-4 border-b">Date fin</th>
            <th className="py-2 px-4 border-b"> Code </th>
            <th className="py-2 px-4 border-b">Quantite de bon</th>
            <th className="py-2 px-4 border-b">Cible</th>
            <th className="py-2 px-4 border-b">Adresse</th>
            
            {/* Add more columns as needed codeDeReduction  */}
          </tr>
        </thead>
        <tbody>
            
          {allBons.map(bon => (
            <tr key={bon.id}>
              <td className="py-2 px-4 border-b">{bon.id}</td>
              <td className="py-2 px-4 border-b">{bon.typeDeReduction}</td>
              <td className="py-2 px-4 border-b">{bon.montantDeReduction}</td>
              <td className="py-2 px-4 border-b">{new Date(bon.dateDebut).toLocaleDateString('fr-FR')}</td>
                <td className="py-2 px-4 border-b">{new Date(bon.dateFin).toLocaleDateString('fr-FR')}</td>
              <td className="py-2 px-4 border-b">{bon.codeDeReduction}</td>
              <td className="py-2 px-4 border-b">{bon.quantityBon}</td>
              <td className="py-2 px-4 border-b">
                <div>{bon.sexeCible}</div>
                <div>{bon.ageCible}</div>
             </td>

              
              <td className="py-2 px-4 border-b">{bon.localisation}</td>



              

              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllBonsTable;
