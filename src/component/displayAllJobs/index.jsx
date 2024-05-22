import { FaStar } from "react-icons/fa";
import { FaLocationDot,FaBriefcase  } from "react-icons/fa6";
import './index.css'


const DisplayAllJobs = (props)=>{

    const {jobsItem} = props;


    return(
       <li className="jobs-card-cont text-white">
        <div className='d-flex align-items-center'>
            <img className="card-logo" src={jobsItem.company_logo_url} alt="" />
            <div className="ml-3">
                <h4>{jobsItem.title}</h4>
                <FaStar className="rating-icon"/>
                <span className="ml-2">{jobsItem.rating}</span>
            </div>
            </div>

            <div className="location-empType-ppa-cont d-flex align-items-center justify-content-between mt-2">
                <div>
                    <FaLocationDot/>
                    <span className="ml-1">{jobsItem.location}</span>
                    <FaBriefcase className="ml-3"/>
                    <span className="ml-1">{jobsItem.employment_type}</span>
                </div>
                <h5>{jobsItem.package_per_annum}</h5>
            </div>

            <hr/>

            <h4>Description</h4>

            <p>{jobsItem.job_description}</p>

       </li>
    )
}



export default DisplayAllJobs;