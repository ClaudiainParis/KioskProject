import { Form } from "@remix-run/react";
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
import { HiTrash } from "react-icons/hi2";

export interface TaskListProps {
  state: any
  title: string
  id: string
  owner: string
  // taskId : string
  // createdBy: any
  // description: string
}

export function Tasklist({state, title, id, owner }: TaskListProps) {
  return (
  <>
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px",}}>
        <p style={{ color: "#08B",fontWeight: "bold"  }}>{title}</p>
        <Space />
        <span>{state}</span>
        <Space />
        <p style={{ color: "#09B"  }}> Done by {owner}</p>

      <div>
        <Form method="post">
          <button
            name="action"
            type="submit"
            value="delete"
          >
            <HiTrash/>
          </button>
          <input type="hidden" name="id" value={id} />
        </Form>
        </div>
      </div>
    </div>
  </>
  )
}