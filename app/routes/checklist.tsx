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
import { ObjectId } from 'bson';

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
  const userId = "63a9f0ea7b7a4a0fdb917a34";

  let user = await prisma.user.findUnique({
    where: { id: userId }
  });
  
  if (!user) {
    let user = await prisma.user.create({
      data: {
        id: userId,
        firstName: "Jean-Marc",
        lastName: "Janco",
      },


    });
    console.log("User created:", user);

  } else {
    console.log("User already exists:", user);

   
  }
  const userTask = await getAllTasks(userId);
console.log(userTask)
  return {user, userTask};

  } 
  catch (error) {
    console.error("Error in loader:", error);

    // Return an error response
    throw new Response("Error loading data", { status: 500 });
  }
}

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const action = form.get("action");
    const userId = form.get("userId");

  switch (action) {
    case "new": {
      const State = form.get("state");
      const Title = form.get("title");
      const Owner = form.get("owner")
      const Description = form.get("description")
      const user = {
        id: "63a9f0ea7b7a4a0fdb917a36",
      };
      const CreatedBY = user.id

      const newTask = await createTask({
        state: State,
        title: Title,
        owner: Owner,
        createdBy: CreatedBY

        // description: Description
      });
      console.log(newTask)
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
  // const { user, userTask } = useLoaderData();
  const { user, userTask } = useLoaderData<typeof loader>()
  return (
    <Stack maw={800} mr="auto" pt={20} pl={24} align="center">
      <Title order={2}>Create your checklist !</Title>
      <div>
      </div>
      <Form method="post">
      <input type="hidden" name="userId" value={user.id} />
      <Taskform />
      </Form>
      <Space h="lg" />
      <div>
          {userTask.task.length ? <> {userTask.task.map((task: TaskListProps) => {
            return(
              <Tasklist 
              key={task.id} 
              id={task.id} 
              title={task.title} 
              state={task.state} 
              owner={task.owner} 
              createdBy={task.createdBy}
              // description={task.description}
              />
            )
          })}
          </> : "😳 No tasks"}
        </div>

    </Stack>
  );
}
