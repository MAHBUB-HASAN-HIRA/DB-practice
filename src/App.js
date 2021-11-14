import { collection, getDocs } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import "./app.css";
import Save from "./components/save/Save";
import Show from "./components/show/Show";
import db from "./firebase";

function App() {
	const [students, setStudents] = useState([]);
	const [loading, setLoading] = useState([]);
	const [update, setUpdate] = useState({});

	const loadData = async () => {
		setLoading(true);
		let item = [];
		const querySnapshot = await getDocs(collection(db, "Students"));
		querySnapshot.forEach((doc) => item.push({ id: doc.id, ...doc.data() }));
		setLoading(false);
		setStudents(item);
		setUpdate({});
	};

	useEffect(() => {
		loadData();
	}, []);

	return (
		<div className="app">
			<h1>Firebase Practice</h1>
			{!update?.name && <Save loadData={loadData} />}
			<Show
				update={update}
				setUpdate={setUpdate}
				students={students}
				loadData={loadData}
				loading={loading}
			/>
		</div>
	);
}

export default App;
