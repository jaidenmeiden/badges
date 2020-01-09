import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName='Jaiden'
                lastName='Riaño'
                twitter='jaidenmeiden'
                jobTitle='Industrial Engineer'
                email='jaidenmeiden@gmail.com'
                avatarUrl="https://s.gravatar.com/avatar/eb283f6be60bc6df15812a9ad7e982e2?s=80"
              />
            </div>

            <div className="col-6">
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
