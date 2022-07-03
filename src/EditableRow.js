import React from 'react';
import './index.css';

function EditableRow(props) {
    // console.log(props);
    return (
        <tr id="editableRow">
            <td>
                <input className="editableInput disabled text-center" type="text" placeholder="" required="required" name="name" value={props.editFormData.id} />
            </td>
            <td>
                <input className="editableInput text-center" type="text" placeholder="Enter student's name" required="required" name="name" value={props.editFormData.name} onChange={props.handleEditFormChange} />
            </td>
            <td>
                <input className="editableInput text-center" type="text" placeholder="Enter roll no" required="required" name="rollNo" value={props.editFormData.rollNo} onChange={props.handleEditFormChange} />
            </td>
            <td>
                <input className="editableInput text-center" type="text" placeholder="Enter semester" required="required" name="semester" value={props.editFormData.semester} onChange={props.handleEditFormChange} />
            </td>
            <td>
                <input className="editableInput text-center" type="text" placeholder="Enter email" required="required" name="email" value={props.editFormData.email} onChange={props.handleEditFormChange} />
            </td>
            <td>
                <input className="editableInput text-center" type="text" placeholder="Enter your cgpa" required="required" name="cgpa" value={props.editFormData.cgpa} onChange={props.handleEditFormChange} />
            </td>
            <td>
                <button className="saveBtn my-4" type="submit">Save</button>
            </td>
        </tr>
    )
}

export default EditableRow;