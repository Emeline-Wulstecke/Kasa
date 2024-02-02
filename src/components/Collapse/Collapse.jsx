import './collapse.scss';
import React, { useState } from 'react';
import Collapse from 'react-collapse';
import iconCollapse from '../../assets/images/arrowcollapse.png';


const CollapseItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const iconClass = isOpen ? 'rotate' : 'reverse';
  const textAnim = isOpen ? 'open' : 'closed';
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <li className = "collapse-item" onClick={handleToggle}>
      <h2>{title}</h2>
      <img src={iconCollapse} alt="fleche" className={`icon-collapse ${iconClass}`} />
      <Collapse isOpened={isOpen} className='collapse-text'>
      {content}
    </Collapse>
    </li>  
  </>
  );
};

const CollapseList = ({ items }) => {
  return (
    <article className = "collapse">
      <ul className = "collapse-list">
        {items.map((item, index) => (
          <CollapseItem key={index} title={item.title} content={item.content} />
        ))}
      </ul>
    </article>
  );
};

export default CollapseList;
