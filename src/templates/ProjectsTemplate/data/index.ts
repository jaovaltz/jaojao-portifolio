const todoAppGif = require('global/imgs/todo-list-images/todo-list.gif')
const financeGif = require('global/imgs/finance-project-images/finances.gif')
const realTimeChatGif = require('global/imgs/realtime-chat-images/chat.gif')

type ProjectSummaryData = {
  title: string
  description: string
  img: string
  align: 'end' | 'start'
}

export const projectsSummaryData: ProjectSummaryData[] = [
  {
    title: 'A todo list app',
    description: `In this project, i made a todo list app, where you can add and remove tasks,
    and also mark them as done. I used React with Typescript in the front-end and Django-Rest
    framework for the back-end.`,
    img: todoAppGif,
    align: 'start'
  },
  {
    title: 'A real-time chat app',
    description: `This project was made using React with Typescript in the front-end and 
    Node with Mongodb for the back-end. It's a real-time chat app, where you can create an account
    and start chating with your friends!`,
    img: realTimeChatGif,
    align: 'end'
  },
  {
    title: 'Finance control app',
    description: `The Finance Control App was made using React with Typescript in the front-end
    and a simple Json-Server for simulating a back-end. Is a simple app where you can add, remove and edit
    your incomes and expenses.`,
    img: financeGif,
    align: 'start'
  }
]
