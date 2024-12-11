import { Form } from "@remix-run/react";
import { states } from '../../types/jobs'

export function Taskform() {
  return (
    <>
      <Form method="post">
        <div className="mb-5">
          <label className="font-semibold mb-2 block" htmlFor="state">
            Category
          </label>

          <select
            name="state"
            id="state"
            className="border-2 w-full rounded-md mr-8 border-gray-600 px-3 py-1 h-9"
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
        </div>
        <div className="mb-5">
          <label className="font-semibold mb-2 block" htmlFor="task">
            Task
          </label>
          <textarea
            name="title"
            id="title"
            className="w-full border-2 rounded-md mr-8 border-gray-600 px-3 py-1"
          />
        </div>
        <div className="mb-5">
          <label className="font-semibold mb-2 block" htmlFor="task">
            Done by?
          </label>
          <textarea
            name="owner"
            id="owner"
            className="w-full border-2 rounded-md mr-8 border-gray-600 px-3 py-1"
          />
        </div>
        <div>
          <button
            type="submit"
            name="action"
            value="new" className="w-full rounded-xl bg-red-500 px-3 py-2 text-white font-semibold transition duration-300 ease-in-out hover:bg-red-600" >
            Add task
          </button>
        </div>
      </Form>
    </>
  )
}