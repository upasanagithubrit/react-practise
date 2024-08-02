import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    comments:true,
    candidates:true,
    others:true,
    noticification:"",
  });
  console.log(formData);

  function changehandler(event) {
    const {value,name,checked,type}=event.target;
    setFormData((prevformdata) => {
      return {
        ...prevformdata,
        [name]: type==='checkbox'?checked:value
      };
    });
  }

  function submitHandler(event)
  {
   event.preventDefault();
   alert("data is saved by the name:"+`${formData.firstName}`)
   console.log(formData);
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <fieldset>
          <legend>....form....</legend>
          <br />
          <br />
          <label htmlFor="firstname">First Name</label>
          <br />

          <input
            type="text"
            placeholder="upasana"
            onChange={changehandler}
            id="firstname"
            name="firstName"
            value={formData.firstName}
          />

          <br />
          <br />
          <label htmlFor="lastname">Last Name</label>
          <br />

          <input
            type="text"
            placeholder="chaudhary"
            onChange={changehandler}
            id="lastname"
            name="lastName"
            value={formData.lastName}
          />

          <br />
          <br />
          <label htmlFor="email">Email</label>
          <br />

          <input
            type="text"
            placeholder="chaudhary@gmail.com"
            onChange={changehandler}
            id="email"
            name="email"
            value={formData.email}
          />
          <br />
          <br />
          <label>choose country:</label>
          <br />
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={changehandler}
          >
            <option value="india">India</option>
            <option value="austrilia">austrilia</option>
            <option value="usa">usa</option>
            <option value="canada">canada</option>
            <option value="united states">US</option>
          </select>

          <br />
          <br />
          <label htmlFor="address">Address:</label>
          <br />

          <input
            type="text"
            placeholder="1234main"
            onChange={changehandler}
            id="address"
            name="address"
            value={formData.address}
          />

          <br />
          <br />
          <label htmlFor="city">City:</label>
          <br />

          <input
            type="text"
            placeholder="abcd"
            onChange={changehandler}
            id="city"
            name="city"
            value={formData.city}
          />

          <br />
          <br />
          <label htmlFor="state">State:</label>
          <br />

          <input
            type="text"
            placeholder="uttarpradesh"
            onChange={changehandler}
            id="state"
            name="state"
            value={formData.state}
          />

          <br />
          <br />
          <label htmlFor="zip">ZIP/Postal Code:</label>
          <br />

          <input
            type="text"
            placeholder="25****"
            onChange={changehandler}
            id="zip"
            name="zip"
            value={formData.zip}
          />
          <br />
          <br />
          <label>By Email:</label>
           <br/>
           <input
           type="checkbox"
           onChange={changehandler}
           id="comments"
           name="comments"
          checked={formData.comments}
           
           />
           <label htmlFor="comments">Comments</label>
           <br/>
           <input
           type="checkbox"
           onChange={changehandler}
           id="candidates"
           name="candidates"
          checked={formData.candidates}
           
           />
            <label htmlFor="candidates">candidates</label>
           <br/>
           <input
           type="checkbox"
           onChange={changehandler}
           id="others"
           name="others"
          checked={formData.others}
           
           />
            <label htmlFor="others">Comments</label>

            <br/>
            <br/>
            <label>Push Noticification</label>
            <br/>
            <input
            type="radio"
            onChange={changehandler}
            id="everything"
            name="noticification"
            value="same as Email"/>
             <label htmlFor="everything">Everything</label>

            
            <br/>
            <input
            type="radio"
            onChange={changehandler}
            id="some"
            name="noticification"
            value="not same"/>
             <label htmlFor="some">some</label>
             <br/>
             <br/>
             <button>Save</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
