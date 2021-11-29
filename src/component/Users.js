import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUsers,deleteUser} from '../store/actions/usersAction'

 class Users extends Component {

    componentDidMount(){        
        this.props.getUsers();        
    }

    removeData(id) {
      this.props.deleteUser(id);
      window.location.reload();
       
    }

    render() {
        this.props.getUsers();  
        const {users} = this.props.users

        const listItems = users.map((u) => 
        <li key={u.id}>{u.name} {u.surname} &nbsp;
        <button className='button' 
        onClick={() => this.removeData(u.id)}>Delete</button></li>);
        
        return (            
            <div>
            {listItems }
            </div>
          );
        }    
}
const mapStateToProps  = (state) => ({users:state.users})
export default connect(mapStateToProps, {getUsers,deleteUser})(Users)