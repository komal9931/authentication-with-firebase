// import { createUserWithEmailAndPassword } from "firebase/auth";
// import React, { useState } from "react";
// import { auth, db } from "./firebase";
// import { setDoc, doc } from "firebase/firestore";
// import { toast } from "react-toastify";

// function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       const user = auth.currentUser;
//       console.log(user);
//       if (user) {
//         await setDoc(doc(db, "Users", user.uid), {
//           email: user.email,
//           firstName: fname,
//           lastName: lname,
//           photo:""
//         });
//       }
//       console.log("User Registered Successfully!!");
//       toast.success("User Registered Successfully!!", {
//         position: "top-center",
//       });
//     } catch (error) {
//       console.log(error.message);
//       toast.error(error.message, {
//         position: "bottom-center",
//       });
//     }
//   };

//   return (
//     <form onSubmit={handleRegister}>
//       <h3>Sign Up</h3>

//       <div className="mb-3">
//         <label>First name</label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="First name"
//           onChange={(e) => setFname(e.target.value)}
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label>Last name</label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Last name"
//           onChange={(e) => setLname(e.target.value)}
//         />
//       </div>

//       <div className="mb-3">
//         <label>Email address</label>
//         <input
//           type="email"
//           className="form-control"
//           placeholder="Enter email"
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label>Password</label>
//         <input
//           type="password"
//           className="form-control"
//           placeholder="Enter password"
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>

//       <div className="d-grid">
//         <button type="submit" className="btn btn-primary">
//           Sign Up
//         </button>
//       </div>
//       <p className="forgot-password text-right">
//         Already registered <a href="/login">Login</a>
//       </p>
//     </form>
//   );
// }
// export default Register;

// import { createUserWithEmailAndPassword } from "firebase/auth";
// import React, { useState } from "react";
// import { auth, db } from "./firebase";
// import { setDoc, doc } from "firebase/firestore";
// import { toast } from "react-toastify";

// function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const [contact, setContact] = useState("");
//   const [city, setCity] = useState("");
//   const [gender, setGender] = useState("");
//   const [hobby, setHobby] = useState("");
//   const [hobbies, setHobbies] = useState([]);

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     console.log({
//       email,
//       password,
//       firstName: fname,
//       lastName: lname,
//       contact,
//       city,
//       gender,
//       hobbies,
//     });
//     // try {
//     //   await createUserWithEmailAndPassword(auth, email, password);
//     //   const user = auth.currentUser;
//     //   console.log(user);
//     //   if (user) {
//     //     await setDoc(doc(db, "Users", user.uid), {
//     //       email: user.email,
//     //       firstName: fname,
//     //       lastName: lname,
//     //       contact,
//     //       city,
//     //       gender,
//     //       hobby,
//     //       photo: "",
//     //     });
//     //   }
//     //   console.log("User Registered Successfully!!");
//     //   toast.success("User Registered Successfully!!", {
//     //     position: "top-center",
//     //   });
//     // } catch (error) {
//     //   console.log(error.message);
//     //   toast.error(error.message, {
//     //     position: "bottom-center",
//     //   });
//     // }
//   };

//   return (
//     <form onSubmit={handleRegister}>
//       <h3>Sign Up</h3>

//       <div className="mb-3">
//         <label>First name</label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="First name"
//           onChange={(e) => setFname(e.target.value)}
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label>Last name</label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Last name"
//           onChange={(e) => setLname(e.target.value)}
//         />
//       </div>

//       <div className="mb-3">
//         <label>Email address</label>
//         <input
//           type="email"
//           className="form-control"
//           placeholder="Enter email"
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label>Contact</label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Enter contact number"
//           onChange={(e) => setContact(e.target.value)}
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label>City</label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Enter city"
//           onChange={(e) => setCity(e.target.value)}
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label>Gender</label>
//         <select
//           className="form-control"
//           onChange={(e) => setGender(e.target.value)}
//           required
//         >
//           <option value="">Select Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Other">Other</option>
//         </select>
//       </div>

//       <div className="mb-3">
//         <label>Hobby</label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Enter your hobby"
//           onChange={(e) => setHobby(e.target.value)}
//         />
//       </div>

//       <div className="mb-3">
//         <label>Password</label>
//         <input
//           type="password"
//           className="form-control"
//           placeholder="Enter password"
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>

//       <div className="d-grid">
//         <button type="submit" className="btn btn-primary">
//           Sign Up
//         </button>
//       </div>
//       <p className="forgot-password text-right">
//         Already registered <a href="/login">Login</a>
//       </p>
//     </form>
//   );
// }

// export default Register;
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [hobbyInput, setHobbyInput] = useState("");
  const [loading, setLoading] = useState(false);
  // const handleAddHobby = () => {
  //   if (hobbyInput.trim()) {
  //     setHobbies([...hobbies, hobbyInput.trim()]);
  //     setHobbyInput(""); // Clear input field
  //   }
  // };

  // const handleAddHobby = () => {
  //   if (hobbyInput.trim()) {
  //     // Clean up hobby input: remove extra commas and trim spaces
  //     const cleanedHobby = hobbyInput
  //       .replace(/,+/g, ",") // Replace multiple commas with a single comma
  //       .split(",") // Split by comma into an array
  //       .map((hobby) => hobby.trim()) // Trim spaces around each hobby
  //       .filter((hobby) => hobby !== ""); // Remove empty strings

  //     // Add cleaned hobbies to the list
  //     setHobbies([...hobbies, ...cleanedHobby]);
  //     setHobbyInput(""); // Clear input field
  //   }
  // };

  const handleAddHobby = () => {
    if (hobbyInput.trim()) {
      // Replace multiple commas with a single comma, split, and clean
      const cleanedHobbies = hobbyInput
        .split(",") // Split by commas
        .map((hobby) => hobby.trim()) // Trim spaces
        .filter((hobby) => hobby); // Remove empty values

      // Add cleaned hobbies to the list
      setHobbies([...hobbies, ...cleanedHobbies]);
      setHobbyInput(""); // Clear input field
    }
  };

  const handleRemoveHobby = (index) => {
    const updatedHobbies = hobbies.filter((_, i) => i !== index);
    setHobbies(updatedHobbies);
  };

  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   // console.log({
  //   //   email,
  //   //   password,
  //   //   firstName: fname,
  //   //   lastName: lname,
  //   //   contact,
  //   //   city,
  //   //   gender,
  //   //   hobbies,
  //   // });
  //   try {
  //     await createUserWithEmailAndPassword(auth, email, password);
  //     const user = auth.currentUser;
  //     console.log(user);
  //     if (user) {
  //       await setDoc(doc(db, "Users", user.uid), {
  //         email: user.email,
  //         firstName: fname,
  //         lastName: lname,
  //         contact,
  //         city,
  //         gender,
  //         hobbies,
  //         photo: "",
  //       });
  //     }
  //     console.log("User Registered Successfully!!");
  //     toast.success("User Registered Successfully!!", {
  //       position: "top-center",
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //     toast.error(error.message, {
  //       position: "bottom-center",
  //     });
  //   }
  // };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(e.target);
    setLoading(true); // Set loading to true when the process starts
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          contact,
          city,
          gender,
          hobbies,
          photo: "",
        });
      }
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
      // Reset form fields
      setEmail("");
      setPassword("");
      setFname("");
      setLname("");
      setContact("");
      setCity("");
      setGender("");
      setHobbies([]);
      setHobbyInput("");
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-center",
      });
    } finally {
      setLoading(false); // Reset loading state when the process is complete
    }
  };
  // console.log(fname);
  return (
    <form onSubmit={handleRegister}>
      <h3 style={{ marginTop: "45px" }}>Sign Up</h3>

      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          value={fname} // Binding value to state
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          value={lname} // Binding value to state
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email} // Binding value to state
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Contact</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter contact number"
          value={contact} // Binding value to state
          onChange={(e) => setContact(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>City</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter city"
          value={city} // Binding value to state
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Gender</label>
        <select
          className="form-control"
          value={gender} // Binding value to state
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="mb-3">
        <label>Hobbies</label>
        <div className="d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Enter a hobby"
            value={hobbyInput} // Binding value to state
            onChange={(e) => setHobbyInput(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleAddHobby}
          >
            Add
          </button>
        </div>
        <ul className="list-group mt-2">
          {hobbies.map((hobby, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between"
            >
              {hobby}
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => handleRemoveHobby(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password} // Binding value to state
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          ) : (
            "Sign Up"
          )}
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/login">Login</a>
      </p>
    </form>
  );
}

export default Register;
