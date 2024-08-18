import React from 'react'
import './Sidebar.css'
import {Link} from "react-router-dom"
import ci from '../../assets/ci.jpeg'
import product_list_icon from '../../assets/product_list.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/admin/addproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={ci} alt="" />
                <p>Add Cake</p>
            </div>
        </Link>
        <Link to={'/admin//listproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={product_list_icon} alt="" />
                <p>Cake List</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar