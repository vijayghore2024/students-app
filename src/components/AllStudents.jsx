import React from 'react'

const AllStudents = () => {
  return (
    <div className='container'>
      <h1 className='text-center my-4'>All Students</h1>
      <table className="table table-dark table-hover table-bordered border-light">
        <thead>
          <tr>
            <th scope="col" className='text-center'>Roll No</th>
            <th scope="col" className='text-center'>Name</th>
            <th scope="col" className='text-center'>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Ram</td>
            <td>Pune</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Shyam</td>
            <td>Mumbai</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Sita</td>
            <td>Pune</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Shyam</td>
            <td>Mumbai</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Sita</td>
            <td>Pune</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Shyam</td>
            <td>Mumbai</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Sita</td>
            <td>Pune</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Shyam</td>
            <td>Mumbai</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Sita</td>
            <td>Pune</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AllStudents
