import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Header from "../header";
import FilterSection  from "../filterSection";
import DisplayAllJobs from "../displayAllJobs";
import './index.css'

const Jobs = ()=>{
    const token = Cookies.get("jwtToken");

    const [allValues,setValue] = useState({
        jobsList:[],
        empType:[],
        minPakage:"",
        userSearch:""
    });

    useEffect(()=>{

        

        const fetchJobsData = async()=>{

            console.log(allValues.jobsList);

            const url = `https://apis.ccbp.in/jobs?employment_type=${allValues.empType}&minimum_package=${allValues.minPakage}&search=${allValues.userSearch}`;

            const options = {
                method: 'GET',
                headers : {
                    Authorization : `Bearer ${token}`
                }
              }

            const response = await fetch(url,options);
            const jobsData = await response.json();
            
            if(response.ok===true){
                setValue({...allValues,jobsList:jobsData.jobs});
            }

            

        }

        fetchJobsData();
    },[allValues.userSearch,allValues.empType])


    const onChangeUserSearch = (event)=>{
        if(event.key==="Enter"){
            setValue({...allValues,userSearch:event.target.value});
        }
        
    }

    const onChangeEmploymentType = (value,isChecked)=>{
        if(isChecked===true){
            setValue({...allValues,empType:[...allValues.empType,value]});//empType->["Fulltime"],-->[...allValues.emptype]-->"Fulltime",value--->["Fulltime","Partime"]
        }
        else{
            setValue({...allValues,empType:allValues.empType.filter(each=>each!==value)});
        }
        
    }



    return(
        <>
            <Header/>
            <div className="filter-all-jobs-cont">

                        <div className="jobs-filter-section">
                            <FilterSection changeEmpT = {onChangeEmploymentType}/>
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