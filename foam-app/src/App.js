import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFoamData] = useState({              ///all in one statechange
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    gender:"",
  });

  console.log(formData);
  function changeHandler(event) {                 // update data
    const { name, value, checked, type } = event.target; //destructuring
    setFoamData((prevfoamdata) => {
      return {
        ...prevfoamdata,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event){
    event.preventDefault();

    console.log("finaldata:")
    console.log(formData);
    document.write(formData.firstName)
    

  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <fieldset>
          <legend>..............form ..............</legend>
          <br />
          <br />
          <input                            //text
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            value={formData.firstName}
            onChange={changeHandler}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            value={formData.lastName}
            onChange={changeHandler}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
          <br />
          <br />
          <textarea                                ////textarea
            placeholder="enter your comments"
            name="comments"
            value={formData.comments}
            onChange={changeHandler}
          />

          <br />
          <br />
          <input                                  //checkbox
            type="checkbox"
            name="isVisible"
            checked={formData.isVisible}
            onChange={changeHandler}
            id="isvisible"
          />
          <label htmlFor="isvisible">am i visible?</label>
          <br />
          <br />
          <input                                //radio
            type="radio"
            name="mode"
            onChange={changeHandler}
            value="online-mode"
            checked={formData.mode === "online-mode"}
            id="online-mode"
          />
          <label htmlFor="online-mode"> online-mode</label>

          <input
            type="radio"
            name="mode"
            onChange={changeHandler}
            value="offline-mode"
            checked={formData.mode === "offline-mode"}
            id="offline-mode"
          />
          <label htmlFor="offline-mode"> offline-mode</label>

          <select                              // dropdown
           name="gender"
           onChange={changeHandler}
           id="gender"
           value={formData.gender}

          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">other</option>

           

          </select>
          <br />
          <br />

          <button>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
