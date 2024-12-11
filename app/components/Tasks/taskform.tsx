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
import { states } from '../../types/jobs'

export function Taskform() {
  return (
    <>
      <Form method="post">
        <div>
          <label>
            Category
          </label>
          <Space h="lg" />
          <select
            name="state"
            id="state"
            defaultValue={states[0].name}
          >
            {states.map((state, index) => {
              return(
                <option key={index} value={state.value}>
                  {state.name}
                </option>
              )
            })}
          </select>
          <Space h="lg" />
        </div>
        <div>
          <label>
            Task
          </label>
          <Space h="lg" />
          <textarea
            name="title"
            id="title" 
            />
        </div>
        <Space h="lg" />
        <div>
          <label htmlFor="task">
            Done by?
          </label>
          <Space h="lg" />
          <textarea
            name="owner"
            id="owner" 
            />
        </div>
        <Space h="lg" />
        <div>
          <button
            type="submit"
            name="action"
            value="new" 
            >
            Add task
          </button>
        </div>
      </Form>
    </>
  )
}