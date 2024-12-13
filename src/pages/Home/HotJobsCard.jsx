import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const HotJobsCard = ({job}) => {
    const {title, _id, company, company_logo, requirements,
         description, location, salaryRange} = job
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
        <div>
        <figure>
          <img
          className='w-12'
            src={company_logo}
            alt="Shoes" />
            <div>
                <h2 className='text-2xl'>{company}</h2>
                <p className='flex gap-2 items-center'> <FaMapMarkerAlt />{location}</p>
            </div>
        </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="badge badge-secondary">NEW</div>
          <p>{description}</p>
          {/* <div className='flex gap-4 flex-wrap '>
          
                {requirements.map((skill,index) => <p  key={index} className='border rounded-lg text-center p-2 hover:text-blue-300'>{skill}</p>)}
                
          </div> */}
          <div className="card-actions justify-end items-center my-2">
            <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
           <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Apply Now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default HotJobsCard;