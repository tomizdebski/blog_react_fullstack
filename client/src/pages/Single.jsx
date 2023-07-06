import React from 'react'
import {Link} from 'react-router-dom'
import Delete from '../images/delete.png'
import Edit from '../images/edit.png'
import { Menu } from '../components/Menu'

function Single() {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://picsum.photos/400/400" alt="" />
      
        <div className="user">
          <img src="https://picsum.photos/400/400" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>

          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <Link >
              <img src={Delete} alt="" />
            </Link>
          </div>
        </div>

        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, aspernatur. </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus neque voluptatum debitis magni, aut nobis corporis iusto voluptatibus nemo aliquam officia aspernatur fugit expedita. Odit eius sint natus facere nisi?</p>
        </div>
        <Menu />
      </div>
  )
}

export default Single