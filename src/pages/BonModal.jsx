// BonModal.js
import React, { useState } from 'react';
import './BonModal.css'
const BonModal = ({ isOpen, onClose, onAddBon }) => {
  const [formData, setFormData] = useState({
    // Define your form fields here
    typeDeReduction: '',
    montantDeReduction: 0,
    // ... other fields
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddBon = () => {
    // Call the onAddBon prop with the form data
    onAddBon(formData);
    // Clear the form data
    setFormData({
      typeDeReduction: '',
      montantDeReduction: 0,
      // ... other fields
    });
    // Close the modal
    onClose();
  };

  return (
    // Your modal JSX here
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      {/* Modal content goes here */}
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add New Bon</h2>
        {/* Your form goes here */}
        <form>
          <label>Type de Reduction:</label>
          <input
            type="text"
            name="typeDeReduction"
            value={formData.typeDeReduction}
            onChange={handleChange}
          />
          {/* Other form fields go here */}
          <button type="button" onClick={handleAddBon}>
            Add Bon
          </button>
        </form>
      </div>
    </div>
  );
};

export default BonModal;
