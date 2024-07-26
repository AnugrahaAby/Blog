import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Blog from './Integration/Blog';
import EditBlog from './Integration/editBlog' ;

function App() {
  return (
    
    <Routes>
  
    <Route path="/" element={<Blog />} />
    <Route path="/Integration/AddBlog" element={<EditBlog />} />
    <Route path="/Integration/EditBlog/:BlogId" element={<EditBlog />} />
   
        
      </Routes>
     
     
  );
}

export default App;
