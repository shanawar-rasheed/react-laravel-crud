import http from "../http";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit(props) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    http.get("/users/" + id + "/edit").then((res) => {
      setInputs({
        name: res.data.name,
        email: res.data.email,
      });
    });
  };

  const handleChanges = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitForm = () => {
    http.put("/users/" + id, inputs).then((res) => {
      navigate("/");
    });
  };

  return (
    <div>
      <h2>Edit User</h2>
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
            

            <input
              type="button"
              value="Update"
              className="btn btn-primary mb-2"
              onClick={submitForm}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
