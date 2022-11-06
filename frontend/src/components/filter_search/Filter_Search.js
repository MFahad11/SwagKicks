import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useDispatch,useSelector } from "react-redux";
import { sortAscProduct, sortDescProduct } from "../../redux/action/productAction";
const Filter_Search = () => {
  const dispatch=useDispatch()
  return (
    <>
      <div className="p-2 text-light" style={{ background: "#151515" }}>

          <h4 className="text-center mb-3">Sort by</h4>
        <div className="mt-2">
          <div className="card card-body" style={{ background: "#151515" }}>
            <div
              className="btn-group border-none"
              role="group"
              aria-label="Default button group"
            >
              <button type="button" className="btn border btn-warning text-light" onClick={()=>{dispatch(sortAscProduct())}}>
                Price <FontAwesomeIcon icon={faArrowUp} />
              </button>
              <button type="button" className="btn border btn-warning text-light" onClick={()=>{dispatch(sortDescProduct())}}>
                Price <FontAwesomeIcon icon={faArrowDown} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Filter_Search;
