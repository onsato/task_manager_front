export type ProjectData = {
    id: number,
    name: string,
    date: Date
  }

export type TaskData = {
  id: number,
  name: string,
  date: Date,
  taskType: number,
  projectId: number
}

export type TaskDetail = {
  id: number,
  name: string,
  deadLine: Date,
  message: string,
}