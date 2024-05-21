import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Header from "../header";
import FilterSection  from "../filterSection";
import DisplayAllJobs from "../displayAllJobs";
import './index.css'

const Jobs = ()=>{
    const token = Cookies.get("jwtToken");

    const [allValues,setValue] = useState({
        jobsList:[]
    });

    useEffect(()=>{

        

        const fetchJobsData = async()=>{

            const url = "https://apis.ccbp.in/jobs";

            const options = {
                method: 'GET',
                headers : {
                    Authorization : `Bearer ${token}`
                }
              }

            const response = await fetch(url,options);
            const jobsData = await response.json();

            console.log(response);
            
            if(response.ok===true){
                setValue({...allValues,jobsList:jobsData.jobs});
            }

            

        }

        fetchJobsData();
    },[])



    return(
        <>
            <Header/>
            <div className="row filter-all-jobs-cont">

                        <div className="col-5 border border-primary jobs-filter-section">
                            <FilterSection/>
                        </div>
                        <div className="col-7 border border-danger jobs-all-jobs-section">
                            
                            <ul>
                                {allValues.jobsList.map(each=>
                                    <DisplayAllJobs jobsItem={each} key={each.id}/>
                                )}
                            </ul>
                            
                        </div>
            </div>
        
        </>
    )
}



export default Jobs;