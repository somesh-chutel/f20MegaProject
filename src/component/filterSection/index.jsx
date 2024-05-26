import { useEffect } from 'react'
import './index.css'
import { useState } from 'react'
import Cookies from 'js-cookie';

// These are the lists used in the application. You can move them to any component needed.
const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const FilterSection = (props) => {
const [allValues,setvalue] = useState({
    profileDetails:{}
})

const {changeEmpT} = props;


const token = Cookies.get("jwtToken");


  useEffect(()=>{

    const getProfileDetails = async () => {

      const apiUrl = 'https://apis.ccbp.in/profile'
      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'GET',
      }
      const response = await fetch(apiUrl, options)
      const data = await response.json()
      console.log(data)
      if (response.ok === true) {
        setvalue({...allValues,profileDetails:data.profile_details})
      }
    }
    getProfileDetails();

  },[])


  const onChangeEmpType = (event)=>{
      changeEmpT(event.target.value,event.target.checked);
      
  }

 

  const renderEmploymentTypesList = () => {
    

    
    return employmentTypesList.map(eachType => {

      return (
        <li className="fliters-list-item" key={eachType.employmentTypeId}>
          <input
            type="checkbox"
            className="checkbox-input"
            value={eachType.employmentTypeId}
            id={eachType.employmentTypeId}
            onChange={onChangeEmpType}
          />
          <label htmlFor={eachType.employmentTypeId} className="filter-label">
            {eachType.label}
          </label>
        </li>
      )
    })
  }

  const renderEmploymentTypes = () => (
    <>
      <h1 className="filter-heading">Type of Employment</h1>
      <ul className="filters-list">{renderEmploymentTypesList()}</ul>
    </>
  )

  const renderSalaryRangesList = () => {

    return salaryRangesList.map(eachRange => {


      return (
        <li className="fliters-list-item" key={eachRange.salaryRangeId}>
          <input
            type="radio"
            className="checkbox-input"
            value={eachRange.salaryRangeId}
            name="salary ranges"
          />
          <label htmlFor={eachRange.salaryRangeId} className="filter-label">
            {eachRange.label}
          </label>
        </li>
      )
    })
  }

  const renderSalaryRangesTypes = () => (
    <>
      <h1 className="filter-heading">Salary Range</h1>
      <ul className="filters-list">{renderSalaryRangesList()}</ul>
    </>
  )

  const renderProfileDetails = ()=>(
    <div className="profile-details-container">
        <img src={allValues.profileDetails.profile_image_url} alt="profile" className="profile-image" />
        <h1 className="profile-name">{allValues.profileDetails.name}</h1>
        <p className="profile-bio">{allValues.profileDetails.short_bio}</p>
      </div>
  )

  return (
    <div className="filters-group-container">
      {renderProfileDetails()}
      {renderEmploymentTypes()}
      <hr className="separator" />
      {renderSalaryRangesTypes()}
    </div>
  )
}

export default FilterSection;