import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

function Register() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    fname: "",
    lname: "",
    contact: "",
    city: "",
    gender: "",
    hobbies: [],
    hobbyInput: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddHobby = () => {
    if (formState.hobbyInput.trim()) {
      const cleanedHobbies = formState.hobbyInput
        .split(",")
        .map((hobby) => hobby.trim())
        .filter((hobby) => hobby);

      setFormState((prev) => ({
        ...prev,
        hobbies: [...prev.hobbies, ...cleanedHobbies],
        hobbyInput: "",
      }));
    }
  };

  const handleRemoveHobby = (index) => {
    setFormState((prev) => ({
      ...prev,
      hobbies: prev.hobbies.filter((_, i) => i !== index),
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(
        auth,
        formState.email,
        formState.password
      );
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: formState.fname,
          lastName: formState.lname,
          contact: formState.contact,
          city: formState.city,
          gender: formState.gender,
          hobbies: formState.hobbies,
          photo: "",
        });
      }
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-center",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h3 style={{ marginTop: "45px" }}>Sign Up</h3>

      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          name="fname"
          value={formState.fname}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          name="lname"
          value={formState.lname}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label>Contact</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter contact number"
          name="contact"
          value={formState.contact}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label>City</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter city"
          name="city"
          value={formState.city}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label>Gender</label>
        <select
          className="form-control"
          name="gender"
          value={formState.gender}
          onChange={handleChange}
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
            name="hobbyInput"
            value={formState.hobbyInput}
            onChange={handleChange}
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
          {formState.hobbies.map((hobby, index) => (
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
          name="password"
          value={formState.password}
          onChange={handleChange}
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
