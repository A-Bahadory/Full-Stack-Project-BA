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
  database: "BA",
});
const app = express();
const port = process.env.PORT || 3400;

app.get("/", async (_, res) => {
  const data = await db.query("SELECT * FROM videos");
  res.send(data.rows);
  res.send("hitting the server");
});

app.listen(port, () => {
  console.log(`your server is listening on port ${port}`);
});
