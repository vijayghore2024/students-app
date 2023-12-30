import React from 'react'

const ViewStudent = () => {
  return (
    <div className='p-3'>
      <h1 className='text-center py-3'>View Student</h1>

      <div className='d-flex justify-content-center fs-2'>
          <label htmlFor="stud_name" className="px-3">Enter Roll no: </label>

          <input type="number" className="px-3" id="stud_name" name="stud_name" placeholder="Roll No.." />

          <button className='btn btn-dark px-3'>Search</button>
      </div>
    </div>
  )
}

export default ViewStudent
