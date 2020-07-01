import React, { useState } from 'react'
import Header from './compoents/Header';
import axios from 'axios';
import Searchbox from './comman/searchbox';
import User from './compoents/User';

    
const SearchGitUsers = () => {
    const [users, setUsers] = useState([]);
     const searchUsers = query =>{
         axios.get(`http://api.github.com/search/users?q=${query}&page=1&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
         .then(response =>{
             setUsers(response.data.items)
         })
     }
    
    return (
        <>
        <Header/>
        <div className="container-fluid ">
              <div className="row ">
                <div className="col-12 col-md-12">
                <Searchbox  searchUsers={searchUsers}/> 
                </div>
              </div>
                <div className="row">
                
                     <User users={users}/>
                </div>
        </div>
        </>
    )
}

export default SearchGitUsers

