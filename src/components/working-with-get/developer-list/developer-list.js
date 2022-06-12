/* eslint-disable no-tabs */
import React from 'react';
import './developer-list.css';
import picture from '../../../images/Ellipse_2.png';

const temporaryItems = [
  {
    id: 1,
    title: 'Salvador Stewart Flynn Thomas Salva Salve...',
    text: `Leading specialist of the department of cent... 
					 frontend_develop@gmail.com`,
    phone: '+38 (098) 278 44 24',
  },
  {
    id: 2,
    title: 'Salvador Stewart Flynn Thomas Salva Salve...',
    text: `Leading specialist of the department of cent... 
					 frontend_develop@gmail.com`,
    phone: '+38 (098) 278 44 24',
  },
  {
    id: 3,
    title: 'Salvador Stewart Flynn Thomas Salva Salve...',
    text: `Leading specialist of the department of cent... 
					 frontend_develop@gmail.com`,
    phone: '+38 (098) 278 44 24',
  },
  {
    id: 4,
    title: 'Salvador Stewart Flynn Thomas Salva Salve...',
    text: `Leading specialist of the department of cent... 
					 frontend_develop@gmail.com`,
    phone: '+38 (098) 278 44 24',
  },
  {
    id: 5,
    title: 'Salvador Stewart Flynn Thomas Salva Salve...',
    text: `Leading specialist of the department of cent... 
					 frontend_develop@gmail.com`,
    phone: '+38 (098) 278 44 24',
  },
  {
    id: 6,
    title: 'Salvador Stewart Flynn Thomas Salva Salve...',
    text: `Leading specialist of the department of cent... 
					 frontend_develop@gmail.com`,
    phone: '+38 (098) 278 44 24',
  },
];

function DeveloperList() {
  const item = temporaryItems.map(({
    id, title, text, phone,
  }) => (
    <div key={id} className="item-block">
      <img src={picture} className="item-picture" alt="some" />
      <div className="item-title">{title}</div>
      <div className="item-text">{text}</div>
      <div className="item-phone">{phone}</div>
    </div>
  ));

  return <div className="developer-list">{item}</div>;
}

export default DeveloperList;
