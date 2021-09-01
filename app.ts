import { Application } from "https://deno.land/x/abc@v1.3.3/mod.ts";
import { time, timezone } from "https://deno.land/x/time.ts@v2.0.1/mod.ts";
import Person from "./Person.ts";

const app = new Application();
const port = 8080;

app.get("/", (c) => {
  return `🕓 now UTC: ${time().t}`;
});
app.get("/hello", (c) => {
  const id: number = Number(c.queryParams.id);
  const name: string = c.queryParams.name;
  const age: number = Number(c.queryParams.age);
  const person = new Person(id, name, age);
  console.log(person);
  return person;
});

const runServer = async () => {
  console.log(`Server running on http://localhost:${port}/`);
  app.start({ port: port });
};

runServer();
