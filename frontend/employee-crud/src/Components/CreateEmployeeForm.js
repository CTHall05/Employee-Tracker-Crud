import React, { useState } from 'react'

const CreateEmployeeForm = ({ onCreate }) => {
  const [employeeData, setEmployeeData] = useState({
    first_name: '',
    last_name: '',
    age: '',
    years_of_employment: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(employeeData);
    // Reset the for after submission
    setEmployeeData({
      first_name: '',
      last_name: '',
      age: '',
      years_of_employment: '',
      role: ''
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input 
          type="text"
          name="first_name"
          value={employeeData.first_name}
          onChange={handleChange}
          required 
        />
      </label>
      <label>
        Last Name:
        <input 
          type="text"
          name="last_name"
          value={employeeData.last_name}
          onChange={handleChange}
          required 
        />
      </label>
      <label>
        Age:
        <input 
          type="text"
          name="age"
          value={employeeData.age}
          onChange={handleChange}
          required 
        />
      </label>
      <label>
        Years of Employment:
        <input 
          type="text"
          name="years_of_employment"
          value={employeeData.years_of_employment}
          onChange={handleChange}
          required 
        />
      </label>
      <label>
        Role:
        <input 
          type="text"
          name="role"
          value={employeeData.role}
          onChange={handleChange}
          required 
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateEmployeeForm;

