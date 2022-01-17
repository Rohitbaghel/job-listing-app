import React, {useEffect, useState} from 'react'

export const Home=() => {
    const [data, setData]=useState([])
    const appenData=async () => {
        try {
            const res=await fetch('http://localhost:3002/Jobs')
            const dat=await res.json()
            console.log(dat)
              setData(dat)


        } catch (err) {
            
        }
    }
    useEffect(() => {
        appenData()
    },[])
    return (
        <>
            <h1>Available Jobs</h1>
            <div style={{display:'grid',}}>
            {data.map((e) => {
                return (
                    <div style={{ border: '1px solid'}}>
                        <p>Company Name:{e.name}</p>
                        <p> Job-Title:{e.title}</p>
                        <p> salary :{e.salary}</p>
                        <p>Description :{e.description}</p>
                        <p>Location:{e.location}</p>
                        <p>JobType:{e.jobType}</p>
                        <button onClick={(e) => {
                            alert('Job successfully applied')
                        }}>apply for job</button>
                    </div>
                )
            })}
                 </div> 
        </>
    )
}
