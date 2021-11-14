const mysql = require("mysql");

//real server
// const databaseConnectionConfig = {
// 	host: "localhost",
// 	user: "school",
// 	password: "FGU6wL2(NWG$",
// 	database: "school",
// };


//localhost
const databaseConnectionConfig = {
	host: "localhost",
	user: "root",
	password: "",
	database: "school",
};

const con = mysql.createConnection(databaseConnectionConfig);

con.connect((error) => {
	if (error) {
		console.log("connection failed");
	} else {
		console.log("database successfully connected");
		// insertData(con);
		// selectDataById(con);
		selectAllData(con);
		// deleteData(con);
		// updateData(con);
	}
});

const insertData = (con) => {
	let SQL_QUERY =
		"INSERT INTO `students_list`( `id`, `name`, `roll`, `class`, `phone`, `city`) VALUES ('55','Mahbub','32','12','0172455554','jamalpur')";
	con.query(SQL_QUERY, (err) => {
		if (err) {
			console.log("insert Fail");
			console.log(err);
		} else {
			console.log("data insert success");
		}
	});
};

const selectAllData = (con) => {
	let SQL_QUERY =
		"SELECT * FROM `students_list`";
	con.query(SQL_QUERY, (err, result) => {
		if (err) {
			console.log("select Fail");
			console.log(err);
		} else {
			console.log("select data success");
			console.log(result);
		}
	});
};


const selectDataById = (con) => {
	let SQL_QUERY =
		"SELECT * FROM `students_list` WHERE `id`='5'";
	con.query(SQL_QUERY, (err, result) => {
		if (err) {
			console.log("select Fail");
			console.log(err);
		} else {
			console.log("select data success");
			console.log(result);
		}
	});
};

const deleteData = (con) => {
	let SQL_QUERY = "DELETE FROM `students_list` WHERE `id`='01'";
	con.query(SQL_QUERY, (err) => {
		if (err) {
			console.log("delete Fail");
			console.log(err);
		} else {
			console.log("data delete success");
		}
	});
};

const updateData = (con) => {
	let SQL_QUERY = "UPDATE `students_list` SET `name`='Hasan' WHERE `id`='7'";
	con.query(SQL_QUERY, (err) => {
		if (err) {
			console.log("update Fail");
			console.log(err);
		} else {
			console.log("update delete success");
		}
	});
};
