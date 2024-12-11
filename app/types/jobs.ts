export interface TaskData {
    title: any;
    state: States | any;
    owner: any;
    createdBy: any;
    // description: any
}

export const states = [
    {name: "To Do", value: "TODO"},
    {name: "Doing", value: "DOING"},
    {name: "Done", value: "DONE"}
]

export type States = (typeof states)[number]["value"]