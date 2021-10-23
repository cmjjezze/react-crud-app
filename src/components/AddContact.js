import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    contact: "",
    location: "",
    date: "",
  };
  add = (e) => {
    e.preventDefault();
    //required field validation
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.contact === "" ||
      this.state.location === "" ||
      this.state.date === ""
    ) {
      alert("All the fields are required!");
      return;
    }
    //pass object to app.js
    this.props.AddContactHandler(this.state);

    //clear object
    this.setState({
      name: "",
      email: "",
      contact: "",
      location: "",
      date: "",
    });
    console.log(this.props);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <br />
        <h2>Add Contact</h2>
        <form onSubmit={this.add}>
          {/* fullname */}
          <div className="form-group col-md-6">
            <label for="inputFullName">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="inputFullName"
              placeholder="Last Name, First Name Middle Name"
              maxLength="30"
              required
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <br />
          {/* email */}
          <div className="form-group col-md-6">
            <label for="inputEmail">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="example@email.com"
              maxLength="40"
              required
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <br />
          {/* contact */}
          <div className="form-group col-md-6">
            <label for="inputContact">Contact Number</label>
            <input
              type="tel"
              className="form-control"
              id="inputContact"
              placeholder="999999999"
              maxLength="11"
              pattern="[0-9]{11}"
              required
              value={this.state.contact}
              onChange={(e) => this.setState({ contact: e.target.value })}
            />
          </div>
          <br />
          {/* location */}
          <div className="form-group col-md-6">
            <label for="inputState" className="form-label">
              Location
            </label>
            <select
              id="inputState"
              className="form-select"
              required
              value={this.state.location}
              onChange={(e) => this.setState({ location: e.target.value })}
            >
              <option>Select Location</option>
              <option>Manila</option>
              <option>Cebu</option>
            </select>
          </div>
          <br />
          {/* Date */}
          <div className="form-group col-md-6">
            <label for="inputDate">Registered Date</label>
            <input
              type="date"
              className="form-control"
              id="inputDate"
              required
              value={this.state.date}
              onChange={(e) => this.setState({ date: e.target.value })}
            />
          </div>
          <br />
          {/* Submit */}
          <button type="submit" className="btn btn-success">
            Add Contact
          </button>
          {/* <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-success">
              Add Contact
            </button>
            <button type="button" className="btn btn-secondary">
              Cancel
            </button>
          </div> */}
        </form>
      </div>
    );
  }
}

// const AddContact = () => {

//   return (
//     <div className="container">
//       <br />
//       <form>
//         {/* fullname */}
//         <div className="form-group col-md-6">
//           <label for="inputFullName">Full Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="inputFullName"
//             placeholder="Last Name, First Name Middle Name"
//             maxLength="30"
//             required
//           />
//         </div>
//         <br />
//         {/* email */}
//         <div className="form-group col-md-6">
//           <label for="inputEmail">Email Address</label>
//           <input
//             type="email"
//             className="form-control"
//             id="inputEmail"
//             placeholder="example@email.com"
//             maxLength="40"
//             required
//           />
//         </div>
//         <br />
//         {/* contact */}
//         <div className="form-group col-md-6">
//           <label for="inputContact">Contact Number</label>
//           <input
//             type="tel"
//             className="form-control"
//             id="inputContact"
//             placeholder="999999999"
//             maxLength="11"
//             pattern="[0-9]{11}"
//             required
//           />
//         </div>
//         <br />
//         {/* location */}
//         <div className="form-group col-md-6">
//           <label for="inputState" className="form-label">
//             Location
//           </label>
//           <select id="inputState" className="form-select" required>
//             <option selected>Select Location</option>
//             <option>Manila</option>
//             <option>Cebu</option>
//           </select>
//         </div>
//         <br />
//         {/* Date */}
//         <div className="form-group col-md-6">
//           <label for="inputDate">Registered Date</label>
//           <input type="date" className="form-control" id="inputDate" required />
//         </div>
//         <br />
//         {/* Submit */}
//         <button type="submit" className="btn btn-success">
//           Add Contact
//         </button>
//       </form>
//     </div>
//   );
// };

// className AddContact extends React.Component {
//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }

export default AddContact;
