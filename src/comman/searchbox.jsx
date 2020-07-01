import React,{useState} from 'react'
import { Form } from 'semantic-ui-react'

const Searchbox = ({searchUsers,value,onChange}) => {
    const [query , setQuery] = useState("");
    const search = e =>{
        setQuery(e.target.value);
    }
    return (
        
        <Form onSubmit={e =>{searchUsers(query)}}>
            <Form.Group>
            
                <Form.Input type="text"
                name="query"
                className="form-control     "
                placeholder="Search User"
                value={value}
                onChange={search}/>
                
                <Form.Button  type="submit" content="search"/>
                
            </Form.Group>
        </Form>
    )
}
export default Searchbox
