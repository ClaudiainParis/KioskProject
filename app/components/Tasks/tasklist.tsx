import { Form } from "@remix-run/react";
import { HiTrash } from "react-icons/hi2";

export interface TaskListProps {
  state: any
  title: string
  id: string
  description: string
}

export function Tasklist({ state, title, id }: TaskListProps) {
  return (
  <>
    <div className="flex justify-between items-center">
      <div>
        <p className="text-md">{title}</p>
        <span className="text-xs bg-green-100 border px-2 py-1 rounded text-green-700">{state}</span>
      </div>
      <div>
        <Form method="post">
          <button
            className="button"
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