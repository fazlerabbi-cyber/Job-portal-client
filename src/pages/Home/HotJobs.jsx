import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data => {
            setJobs(data)
        })
    }, [])
    return (
        <div>
            <div className='grid gird-cols-1 sm:grid grid-cols-2 lg:grid-cols-3 gap-9 '>
                {
                    jobs.map(job => <HotJobsCard key={job._id} job={job}></HotJobsCard> )
                }
            </div>
        </div>
    );
};

export default HotJobs;