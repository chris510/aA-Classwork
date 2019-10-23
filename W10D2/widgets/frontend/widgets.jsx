import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.jsx';
import Tabs from './tabs.jsx';

const t = [
    {title: 'one', content: 'clean your car'},    
    {title: 'two', content: 'wash your kids'},    
    {title: 'three', content: 'eat'},
];

// const t = [{one,two,three}, {clean your car, wash your kids, eat}]

const root = () => {
  return (
    <div>
      <Clock />
      <Tabs data={t} />
    </div> 
  )
};

document.addEventListener('DOMContentLoaded', () => {
  const rootDiv = document.getElementById("root");
  ReactDOM.render(root(),rootDiv);  
});



