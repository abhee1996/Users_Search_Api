import React, {Component} from 'react'

import Searchbox from './../comman/searchbox';

class Header extends Component{
    state ={
        users: [],
        searchQuery :"",
        selectedUser : null,
        currentPage : 1,
    }
    handleUserSelect = user =>{
        this.setState({ selectedUser : user,searchQuery: "" , currentPage : 1})
    }
    handleSearch = query =>{
        this.setState({ searchQuery :query ,selectedUser : null ,currentPage:1})
        console.log("searchQuery: ",query)
    }
    render(){
        
        return (
            <>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <div>
                <a className="navbar-brand">GitHub User Search</a>
                <p>Browse users and their profiles via the GitHub API</p>
                </div>
               <Searchbox />
            </nav>
            </>
        )
    }
}

export default Header
