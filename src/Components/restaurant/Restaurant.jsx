import React, { useState } from 'react'
import "./Restaurant.css"
import Menucard from './Menucard'
import Menu from './Menu'
// import Nvabar from './Nvabar'
const Restaurant = () => {
    const [MenuData,setMenuData]=useState(Menu)
const filterItem=(catagory)=>{
    const updatedList=Menu.filter((curElem)=>{
        return curElem.catagory===catagory
    })
    setMenuData(updatedList)
}
  return (
    <>
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary lg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/" >FOODIES</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
          <button class="nav-link" href="/" onClick={()=>setMenuData(Menu)}>All</button>
        </li>
      <li class="nav-item">
          <button class="nav-link active" aria-current="page" href="/" onClick={()=>filterItem("breakfast")} >Breakfast</button>
        </li>
        <li class="nav-item">
          <button class="nav-link active" aria-current="page" href="/" onClick={()=>filterItem("lunch")} >Lunch</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" href="/" onClick={()=>filterItem("Dinner")}>Dinner</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" href="/" onClick={()=>filterItem("Special-Thali")}>Special</button>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
    {/* <Nvabar filterItem={filterItem}></Nvabar> */}
    <Menucard MenuData={MenuData}/>
    </>
  )
}

export default Restaurant
