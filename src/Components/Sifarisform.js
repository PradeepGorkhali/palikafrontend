import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <div>
        <label>
        संस्थाको नाम:
          <input
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
        मिति:
          <input
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
          दर्ता नम्बर:
          <input
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
          दर्ता भएको आर्थिक वर्ष:
          <input
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
          वडा नं.:
          <input
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
          संस्थाको पत्रको चलानी:
          <input
            type="text"
            name="sansthachalani"
            value={formData.sansthachalani}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SifarisForm;
