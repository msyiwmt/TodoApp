import express from "express";
import type { Express, Request, Response } from "express";
import cors from "cors";
import type { Todo } from "../common/types/index.js";


const app: Express = express();
const port = 3001;

app.use(cors());

const sampledData = [
    { id: 1, title: "Sample Todo 1", completed: false },
    { id: 2, title: "Sample Todo 2", completed: true },
    { id: 3, title: "Sample Todo 3", completed: false }
]

let todoList: Todo[] = sampledData;


app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.get("/list", (req: Request, res: Response) => {
    res.json(todoList);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
