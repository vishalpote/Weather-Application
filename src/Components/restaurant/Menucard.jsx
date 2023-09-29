import React from 'react'
// import Nvabar from './Nvabar'
import Menu from './Menu'

const uniuqList=[...new Set(Menu.map((curElem)=>{
    return curElem.catagory
}
)
)
]
console.log(uniuqList)
const Menucard = ({MenuData}) => {
    // console.log(MenuData)
    return (
        <>
    {/* <Nvabar></Nvabar> */}
    <section className='main-card'>
        
    {MenuData.map((curElem)=>{
        const {id,name,catagory,image}=curElem;
        return(
            <>
       <div className="card" style={{width: "20rem"}} key={id}>
  <div className="card-body">
    {/* <span className="card-number" style={{width:"20px"}}>1</span> */}
    <h5 className="card-author " >{catagory}</h5>
    <h2 className='food-name'>{name}</h2><br />
    <p className="card-text">Some quick example text to build on the card title and make
     up the bulk of the card's content.</p>
     <hr />
     {/* <hr /><button className='btn btn-success'>Read More</button> */}
  <img src={image} className="card-img-top" alt="..."/>
  <button className='btn btn-danger'>Order Now</button>
  </div>
</div>
    </>

        )
    })}
            </section>
    </>
      )
}

export default Menucard
