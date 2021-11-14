import { deleteDoc, doc } from "@firebase/firestore";
import React from "react";
import db from "../../firebase";
import Save from "../save/Save";

const List = ({ student, loadData, update, setUpdate }) => {
	const handleSubmit = async (e) => {
		e.preventDefault();
		await deleteDoc(doc(db, "Students", student.id));
		loadData();
	};
	return (
		<>
			{update?.name ? (
				<Save user={update} setUpdate={setUpdate} loadData={loadData} />
			) : (
				<div className="list">
					<h2>Name: {student.name}</h2>
					<h4>Class: {student.class}</h4>
					<h4>Roll: {student.roll}</h4>
					<button onClick={handleSubmit} className="remove">
						Remove
					</button>
					<button onClick={() => setUpdate(student)} className="remove update">
						Update
					</button>
				</div>
			)}
		</>
	);
};

export default List;
