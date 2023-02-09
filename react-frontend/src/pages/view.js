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
              className="form-control mb-2 "
              readOnly
              value={inputs.name || ""}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className=" form-control mb-2"
              readOnly
              value={inputs.email || ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
