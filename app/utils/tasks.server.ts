import { prisma } from "./prisma.server";
import { json } from "@remix-run/node";
import { TaskData } from "../types/jobs"

export const getAllTasks = async (userId: string) => {
    const taskById = await prisma.user.findUnique({
        where: {
          id: userId,
        },
        include: {
          task: {
            orderBy: {
              createdAt: "desc",
            },
          },
        },
      });
      return taskById;
  
    }

    export const createTask = async ({title, state, owner, createdBy} : TaskData) => {
        const taskById = await prisma.task.create({
          data: {
            title, 
            state, 
            owner,
            createdBy: {
              connect: {id: createdBy.id}
            },
          }, 
        });
        if(!taskById){
          return json({error: 'Could not post the task'})
        }
        console.log(taskById);
        return  json({
          message: "Task created successfully",
          success: "true",
          payload: taskById,
        }) 
      }
      
      export const deleteTask = async (id: any) => {
        const taskById = await prisma.task.delete({ where: { id } });
        if(!taskById){
          return json({error: 'Could not post the task'})
        }
        return json({
          message: "Task deleted",
          success: "true",
          payload: id,
        })
      }




