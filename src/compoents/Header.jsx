import React, {Component} from 'react'

import Searchbox from './../comman/searchbox';

class Header extends Component{
    
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
