import {Routes,Route} from 'react-router-dom';
import Home from './component/home';
import Login from './component/login';
import Jobs from './component/jobs';
import NotFound from './component/notFound';
import ProtectedRout from './component/protectedRoute';


const App = ()=>(

    <Routes>
            <Route path='/' element={<ProtectedRout Component={Home}/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/jobs' element={<ProtectedRout Component={Jobs}/>}></Route>
            <Route path='/*' element={<NotFound/>}></Route>

    </Routes>

)





export default App;
