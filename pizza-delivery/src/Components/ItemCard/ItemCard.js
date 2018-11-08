import React, { Component } from 'react';

import './ItemCard.css';


export default  class ItemCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
     return <div className="item-card">
         <div>
             item image
         </div>
         <div>
             item details
         </div>
     </div>
    }
}
