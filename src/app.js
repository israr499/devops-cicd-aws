const express = require('express');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/db-health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ db: 'connected' });
  } catch (err) {
    res.status(500).json({ db: 'error', message: err.message });
  }
});

module.exports = app;
