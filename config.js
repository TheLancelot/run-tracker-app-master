'use strict';

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/run-tracker';
const TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost:27017/test-run-tracker';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRY = process.env.JWT_EXPIRY || '7d'
const PORT = process.env.PORT || 8080;

const HTTP_STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
};

module.exports = {DATABASE_URL, TEST_DATABASE_URL, PORT, HTTP_STATUS_CODES, JWT_SECRET, JWT_EXPIRY};