import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import Student from './Student';
import Data from './Data';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import EditableRow from './EditableRow';
import Navbar from './Navbar';

// console.log(Data);
const headers = [
  { label: "Name", key: "name" },
  { label: "Roll No.", key: "rollNo" },
  { label: "Semester", key: "semester" },
  { label: "Email", key: "email" },
  { label: "CGPA", key: "cgpa" },
];
const App = () => {
  const [students, setStudents] = useState(Data);
  // console.log(students);
  const [addStudent, setAddStudent] = useState({
    name: "",
    rollNo: "",
    semester: "",
    email: "",
    cgpa: "",
  });
  const [editFormData, setEditFormData] = useState({
    name: "",
    rollNo: "",
    semester: "",
    email: "",
    cgpa: "",
  });
  const [editStudentId, setEditStudentId] = useState(null);

  // When we fill input box for adding rows(below the table)
  const inputEvent = (event) => {
    // console.log('inputevent executes');
    const value = event.target.value;
    const name = event.target.name;
    // console.log(name, value);

    const newItem = { ...addStudent };
    // console.log(newItem);
    newItem[name] = value;
    setAddStudent(newItem);
  }

  // When we click "add" btn or submit the form of adding more rows.
  const handleAddBtn = (event) => {
    event.preventDefault();
    const serial = students.length;

    const newItem = {
      id: serial + 1,
      name: addStudent.name,
      rollNo: addStudent.rollNo,
      semester: addStudent.semester,
      email: addStudent.email,
      cgpa: addStudent.cgpa
    };
    // console.log(newItem);
    const newItems = [...students, newItem];
    setStudents(newItems);
  };

  // When we click "edit" btn to edit the row
  const handleEditClick = (event, val) => {
    // console.log(val);
    // console.log('handleEditClick executes')
    event.preventDefault();
    // console.log(val.id, editStudentId)
    setEditStudentId(val.id);
    // console.log(editStudentId)

    const formValues = {
      id: val.id,
      name: val.name,
      rollNo: val.rollNo,
      semester: val.semester,
      email: val.email,
      cgpa: val.cgpa
    }
    setEditFormData(formValues);
  }

  // When we are changing/editing the form after clicking edit btn(similar to inputEvent)
  const handleEditFormChange = (event) => {
    // console.log('handleEditFormChange executes')
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    // console.log(name, value);

    const newAddItem = { ...editFormData };
    // console.log(newAddItem)
    newAddItem[name] = value;
    setEditFormData(newAddItem);
  }

  // When we click "save" btn for saving the edited row
  const handleSave = (event) => {
    // console.log('handleSave chala h');
    event.preventDefault();
    const editedItem = {
      id: editStudentId,
      name: editFormData.name,
      rollNo: editFormData.rollNo,
      semester: editFormData.semester,
      email: editFormData.email,
      cgpa: editFormData.cgpa
    }
    // console.log(editedItem)
    const newItems = [...students];
    // console.log(newItems)
    const index = students.findIndex((val) =>
      // console.log(val)
      val.id === editStudentId
    );
    newItems[index] = editedItem;
    setStudents(newItems);
    setEditStudentId(null);
    // seteditStudentId(val.id);
  }
  const csvReport = {
    filename: 'Report.csv',
    headers: headers,
    data: students
  }
  return (
    <div>
      <Navbar />
      <div className="container-fluid d-flex flex-column">
        <form onSubmit={handleSave} className="w-100 mb-5 mt-4 text-center">
          <div className="scrollDiv">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Student's name</th>
                  <th scope="col">Roll No.</th>
                  <th scope="col">Semester</th>
                  <th scope="col">Email</th>
                  <th scope="col">CGPA</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((val, id) => (
                  <>
                    {/* {console.log(val)} */}
                    {editStudentId === val.id ?
                      (<EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} />) :
                      (<Student key={id} id={val.id} name={val.name} rollNo={val.rollNo} semester={val.semester} email={val.email} cgpa={val.cgpa} handleEditClick={handleEditClick} />)
                    }
                  </>
                )
                )}
              </tbody>
            </table>
          </div>
          <button className="btn btn-secondary mt-5 mb-5" id="exportBtn">
            <CSVLink {...csvReport} className="bg-secondary text-decoration-none text-light">Export to CSV</CSVLink>
          </button>

        </form>

        <div className="addDiv d-flex flex-column justify-content-center">
          <h2 className="text-center" id="recordHead">Add a record</h2>
          <form onSubmit={handleAddBtn} id="addForm">
            <input className="addInput py-2 ps-4 pe-3" type="text" placeholder="Enter student's name" required="required" name="name" value={addStudent.name} onChange={inputEvent} />
            <input className="addInput py-2 ps-4 pe-3" type="text" placeholder="Enter roll no." required="required" name="rollNo" value={addStudent.rollNo} onChange={inputEvent} />
            <input className="addInput py-2 ps-4 pe-3" type="text" placeholder="Enter semester" required="required" name="semester" value={addStudent.semester} onChange={inputEvent} />
            <input className="addInput py-2 ps-4 pe-3" type="text" placeholder="Enter email" required="required" name="email" value={addStudent.email} onChange={inputEvent} />
            <input className="addInput py-2 ps-4 pe-3" type="text" placeholder="Enter cgpa" required="required" name="cgpa" value={addStudent.cgpa} onChange={inputEvent} />
            <button className="btn btn-primary" id="addBtn"> Add</button>
          </form>
          {/* <button className="btn btn-secondary mt-5 mb-5" id="exportBtn">
            <CSVLink {...csvReport} className="bg-secondary text-decoration-none text-light">Export to CSV</CSVLink>
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
