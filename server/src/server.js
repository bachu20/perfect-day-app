require("./db").start();

const express = require("express");
const cors = require("cors");
const middleware = require("./middleware/index");
const routes = require("./routes");

const app = express();

const API_PREFIX = "/api/v1";

const noAuthRoutesList = [];
const authRoutesList = [];

app.use(cors());

app.use(express.json());

const noAuthRoutes = express.Router();
for (const r in routes) {
  if (routes[r].skipAuth) {
    noAuthRoutesList.push(r);
    routes[r].load(noAuthRoutes);
  }
}

console.log("attach unauthenticated routes: ", noAuthRoutesList);
app.use(API_PREFIX, noAuthRoutes);

// require auth for all non-login routes
app.use(middleware.authentication);

const authRoutes = express.Router();
for (const r in routes) {
  if (!routes[r].skipAuth) {
    authRoutesList.push(r);
    routes[r].load(authRoutes);
  }
}

console.log("attach authenticated routes: ", authRoutesList);
app.use(API_PREFIX, authRoutes);

// error handling middleware
app.use(middleware.errorHandler());

app.listen(3000, () => console.log("listening on port 3000"));
