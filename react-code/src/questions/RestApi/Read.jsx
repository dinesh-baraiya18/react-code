import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

const base_url = "https://64aa6ded0c6d844abede722f.mockapi.io/student/students";

function BasicExample() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch(base_url);
      const data = await res.json();
      setStudents(data);
    } catch (error) {
      console.log("Error occurred while fetching data:", error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this student?"
      );
      if (confirmDelete) {
        const res = await fetch(`${base_url}/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          console.log("Successfully deleted student with ID:", id);
          getData();
        } else {
          console.log("Failed to delete student with ID:", id);
        }
      }
    } catch (error) {
      console.log("Error occurred while deleting student:", error);
    }
  };

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.phone}</td>
              <td>Edit</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default BasicExample;
