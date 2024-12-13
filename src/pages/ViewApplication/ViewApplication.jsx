import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewApplication = () => {
    const application = useLoaderData()
    const handleStatusUpdate = (e, id)=> {
        console.log(e.target.value, id);
        const data = {
            status : e.target.value 
        }

        fetch(`http://localhost:5000/job-applications/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                       Swal.fire({
                         position: "top-end",
                         icon: "success",
                         title: "Status has been updated",
                         showConfirmButton: false,
                         timer: 1500
                       });
                       navigate('/myApplication')
                     }
        })
        

    }

    return (
        <div>
            <h2>view application {application.length} </h2>


            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Status</th>
        <th>Update Status</th>
      </tr>
    </thead>
    <tbody>
     
       {
        application.map((app, index) =>  <tr key={app._id}>
            <th>{index + 1 }</th>
            <td>{app.applicant_email}</td>
            <td>Quality Control Specialist</td>
            <td>
            <select
            onClick={ (e) => handleStatusUpdate(e, app._id)}
             defaultValue={app.status || 'Change status'} 
            className="select select-bordered select-xs w-full max-w-xs">
  <option disabled>Change status</option>
  <option>Under Review</option>
  <option>Set Interview</option>
  <option>Rejected</option>
</select>
            </td>
          </tr>)
       }

    </tbody>
  </table>
</div>

        </div>
    );
};

export default ViewApplication;