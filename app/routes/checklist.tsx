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
  // import { Taskform } from "../components/taskform";
//   import { Tasklist } from "./components/tasklist";


  export const meta: MetaFunction = () => {
    return [
      { title: "Kiosk Audit" },
      { name: "description", content: "The CSRD audit app by Kiosk" },
    ];
  };
  
//   export const handle = {
//     breadcrumb: () => "Case study",
//   };
  
  export default function Checklist() {
    return (
      <Stack maw={800} mr="auto" pt={20} pl={24} justify="center">
       
        <Title order={2}>Create your checklist !</Title>
       
  
  
     
        <Text>
         Try 30000
        </Text>
  
      
  
       
      </Stack>
    );
  }
  