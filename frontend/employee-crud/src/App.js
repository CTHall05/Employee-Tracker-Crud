import { useState, useEffect } from 'react';
import EmployeeTable from './Components/EmployeeTable';
import './App.css';

function App() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.log('Error fetching employees:', error))
  }, []);

  const handleDelete = (employeeId) => {
    // Send a delete request to the server to delete the employee
    fetch(`http://localhost:3000/users/${employeeId}`, {
      method: 'DELETE',
    })
      .then(() => {
        // If the delete request is successful, update the employees state by removing the deleted employee
        const updatedEmployees = employees.filter(
          (employee) => employee.id !== employeeId
        );
        setEmployees(updatedEmployees);
      })
      .catch((error) => console.log('Error deleting employee:', error));
  };

  // For storing the updated employee
  const promptForUpdatedData = (employee) => {
    const updatedData = {};

    updatedData.first_name = prompt(
      `Enter the updated first name for employee ${employee.id}:`,
      employee.first_name
    );
    updatedData.last_name = prompt(
      `Enter the updated last name for employee ${employee.id}:`,
      employee.last_name
    );
    updatedData.age = parseInt(
      prompt(`Enter the updated age for employee ${employee.id}:`, employee.age),
      10
    );
    updatedData.years_of_employment = parseInt(
      prompt(
        `Enter the updated years of employment for employee ${employee.id}:`,
        employee.years_of_employment
      ),
      10
    );
    updatedData.role = prompt(
      `Enter the updated role for employee ${employee.id}:`,
      employee.role
    );

    return updatedData;
  };
  
  const handlePatch = (employee) => {
    // Prompt the user for updated data or use a form/modal to gather the updated data
    const updatedData = promptForUpdatedData(employee);

    // Send the PATCH request to update the employee on the server
    fetch(`http://localhost:3000/users/${employee.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
    .then((response) => response.json())
    .then((updatedEmployee) => {
      const updatedEmployees = employees.map((emp) => {
        if (emp.id === updatedEmployee.id) {
          return updatedEmployee;
        }
        return emp;
      });
      setEmployees(updatedEmployees)
    })
    .catch((error) => console.log('Error updating employee:', error));
  };
  console.log(employees);

  return (
    <div className="App">
      <EmployeeTable 
        className="table" 
        employees={employees} 
        onDelete={handleDelete}
        onPatch={handlePatch}
        >    
      </EmployeeTable>
    </div>
  );
}

export default App;
