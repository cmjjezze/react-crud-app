import React from "react";
import { Link } from "react-router-dom";

const ContactDetail = (props) => {
  const { name, email, contact, location, date } = props.location.state.contact;
    
  console.log(props);
  return (
    <div className="container">
      <br />
      <h2>View Contact</h2>
      <div className="col-md-6">
        <label className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          value={name}
          readOnly
        />
        <br/>
        <label className="form-label">
          Email Address
        </label>
        <input
          type="text"
          className="form-control"
          value={email}
          readOnly
        />
        <br/>
        <label className="form-label">
          Contact Number
        </label>
        <input
          type="text"
          className="form-control"
          value={contact}
          readOnly
        />
        <br/>
        <label className="form-label">
          Location
        </label>
        <input
          type="text"
          className="form-control"
          value={location}
          readOnly
        />
        <br/>
        <label className="form-label">
          Registered Date
        </label>
        <input
          type="text"
          className="form-control"
          value={date}
          readOnly
        />
      </div>
      <br />
      <Link to={`/`}><button type="submit" className="btn btn-success">
        Back
      </button></Link>
      
    </div>
  );
};

export default ContactDetail;
