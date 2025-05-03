import express from "express";
import routes from "./routes/users";

const app = express();
const router = express.Router();

app.use(express.json());

router.get("/users", users.getUsers);

app.use(router);

export const shutdown = async () => {
  // await Promise.allSettled([
  //   redis.cache && redis.cache.quit(),
  //   mongo.client && mongo.client.close(),
  //   server && server.close(),
  // ]);
  process.exit(0);
};

process.on("SIGTERM", () => {
  console.log(`Process ${process.pid} received a SIGTERM signal`);
  shutdown();
});

process.on("SIGINT", () => {
  console.log(`Process ${process.pid} has been interrupted`);
  shutdown();
});
