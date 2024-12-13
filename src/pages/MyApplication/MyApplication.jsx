import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/UseAuth';

const MyApplication = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);  // Add loading state
    const [error, setError] = useState(null); // Add error state

    useEffect(() => {
        if (user && user.email) {
            fetch(`http://localhost:5000/job-application?email=${user.email}`)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('Failed to fetch jobs');
                    }
                    return res.json();
                })
                .then((data) => {
                    setJobs(data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                });
        }
    }, [user.email]);

    // Conditional rendering based on loading or error state
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h3>You have {jobs.length} </h3>
            {/* You can also render a list of jobs if you need */}
            {/* {jobs.map(job => <p key={job.id}>{job.title}</p>)} */}
        </div>
    );
};

export default MyApplication;
