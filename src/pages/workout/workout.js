import React from 'react';
import './workout.scss';
import ContainerIcon from '../../componentes/container-icon/container-icon'
import Header from '../../componentes/header/header'
import Nav from '../../componentes/nav/nav'
import Section from '../../componentes/section/section'


function Workout() {
  return (
    <div className="workout" style= {{height: '100%'}}>
     <ContainerIcon/>
     <Header/>
     <Nav/>
     <Section/>
    </div>
  );
}

export default Workout;
