import React from 'react';

import {SubHeading, MenuItem} from '../../components'
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu' >
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu-menu_items">     
          {data.wines.map((wine, index) => {
            return (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            )
          })}
        </div>
      </div>

      <div className="app__specialMenu-menu_image">
        <img src={images.menu} alt="menu" />
      </div>
      
      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Cocktail</p>
        <div className="app__specialMenu-menu_items">
          {data.cocktails.map((cocktail, index) => {
            return (
              <MenuItem key={cocktail.title + index} price={cocktail.price} title={cocktail.title} tags={cocktail.tags} />
            )
          })}
        </div>
      </div>

    </div>
      <div style={{marginTop: '15px'}}>
        <button type='button' className='custom__button'>View More</button>
      </div>
  </div>
);

export default SpecialMenu;
