import http from "../http";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate ();
  const [inputs, setInputs] = useState({});
  const handleChanges = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitForm = () => {
    http.post("/users", inputs).then((res) => {
      navigate("/");
    });
  };

  return (
    <div>
      <h2>Add User</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card p-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control mb-2"
              value={inputs.name || ""}
              onChange={handleChanges}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className=" form-control mb-2"
              value={inputs.email || ""}
              onChange={handleChanges}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className=" form-control mb-2"
              value={inputs.password || ""}
              onChange={handleChanges}
            />
            <input
              type="button"
              value="submit"
              className="btn btn-success mb-2"
              onClick={submitForm}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
