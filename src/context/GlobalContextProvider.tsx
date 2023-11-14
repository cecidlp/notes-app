import React, { useState, useContext, createContext, ChangeEvent, ReactNode,  Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

export interface ITask {
  taskName: string;
  deadline: number;
}

interface IGlobalContext {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  addTask: () => void;
  task: string;
  deadline: number;
  todoList: ITask[];
  setTodoList: Dispatch<SetStateAction<ITask[]>>;
}

interface IGlobalContextProviderProps {
  children: ReactNode;
}

const GlobalContext = createContext<IGlobalContext | undefined>(undefined);

export const GlobalContextProvider = ({ children }: IGlobalContextProviderProps) => {
  const navigate = useNavigate();

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'task') {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
        return task.taskName != taskNameToDelete
    }))
} 

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    console.log(todoList);
    setTask("");
    setDeadline(0);
    navigate("/");
  };

  return (
    <GlobalContext.Provider value={{ handleChange, addTask, task, deadline, todoList, setTodoList }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext)