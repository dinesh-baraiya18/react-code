import React, { useState } from "react";
import { Container } from "react-bootstrap";

const base_url = "https://64aa6ded0c6d844abede722f.mockapi.io/student/students";

const Create = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.phone !== "") {
      try {
        const res = await fetch(base_url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        setFormData({
          name: "",
          phone: "",
        });

        if (res.ok) {
          console.log("successfully post");
        } else {
          console.log("failed to post...");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("plz filled the data");
    }
  };

  return (
    <section className="m-5 p-5">
      <Container>
        <form onSubmit={handleSubmit}>
          <div className="my-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <div className="my-2">
            <input
              type="number"
              name="phone"
              value={formData.phone}
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </Container>
    </section>
  );
};

export default Create;
