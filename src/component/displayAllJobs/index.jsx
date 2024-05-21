import './index.css'


const DisplayAllJobs = (props)=>{

    const {jobsItem} = props;


    return(
       <li className="jobs-card-cont text-white">
        <div className='d-flex'>
            <img src={jobsItem.company_logo_url} alt="" />
            <div>
                <h4>{jobsItem.title}</h4>

                <p>{jobsItem.rating}</p>
            </div>
            </div>

       </li>
    )
}



export default DisplayAllJobs;