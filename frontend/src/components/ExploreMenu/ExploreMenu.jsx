import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Sauce Collection</h1>
      <p className='explore-menu-text'>Browse through our exceptional range of artisan sauces, from bold hot sauces to savory BBQ glazes and exotic Asian flavors. Each sauce is handcrafted with premium ingredients to enhance your culinary creations. Whether you're grilling, marinating, or dipping, find the perfect sauce to elevate your dishes to new heights.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
              <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
              </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
