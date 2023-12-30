import React from 'react'

const AddStudent = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>

      <h1 className='text-center my-3'>Add Student</h1>
    <div className='p-4 w-50  border border-dark'>

      <div className="mb-3">
        <label htmlFor="stud_name" className="form-label">Student Name</label>
        <input type="text" className="form-control" id="stud_name" name="stud_name" placeholder="Student Name"/>
      </div>
      <div className="mb-3">
        <label htmlFor="stud_email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="stud_email" name='stud_email' placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
        <label htmlFor="stud_mob" className="form-label">Student Mobile</label>
        <input type="text" className="form-control" id="stud_mob" name="stud_mob" placeholder="Student Mobile"/>
      </div>
      <div className="mb-3">
        <label htmlFor="stud_mob" className="form-label">Student City</label>
        <input type="text" className="form-control" placeholder="Student City"/>
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Addresss
        </label>
        <textarea className="form-control" id="address" rows="3"></textarea>
      </div>

      <div className='d-flex justify-content-center'>
        <button className="btn btn-dark">Add Student</button>
      </div>
    </div>
    </div>

  )
}

export default AddStudent
