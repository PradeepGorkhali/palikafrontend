import React, { useState } from 'react';

const StudentForm = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    name: '',
    district:'',
    municipality:'',
    ward:'',
    sakchi:''
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
      const response = await fetch('https://palika-production.up.railway.app/students', {
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
        district:'',
        municipality:'',
        ward:'',
        sakchi:''
       
      });

      alert('Student data submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit student data. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
           नाम:
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
        जिल्ला:
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          नगरपालिका/गाऊँपालिका:
          <input
            type="text"
            name="municipality"
            value={formData.municipality}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          वडा:
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
          साक्षी:
          <input
            type="text"
            name="sakchi"
            value={formData.sakchi}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
