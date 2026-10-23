const express = require("express");
const cors = require("cors");
const path = require("path");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.send("Black Fiber HR Server Running");
});

/* Employees */

app.get("/employees", (req, res) => {

    res.json([
        {
            id: 1,
            fullname: "Judy Ann Gorre",
            department: "IT"
        },
        {
            id: 2,
            fullname: "John Doe",
            department: "HR"
        }
    ]);

});

/* Applicants */

app.get("/applicants", async (req, res) => {

    try {

        const result =
            await pool.query(
                "SELECT * FROM applicants ORDER BY id"
            );

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Database Error"
        });

    }

});

app.listen(3000, () => {

    console.log(
        "Server running on http://localhost:3000"
    );

});
