
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,
  Routes,
 Route,
 
 
} from "react-router-dom";



function App() {
  return (
   <div>
     <Router >
         
         <Navbar />
        
        
         
     <div >  
       <Routes>
         <Route  path='/' element={<News   key=""  pagesize={10} country="in" category="general"/>}/>
         <Route   path='/business' element={<News  key="business" pagesize={10} country="in" category="business"/>}/>
         <Route   path='/health' element={<News  key="health" pagesize={10} country="in" category="health"/>}/>
         <Route   path='/sports' element={<News  key="sports" pagesize={10} country="in" category="sports"/>}/>
         <Route   path='/entertainment' element={<News  key="entertainment" pagesize={10} country="in" category="entertainment"/>}/>
         <Route   path='/science' element={<News  key="science" pagesize={10} country="in" category="science"/>}/>
         <Route   path='/technology' element={<News  key="technology" pagesize={10} country="in" category="technology"/>}/>
         
       </Routes>
   
      
     </div>
     
     </Router>
    
   </div>
  )
}

export default App;
