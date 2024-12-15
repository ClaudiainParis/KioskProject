import { Form } from "@remix-run/react";
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

export function Tasklist({state, title, id }: TaskListProps) {
  return (
  <>
    <div>
      <div>
        <p >{title}</p>
        <span>{state}</span>
      </div>
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
  </>
  )
}