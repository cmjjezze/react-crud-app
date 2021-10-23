import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  console.log(props);
  const { id, name, email, contact, location, date } = props.contact;
  return (
    <tr>
      {/* <th>{id}</th> */}
      <td>{name}</td>
      <td>{email}</td>
      <td>{contact}</td>
      <td>{location}</td>
      <td>{date}</td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <Link
            to={{
              pathname: `/contact/${id}`,
              state: { contact: props.contact }
            }}
          >
            <button type="button" className="btn btn-secondary">
              View
            </button>
          </Link>
          <Link to={{
              pathname: `/update`,
              state: { contact: props.contact }
            }}>
          <button type="button" className="btn btn-secondary">
            Update
          </button>
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.clickHandler(id)}
          >
            Delete
          </button>
          <Link
            to={{
              pathname: `/contactdelete/${id}`,
              state: { contact: props.contact }
            }}
          >
          <button
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default ContactCard;
