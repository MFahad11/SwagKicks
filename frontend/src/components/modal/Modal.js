import React from 'react'
import './Modal.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import LoginSignup from '../loginSignup/LoginSignup';
const Modal = ({id}) => {
    return (
    <div
    className="modal fade"
    id={id}
    tabIndex="-1"
    aria-labelledby={`${id}Label`}
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content bg-secondary border border-warning">
        <div className="modal-header border-0">
          <h5
            className="modal-title text-warning"
            id="exampleModalLabel"
          >
            SwagKicks
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div className="modal-body">
        {(id==="search")?<div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              aria-label="Search..."
              aria-describedby="button-addon2"
            />
            <button
              type="button"
              className="btn btn-warning text-light"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>:<LoginSignup/>}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Modal
