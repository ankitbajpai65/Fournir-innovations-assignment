import React from 'react';
import './index.css';

function Student(props) {
    // console.log(props);
    return (
        <>
            <tr id="row">
                <td scope="col" className="fw-bold">{props.id}</td>
                <td scope="col">{props.name}</td>
                <td scope="col">{props.rollNo}</td>
                <td scope="col">{props.semester}</td>
                <td scope="col">{props.email}</td>
                <td scope="col">{props.cgpa}</td>
                <button className="editBtn my-4" onClick={(event) => props.handleEditClick(event, props)}>Edit</button>
            </tr>
        </>
    )
}

export default Student;
