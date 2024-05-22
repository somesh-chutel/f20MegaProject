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


    const onChangeUserSearch = (event)=>{
        console.log(event.target.value);
        console.log(event.key);
    }



    return(
        <>
            <Header/>
            <div className="filter-all-jobs-cont">

                        <div className="jobs-filter-section">
                            <FilterSection/>
                        </div>
                        <div className="jobs-all-jobs-section">
                            <input onKeyDown={onChangeUserSearch} type="search" className="form-control w-75 search-in"/>
                            <br />
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