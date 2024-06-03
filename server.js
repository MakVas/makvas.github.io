const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const sqlite3 = require("sqlite3").verbose();
const filepath = "./clubs.db";

const db = new sqlite3.Database(filepath, (error) => {
    if (error) {
      return console.error(error.message);
    }
});

app.set('views', __dirname)
app.set('view engine', 'ejs')

console.log("Connection with SQLite has been established");

app.use(express.static(__dirname));

app.get('/all_teams', async (req, res) => {
    await db.all("SELECT * FROM clubs;", [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.render("all_teams", {clubs: rows});
    });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
