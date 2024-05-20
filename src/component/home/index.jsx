import { Link } from 'react-router-dom';
import Header from '../header';
import './index.css'


const Home = ()=>(

    <div className='home-cont'>
        <Header/>
        <div className='home-content-cont'>
            <h1 className='home-heading'>Find The Job That Fits Your Life</h1>
            <p>Millions of people are searching for jobs, sallry, information, company reviews.
                Find the jobs that firts your ability and your potential</p>
            <Link to="/jobs">
            <button className='btn btn-primary home-btn'>Find Jobs</button>
            </Link>

        </div>

    </div>
)




export default Home;