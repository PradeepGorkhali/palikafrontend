import React, { useState } from 'react';
import './Sifarisform.css'
import Letter from "../Components/Letter"

const SifarisForm = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    name: '',
    date:'',
    dartanum:'',
    dartafy:'',
    ward:'',
    sansthachalani:'',
  });

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://palika-production.up.railway.app/sifaris', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Reset form after successful submission
      setFormData({
        name: '',
        date:'',
        dartanum:'',
        dartafy:'',
        ward:'',
        sansthachalani:'',
       
      });

      alert('Data submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit data. Please try again.');
    }
  };

  return (
    <div className='letter__generator__container'>
    <div className='letter__form__container'>
    <form onSubmit={handleSubmit} className='sifaris__form'>
      <div>
        <label>
        संस्थाको नाम:<br/>
          <input className='input__form'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
        मिति:<br/>
          <input className='input__form'
            type="text"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          दर्ता नम्बर:<br/>
          <input className='input__form'
            type="text"
            name="dartanum"
            value={formData.dartanum}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          दर्ता भएको आर्थिक वर्ष:<br/>
          <input className='input__form'
            type="text"
            name="dartafy"
            value={formData.dartafy}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          वडा नं.:<br/>
          <input className='input__form'
            type="text"
            name="ward"
            value={formData.ward}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          संस्थाको पत्रको चलानी:<br/>
          <input className='input__form'
            type="text"
            name="sansthachalani"
            value={formData.sansthachalani}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
     
    <button className='form__button' type="submit">Submit</button>
    </form>
    </div>
    <div className='letter__generator'>
      <Letter/>
    </div>
    </div>
  );
};

export default SifarisForm;
