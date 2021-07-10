import React from 'react'
import './menu-item.style.scss'
//import {withRouter } from 'react-router-dom';
const MenuItem = ({title,imageurl,size,history,linkurl,match}) =>(
    <div style={{
      backgroundImage:`url(${imageurl})`
    }}
     className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkurl}`)}>
    <div className='background-image'
    style={{
      backgroundImage:`url(${imageurl})`
    }}
    ></div>
    
    <div className="content">
          <h1 className="title">{title}</h1>
          <p className="subtitle">SHOP NOW</p>
        </div>
      </div>
)

export default  MenuItem;