import React from 'react'

const MenuCard = ({menuData}) => {
  return (
    <div>
      {
        menuData.map((ele)=>{
            const {albumId,id,title,url,thumbnailUrl}=ele
            return(
                <>
                <div className="information" key={id} style={{border:"1px solid black"}}>

                    <h1>{albumId}</h1>
                    <hr />
                    <h2>{title}</h2>
                    <hr />
                    <img src={url} alt="" />
                    <hr />
                    <img src={thumbnailUrl} alt="" />
                   
                
                </div>
                </>
            )
        })
      }
    </div>
  )
}

export default MenuCard
