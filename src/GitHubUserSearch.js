import React, { useState } from 'react'
import Header from './compoents/Header';
import axios from 'axios';
import Searchbox from './comman/searchbox';
import User from './compoents/User';

    
const SearchGitUsers = () => {
    const [users, setUsers] = useState([]);
     const searchUsers = query =>{
         axios.get(`https://api.github.com/search/users?q=${query}`)
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

