import React, {Fragment} from 'react';

const MenuSection = ({
  type,
  lang
}) => (
  <Fragment>
    <h2>{type.label}</h2>
    <ul>
      {type.items.map(item => <li>{item.id}<p>{item.description[lang]}</p></li>)}
    </ul>
  </Fragment>
  
)

export default MenuSection;