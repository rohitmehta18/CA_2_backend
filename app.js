const express = require("express");
const app = express();


app.use(express.json());

app.post("/login", (req, res) => {
    const { email, password } = req.body;


    if (!email) {
        return res.status(400).json({ error: "Email cannot be empty" });
    }


    if (!password) {
        return res.status(400).json({ error: "Password cannot be empty" });
    }


    res.json({ message: "Login successful!" });
});

const port = 5000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
