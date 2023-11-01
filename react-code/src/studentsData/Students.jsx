import React, { useEffect, useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import user from "../assets/images/01.jpg";
// import { studentsData as alice } from "./studentsData";

const StudentsData = () => {
  const [allStudentsData, setallStudentsData] = useState(
    localStorage.getItem("students")
      ? JSON.parse(localStorage.getItem("students"))
      : []
  );
  const [openModal, setOpenModal] = useState(false);
  const [studentsData, setStudentsData] = useState({
    name: "",
    email: "",
    phone: "",
    birthdate: "",
    profile: "",
  });

  const [singleData, setSingleData] = useState(
    allStudentsData.length > 0 && {
      name: allStudentsData[0].name,
      email: allStudentsData[0].email,
      phone: allStudentsData[0].phone,
      birthdate: allStudentsData[0].birthdate,
      profile: allStudentsData[0].profile,
    }
  );

  console.log(allStudentsData);

  // const dateFormate = useMemo(() => {
  //   const getDate = new Date(studentsData.birthdate);
  //   let date = getDate.getDate();
  //   let month = getDate.getMonth() + 1;
  //   let year = getDate.getFullYear();

  //   return `${date < 10 ? "0" + date : date}/${
  //     month < 10 ? "0" + month : month
  //   }/${year}`;
  // }, [studentsData.birthdate]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setStudentsData((prev) => ({
      ...prev,
      [name]: name === "profile" ? URL.createObjectURL(files[0]) : value,
    }));
    console.log("handleInputChange");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, birthdate, profile } = studentsData;
    if (name && email && phone && birthdate && profile) {
      setallStudentsData((prev) => [...prev, studentsData]);
      localStorage.setItem(
        "students",
        JSON.stringify([...allStudentsData, studentsData])
      );
    } else {
      alert("Fill in the all blank");
    }
    console.log("handleSubmit");
  };

  const handleSingleData = (index) => {
    const filterSingle = allStudentsData.find((student, i) => i == index);
    setSingleData(filterSingle);
    console.log("handleSingleData");
  };

  const removeStudent = (index) => {
    const filterdata = allStudentsData.filter((student, i) => i !== index);
    setallStudentsData(filterdata);
  };

  return (
    <>
      <Section className="mt-3 pt-0">
        <Container>
          <div className="d-flex gap-2 justify-content-between">
            <h1>Students Database Management</h1>
            <button
              className="btn bg-warning rounded"
              onClick={() => setOpenModal((prev) => !prev)}
            >
              Add Student
            </button>
          </div>
          {allStudentsData && allStudentsData.length > 0 && (
            <div className="main-sec mt-5 d-flex justify-content-between">
              <div className="left-side">
                <h4>students List</h4>
                <ul>
                  {allStudentsData?.map(({ name }, idx) => (
                    <li key={idx} onClick={() => handleSingleData(idx)}>
                      <span>{name}</span>
                      <button onClick={() => removeStudent(idx)}>x</button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="right-side">
                <h4>students Info</h4>
                <div className="mt-2">
                  <figure>
                    <img
                      src={singleData?.profile ? singleData.profile : user}
                      alt="img"
                    />
                  </figure>
                  <div>
                    <div>
                      <label htmlFor="">Name : </label>
                      <span>{singleData?.name}</span>
                    </div>
                    <div>
                      <label htmlFor="">Email : </label>
                      <span> {singleData?.email}</span>
                    </div>
                    <div>
                      <label htmlFor="">Phone : </label>
                      <span> {singleData?.phone}</span>
                    </div>
                    <div>
                      <label htmlFor="">DOB : </label>
                      <span> {singleData?.birthdate}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Container>
        <div className={`popup-modal  ${openModal ? "open" : ""}`}>
          <button onClick={() => setOpenModal(false)} className="modal-close">
            x
          </button>
          <form action="" onSubmit={handleSubmit}>
            <h3>Add Student Info</h3>
            <Row>
              <Col xs={12} className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="form-control shadow-sm"
                  onChange={handleInputChange}
                  value={studentsData.name}
                />
              </Col>
              <Col xs={12} className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="form-control shadow-sm"
                  onChange={handleInputChange}
                  value={studentsData.email}
                />
              </Col>
              <Col xs={6} className="mb-4">
                <input
                  type="number"
                  name="phone"
                  placeholder="phone"
                  className="form-control shadow-sm"
                  onChange={handleInputChange}
                  value={studentsData.phone}
                />
              </Col>
              <Col xs={6} className="mb-4">
                <input
                  type="date"
                  name="birthdate"
                  placeholder="birth Date"
                  className="form-control shadow-sm"
                  onChange={handleInputChange}
                  value={studentsData.birthdate}
                />
              </Col>
              <Col xs={12} className="mb-4">
                <input
                  type="file"
                  name="profile"
                  className="form-control shadow-sm"
                  onChange={handleInputChange}
                  // value={studentsData.profile}
                />
              </Col>
              <Col xs={12} className="mb-4">
                <button type="submit" className="btn btn-primary w-100">
                  Create Student
                </button>
              </Col>
            </Row>
          </form>
        </div>
      </Section>
    </>
  );
};

export default StudentsData;

const Section = styled.section`
  ul,
  .right-side > div {
    max-height: 65vh;
    overflow-y: auto;
  }
  ul,
  li {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  li {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    padding: 2px 20px;
    text-transform: capitalize;
    background-color: #000;
    margin: 10px;
    border-radius: 20px;
    background-color: #2196f3;
    color: #fff;
    cursor: pointer;

    button {
      padding: 5px;
      border: 0;
      outline: 0;
      color: #ff0000;
      background: transparent;
      font-size: 22px;
      font-weight: 600;
    }
  }
  .main-sec {
    border: 1px solid #000;
    min-height: 70vh;

    > div {
      border-right: 1px solid #000;
      flex: 1;
      text-align: center;

      :last-child {
        border: 0;
      }
      h4 {
        padding: 10px;
        text-transform: capitalize;
        border-bottom: 1px solid #000;
      }
    }
    .right-side {
      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 20px 10px;
      }
      figure {
        width: 200px;
        height: 200px;
        border-radius: 100%;
        border: 2px solid #2196f3;
        padding: 10px;
        overflow: hidden;
        margin-bottom: 30px;
        flex-shrink: 0;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      label {
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
  .popup-modal {
    display: none;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    bottom: 0;
    min-height: 100vh;

    form {
      max-width: 500px;
      width: 100%;
      border: 1px solid #2196f3;
      padding: 30px;
      border-radius: 20px;
      margin: auto;
      background-color: #fff;

      h3 {
        color: #2196f3;
        margin-bottom: 20px;
        text-align: center;
      }
    }
  }
  .popup-modal.open {
    display: flex;
    background-color: rgb(0 0 0 / 80%);
  }
  .modal-close {
    position: fixed;
    top: 50px;
    right: 50px;
    border: 0;
    outline: 0;
    padding: 10px;
    font-size: 30px;
    background-color: transparent;
    z-index: 1;
    color: #ff0000;
    font-weight: 600;
  }
`;
