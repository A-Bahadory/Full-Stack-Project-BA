import express from "express";
// const express = require("express");
//old way exporting express
import pg from "pg";
import cors from "cors";

const { Pool } = pg;

const db = new Pool({
  name: "Damoon",
  password: "",
  host: "localhost",
  port: 5432,
  database: "fsvideos",
});
// console.log("this is db data --->", db);
const app = express();
const port = 3400;
app.use(
  cors({
    origin: "*",
  })
);

app.get("/api", async (_, res) => {
  try {
    const data = await db.query("SELECT * FROM videos");

    res.status(200).send(data.rows);
  } catch (error) {
    console.error("Error fetching videos:", error);
    res.status(500).json({
      error: {
        message: "Internal Server Error",
        type: "Database Error",
      },
    });
  }
});

app.get("/api/videos", async (_, res) => {
  try {
    const data = await db.query("SELECT * FROM videos");
    res.status(200).send(data.rows);
  } catch (error) {
    res.status(500).json({
      error: {
        message: error.message,
        type: "Could not connect to Database",
      },
    });
  }
});

const listener = app.listen(port, () => {
  console.log(`your server is listening on port ${listener.address().port}`);
});
