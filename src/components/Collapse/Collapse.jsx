import './collapse.scss';
import React, { useState } from 'react';
import Collapse from 'react-collapse';
import iconCollapse from '../../assets/images/arrowcollapse.png';

const CollapseItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const iconClass = isOpen ? 'rotate' : 'reverse'; 
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="collapse-item" onClick={handleToggle}>
      <h2>{title}</h2>
      <img src={iconCollapse} alt="fleche" className={`icon-collapse ${iconClass}`} />
      <Collapse isOpened={isOpen} className='collapse-text'>
      {title === 'Équipements' ? (
          <ul>
            {Array.isArray(content) ? (
              content.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            ) : (
              <li>{content}</li>
            )}
          </ul>
        ) : (
          content
        )}
      </Collapse>
    </li>
  );
};

const CollapseList = ({ items, housingClass, ulHousingClass }) => {
  return (
    <article className={`collapse ${housingClass}`}>
      <ul className={`collapse-list ${ulHousingClass}`}>
        {items.map((item, index) => (
          <CollapseItem key={index} title={item.title} content={item.content} />
        ))}
      </ul>
    </article>
  );
};

export default CollapseList;
