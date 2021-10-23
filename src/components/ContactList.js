import React from "react";
import ContactCard from "./ContactView";

const ContactList = (props) => {
  console.log(props);

  const deleteContactHandler = (id) => {
      props.getContactId(id);
  }

 
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard contact = {contact} clickHandler={deleteContactHandler} key={contact.id}/>
    );
  });

  return (
    <div className="container">
      <table className="table table-hover">
        <thead>
          <tr>
            {/* <th scope="col">ID</th> */}
            <th scope="col">Full Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Location</th>
            <th scope="col">Registered Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{renderContactList}</tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="/">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ContactList;
