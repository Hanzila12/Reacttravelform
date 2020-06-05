import React from 'react';
import { throwStatement } from '@babel/types';

class App extends React.Component {
 constructor() {
  super()
  this.state = {
   firtName: "",
   lastName: "",
   Age: "",
   gender: "",
   destination: "",
   isVegan: false,
   isKoshar: false,
   isLactoseFree: false


  }
  this.handleChange = this.handleChange.bind(this)
 }

 handleChange(event) {
  const { name, value, type, checked } = event.target
  type === "checkbox" ?
   this.setState({
    [name]: checked

   }) :
   this.setState({
    [name]: value
   })

 }

 render() {
  return (
   <div>
    <main>
     <form>
      <input
       name="firstName"
       value={this.state.firstName}
       onChange={this.handleChange}
       placeholder="First Name"
      />
      <br />
      <input
       name="lastName"
       value={this.state.lastName}
       onChange={this.handleChange}
       placeholder="Last Name" />
      <br />
      <input
       name="Age"
       value={this.state.Age}
       onChange={this.handleChange}
       placeholder="Age" />
      <br />

      <label>
       <input
        type="radio"
        name="gender"
        value="Male"
        checked={this.state.gender === "Male"}
        onChange={this.handleChange}

       />Male
       </label>

      <label>
       <input
        type="radio"
        name="gender"
        value="Female"
        checked={this.state.gender === "Female"}
        onChange={this.handleChange}

       />Female
       </label>

      <br />

      <select
       value={this.state.destination}
       name="destination"
       onChange={this.handleChange}>
       <option>--Please Choose Destination--</option>
       <option value="kumrat">Kumrat</option>
       <option value="gilgit">Gilgit</option>
       <option value="kashmir">Kashmir</option>
       <option value="hunza">Hunza</option>
      </select>

      <br />

      <label>
       <input
        type="checkbox"
        name="isVegan"
        onChange={this.handleChange}
        checked={this.state.isVegan}
       />Vegan?
       </label>
      <br />

      <label>
       <input
        type="checkbox"
        name="isKoshar"
        onChange={this.handleChange}
        checked={this.state.isKoshar}
       />Koshar?
       </label>
      <br />

      <label>
       <input
        type="checkbox"
        name="isLactoseFree"
        onChange={this.handleChange}
        checked={this.state.isLactoseFree}
       />Lactose Free?
       </label>
      <br />

      <br />
      <button>Submit</button>

     </form>
     <hr />
     <h2>Entered Information</h2>
     <p>Your Name: {this.state.firstName} {this.state.lastName}</p>
     <p>Your Age: {this.state.Age}</p>
     <p>Your Gender: {this.state.gender}</p>
     <p>Your Destination: {this.state.destination}</p>
     <p>Your Dietary Restrictions:</p>
     <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
     <p>Koshar: {this.state.isKoshar ? "Yes" : "No"}</p>
     <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
    </main>
   </div>
  )
 }
}

export default App