import React from 'react';
import './businessList.css';
import Business from '../business/business.js';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          this.prop.businesses.map(business => {
            return (
              <Business business={business} />;
            )
          })
        }
      </div>
    )
  }
}

export default BusinessList;
