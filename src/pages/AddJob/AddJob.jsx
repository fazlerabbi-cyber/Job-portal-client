import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/UseAuth';
import { Navigate } from 'react-router-dom';

const AddJob = () => {

    const {user } = useAuth()

    const AddJob = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries())
        console.log(initialData);

        const { min, max, currency, ...newJob } = initialData
        console.log(newJob);
        newJob.salaryRange = {min, max, currency}
        newJob.requirements = newJob.requirements
        newJob.responsibilities = newJob.responsibilities
        console.log(newJob);

       fetch('http://localhost:5000/jobs', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newJob)

       })
       .then(res => res.json())
       .then(data => {
        if(data.insertedId) {
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Job has been added",
                      showConfirmButton: false,
                      timer: 1500
                    });
                    Navigate('/myPostedJobs')
                  }
        
       })



    }





    return (
        <div>
            <h3>post a new job </h3>

            <form onSubmit={AddJob} className="card-body">
                {/* job title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Job title" className="input input-bordered" required />
                </div>
                {/* job location  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input type="text" name='location' placeholder="job Location" className="input input-bordered" required />

                </div>
                {/* job type  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <select className="select select-ghost w-full max-w-xs">
                        <option disabled >Pick a job type</option>
                        <option>Full-time</option>
                        <option>Intern</option>
                        <option>Part-Time</option>
                    </select>
                </div>
                {/* job field  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Field</span>
                    </label>
                    <select className="select select-ghost w-full max-w-xs">
                        <option disabled >Pick a job field</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Teaching</option>
                    </select>
                </div>
                {/* salary range */}

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input type="text" name='min' placeholder="Min" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Max</span>
                        </label>
                        <input type="text" name='max' placeholder="Max" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Currency</span>
                        </label>
                        <select name='currency' className="select select-ghost w-full max-w-xs">
                            <option disabled>Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                        </select>
                    </div>
                </div>

                {/* job description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea name='description' className="textarea textarea-bordered" placeholder="Job description"></textarea>
                </div>

                {/* company Name  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company</span>
                    </label>
                    <input type="text" name='company' placeholder="company Name" className="input input-bordered" required />
                </div>

                {/* job requirements */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">job requirements</span>
                    </label>
                    <textarea name='requirements' className="textarea textarea-bordered" placeholder="job requirements"></textarea>
                </div>

                {/* responsibilities */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">job  responsibilities</span>
                    </label>
                    <textarea name=' responsibilities' className="textarea textarea-bordered" placeholder=" responsibilities"></textarea>
                </div>


                {/* HR name  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR name</span>
                    </label>
                    <input type="text" name='hr_name' placeholder="HR name" className="input input-bordered" required />
                </div>

                {/* HR email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR email</span>
                    </label>
                    <input type="text" defaultValue={user?.email} name='hr_email' placeholder="HR email" className="input input-bordered" required />
                </div>
                {/* application deadline */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <input type="date"  name='applicationDeadline' placeholder="Deadline" className="input input-bordered" required />
                </div>

                {/* company logo url  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">company logo ur</span>
                    </label>
                    <input type="text" name='company_log' placeholder="company logo ur" className="input input-bordered" required />
                </div>


                {/* submit button */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;