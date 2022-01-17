import React, { useState } from 'react'

export const AddingApp = () => {
  const [job, setJob] = useState({
    name: '',
    title: '',
    salary: '',
    description: '',
    location: '',
    jobType: ''
  })
  // console.log(job)
  const [data, setData] = useState([])
  function submitData (e) {
    const name = e.target.name

    const value = e.target.value
    setJob({ ...job, [name]: value })
    // console.log(job)
  }
const {name,title,description,salary,location,jobType} = job
  const setJobdata = e => {
    e.preventDefault()
    setData([...data, job])
    fetch('http://localhost:3002/Jobs ', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(data)
    })
      console.log(data)
  }

  return (
      <>
          <h1>Create New Jobs</h1>
      <form action='' onSubmit={setJobdata}>
        <input
          type='text'
          name='name'
          placeholder='Company name'
          value={name}
          onChange={submitData}
        />
        <input
          value={title}
          onChange={submitData}
          type='text'
          name='title'
          placeholder='Job Title'
        />
        <input
          value={salary}
          onChange={submitData}
          type='text'
          name='salary'
          placeholder='salary Range'
        />
        <input
          value={description}
          onChange={submitData}
          type='text'
          name='description'
          placeholder='job description'
        />
        <input
          value={location}
          onChange={submitData}
          type='text'
          name='location'
          placeholder='Location'
        />
        <input
          value={jobType}
          onChange={submitData}
          type='text'
          name='jobType'
          placeholder='Job type'
        />
        <input type='submit' value='submit' />
      </form>
    </>
  )
}
