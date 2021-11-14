import { addDoc, collection, doc, updateDoc } from "@firebase/firestore";
import React, { useRef } from "react";
import db from "../../firebase";
import "./save.css";
const Save = ({ loadData, user, setUpdate }) => {
	const nameRef = useRef();
	const classRef = useRef();
	const rollRef = useRef();
	
	const afterOperation = () => {
		nameRef.current.value = "";
		classRef.current.value = "";
		rollRef.current.value = "";
		loadData();
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			name: nameRef.current.value,
			class: classRef.current.value,
			roll: rollRef.current.value,
		};
		if (user?.name) {
			await updateDoc(doc(db, "Students", user.id), data);
			afterOperation();
			setUpdate({});
		} else {
			await addDoc(collection(db, "Students"), data);
			afterOperation();
		}
	};

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input
						defaultValue={user?.name}
						ref={nameRef}
						type="text"
						name="name"
						id="name"
						placeholder="Name"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="class">Class:</label>
					<input
						defaultValue={user?.class}
						type="text"
						ref={classRef}
						name="class"
						id="class"
						placeholder="Class"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="name">Roll:</label>
					<input
						defaultValue={user?.roll}
						type="number"
						ref={rollRef}
						name="roll"
						id="roll"
						placeholder="Roll"
						required
					/>
				</div>
				<button type="submit" className="save">
					Save
				</button>
			</form>
			{user?.name && (
				<button onClick={() => setUpdate({})} type="submit" className="cancel">
					Cancel
				</button>
			)}
		</div>
	);
};

export default Save;
