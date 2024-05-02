import express from "express";
// const express = require("express");
//old way exporting express
import pg from "pg";
const { Pool } = pg;

const db = new Pool({
  name: "Damoon",
  password: "",
  host: "localhost",
  port: 5432,
  database: "fsvideos",
});
const app = express();
const port = process.env.PORT || 3400;

app.get("/api/videos", async (_, res) => {
  const data = await db.query("SELECT * FROM videos");
  res.send(data.rows);
});

app.listen(port, () => {
  console.log(`your server is listening on port ${port}`);
});
