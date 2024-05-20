import { useEffect } from "react";
import Cookies from "js-cookie";
import Header from "../header";

const Jobs = ()=>{
    const token = Cookies.get("jwtToken");

    console.log(token);

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
            console.log(jobsData);



        }

        fetchJobsData();
    })



    return(
        <>
            <Header/>
        
        </>
    )
}



export default Jobs;