import React from 'react'
import ProductGrid from "../productgrid/ProductGrid";
import Filter_Search from '../filter_search/Filter_Search';
const ProductDisplay = ({page}) => {
  return (
    <>
            <div className="container p-0 mt-5">
        <div className="row gx-5">
          <div className="col-3">
          <Filter_Search/>
          </div>
          <div className="col m-0 p-0" style={{ background: "#151515" }}>
            <ProductGrid page={page}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDisplay
