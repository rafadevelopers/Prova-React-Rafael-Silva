import React from 'react'

import imgprofile from '../../../assets/imgs/profileimg.jpg'
import imglogo from '../../../assets/imgs/logo.png'




function Sidebar(props) {

  return(
      <>
      <div class="se-pre-con"></div>
<section>
  
  <div class="sidebar-menu sticky-sidebar-menu">

    
    <div class="logo">
      <h1><a href="index.html">Collective</a></h1>
    </div>

  
   
    <div class="logo">
      <a href="index.html">
        <img src="image-path" alt="Your logo" title="Your logo" class="img-fluid" style={{height:"35px;"}} />
      </a>
    </div>
   

    <div class="logo-icon text-center">
      <a href="index.html" title="logo"><img src={imglogo} alt="logo-icon"/> </a>
    </div>
    

    <div class="sidebar-menu-inner">

     
      <ul class="nav nav-pills nav-stacked custom-nav">
        <li class="active"><a href="index.html"><i class="fa fa-tachometer"></i><span> Dashboard</span></a>
        </li>
        <li class="menu-list">
          <a href="#"><i class="fa fa-cogs"></i>
            <span>Elements <i class="lnr lnr-chevron-right"></i></span></a>
          <ul class="sub-menu-list">
            <li><a href="carousels.html">Carousels</a> </li>
            <li><a href="cards.html">Default cards</a> </li>
            <li><a href="people.html">People cards</a></li>
          </ul>
        </li>
        <li><a href="pricing.html"><i class="fa fa-table"></i> <span>Pricing tables</span></a></li>
        <li><a href="blocks.html"><i class="fa fa-th"></i> <span>Content blocks</span></a></li>
        <li><a href="forms.html"><i class="fa fa-file-text"></i> <span>Forms</span></a></li>
      </ul>
     
     
      <a class="toggle-btn">
        <i class="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></i>
        <i class="fa fa-angle-double-right menu-collapsed__right"></i>
      </a>
     
    </div>
  </div>
  
 </section>

      </>
  )
}

export default Sidebar