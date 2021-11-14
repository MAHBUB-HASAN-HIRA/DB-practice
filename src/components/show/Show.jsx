import React from "react";
import List from "./List";
import "./show.css";

const Show = ({ students, loading, loadData, update, setUpdate }) => {
	return (
		<div>
			{loading ? (
				<h1>Loading....</h1>
			) : (
				students.map((student) => (
					<List
						key={student.id}
						update={update}
						setUpdate={setUpdate}
						loadData={loadData}
						student={student}
					/>
				))
			)}
		</div>
	);
};

export default Show;
