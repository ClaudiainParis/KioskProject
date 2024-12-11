import {
  Stack,
  Title,
  Text,
  List,
  Checkbox,
  Group,
  Center,
  Container,
  Space,
  Anchor,
} from "@mantine/core";
import type { MetaFunction, ActionFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { createTask, getAllTasks, deleteTask } from "../utils/tasks.server";
import { Taskform } from "../components/Tasks/taskform";
import { Tasklist, TaskListProps } from "../components/Tasks/tasklist";
import { main } from "../../prisma/seed"
import { PrismaClient } from "@prisma/client";


// const prisma = new PrismaClient();

export const meta: MetaFunction = () => {
  return [
    { title: "Kiosk Audit" },
    { name: "description", content: "The CSRD audit app by Kiosk" },
  ];
};

//   export const handle = {
//     breadcrumb: () => "Case study",
//   };

export const loader: LoaderFunction = async ({ request }) => {

  const prisma = new PrismaClient();

  try{
  
  const user = await main()

  const userTask = await getAllTasks(user.id);

  return {user, userTask};
  
  } catch (error) {
    console.error("Error in loader:", error);

    // Return an error response
    throw new Response("Error loading data", { status: 500 });
  }
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const action = form.get("action");

  switch (action) {
    case "new": {
      const State = form.get("state");
      const Title = form.get("title");
      const Owner = form.get("owner")
      const Description = form.get("description")
      const user = {
        id: "randomId",
      };

      const newTask = await createTask({
        state: State,
        title: Title,
        owner: Owner,
        description: Description
      });
      return newTask;
    }
    case "delete": {
      const id = form.get("id");
      const deletedTask = await deleteTask(id);
      return deletedTask;
    }
    default:
      return null;
  }
};

export default function Checklist() {
  const { userTask } = useLoaderData<typeof loader>()
  return (
    <Stack maw={800} mr="auto" pt={20} pl={24} justify="center">
      <Title order={2}>Create your checklist !</Title>

      <Text>Try 30000</Text>
      <div>
        {/* <label htmlFor="task"> Task </label> */}
        <Form method="post">
          <div>
            <label htmlFor="task"> Task </label>
            <input type="text" name="task" id="task" className="task" />
          </div>
          <button type="submit"> Add </button>
        </Form>
        {/* <input 
          type="text"
          name="task"
          id="task"
          className="task"
          /> */}
      </div>
      <Taskform />
      <Space />
      <div className="grid gap-5">
          {userTask.task.length ? <> {userTask.task.map((task: TaskListProps) => {
            return(
              <Tasklist key={task.id} id={task.id} title={task.title} state={task.state} description={task.description}/>
            )
          })}
          </> : "😳 No task"}
        </div>
    </Stack>
  );
}
