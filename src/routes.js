import React from 'react'
import {Link,Route, Routes,BrowserRouter} from 'react-router-dom'  
import Counter from './components/Count'
import Posts from './components/Posts'
import User from './components/User'
 
 
function Routers() {
  return (
    <div>
         <BrowserRouter>  
           <Link to="/">Counter</Link> |
           <Link to="/users">Users</Link> |
           <Link to="/posts">Posts</Link> |

           <Routes>
                <Route path='/' element={<Counter/>}  exact={true} />
                <Route path='/users' element={<User/>}   />
                <Route path='/posts' element={<Posts/>}   />
           </Routes>  
          </BrowserRouter>
        </div>
  )
}

export default Routers