import { useParams } from 'react-router-dom';
import './index.css'
import { useEffect } from 'react';


const JobsItemsDetail = ()=>{
    const {id} = useParams();

    useEffect(()=>{

        const fetchJobsDetails = ()=>{
            const url = `https://apis.ccbp.in/jobs/${id}`
        }

        fetchJobsDetails();

    },[])

    return(
        <>
        <h1>{id}</h1>
        <h1>Jobs Items Details</h1>
        </>
    )
}





export default JobsItemsDetail;