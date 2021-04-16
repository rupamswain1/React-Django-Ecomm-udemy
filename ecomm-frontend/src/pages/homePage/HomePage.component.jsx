import React from 'react';
import ProductsContainer from '../../components/productContainer/ProductsContainer.component'

import './HomePage.style.scss';

const HomePage=()=>{
    return(
        <div className="homePageContainer">
            <ProductsContainer key={'homepage'}/>
        </div>
    );
}

export default HomePage;