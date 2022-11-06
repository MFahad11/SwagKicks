import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, listUsers } from "../../redux/action/userAction";
import Loader from "../../components/loader/Loader";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faShoppingBag,
    faTruckFast,
    faSackDollar,
    faPen,
    faTrash,

} from "@fortawesome/free-solid-svg-icons";
import Alert from "../../components/alert/Alert";
const ShowUsers = () => {
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();
  const { loading, error, users } = useSelector(
    (state) => state.userList
  );

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);
  return (<>
    {loading?<Loader/>:error?<Alert variant={error}/>:<>
      <div class="content-2">
        
        <div class="recent-payments">
          <div class="title">
            <h2>Users</h2>
          </div>
          <table class="table  align-middle border">
            <thead style={{backgroundColor:"#151515"}}>
              <tr className="text-light">
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">City</th>
                <th scope="col">Total Orders</th>
                <th scope="col">Active Orders</th>
                <th scope="col">Total Balance</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
            {users.map(({firstName,lastName,role,email,total,totalOrders,activeOrders,city,number,_id},index)=>{
              return(role==="user"&&
              <tr>
                <th scope="row">{index+1}</th>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td >{email}</td>
                <td>{number}</td>
                <td>{city}</td>
                <td>{totalOrders}</td>
                <td>{activeOrders}</td>
                <td>{total}</td>

                <td><button className="btn" onClick={()=>{dispatch(deleteUser(_id))}}><FontAwesomeIcon icon={faTrash}/></button></td>
              </tr>)})}
            </tbody>
          </table>
        </div>
      </div></>} </>);
};

export default ShowUsers;
