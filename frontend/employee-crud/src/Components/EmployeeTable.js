import React from 'react';
import '../App.css';

export default function EmployeeTable({ employees, onDelete, onPatch }) {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Years of Employment</th>
          <th>Role</th>
          <th>Edit</th> {/* Added a new column for the delete button */}
          <th>Delete</th> {/* Added a new column for the delete button */}
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => {
          return (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.age}</td>
              <td>{employee.years_of_employment}</td>
              <td>{employee.role}</td>
              <td>
              <button className='button-design' onClick={() => onPatch(employee)}>Edit</button>
              </td>
              <td>
              <button className='button-design' onClick={() => onDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
