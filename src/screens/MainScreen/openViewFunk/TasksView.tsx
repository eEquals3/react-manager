import React, {
  memo,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import "./OpenViewFunkStyles.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentTask, getTasks } from "../../../redux/selectors";
import { setCurrentTask, addTask } from "../../../redux/taskSlice";
import { TaskElement } from "./TaskElement";
import { PlusIcon } from "../../../component/CommonComponent/Icons/PlusIcon";

const TasksView = (): ReactElement => {
  const tasks = useSelector(getTasks);
  const currentTask = useSelector(getCurrentTask);
  const dispatch = useDispatch();

  useEffect(() => console.log(tasks), [currentTask]);

  const onTaskPress = useCallback(
    (taskByIdFunc: string) => dispatch(setCurrentTask(taskByIdFunc)),
    []
  );

  const renderTaskElement = useCallback(
    (taskId: string) => {
      const taskById = tasks[taskId];

      return (
        <TaskElement
          taskId={taskId}
          task={taskById}
          onTaskPress={onTaskPress}
        />
      );
    },
    [tasks]
  );

  const taskList = useMemo(
    () => Object.keys(tasks).map(renderTaskElement),
    [tasks, renderTaskElement]
  );

  const currentTaskName = useMemo(() => {
    return tasks[currentTask]?.name;
  }, [tasks, currentTask]);

  const currentTaskDescription = useMemo(() => {
    return tasks[currentTask]?.description;
  }, [tasks, currentTask]);

  const addNewTask = useCallback(() => {
    return dispatch(
      addTask({
        id: crypto.randomUUID(),
        task: { name: "new", description: "123" },
      })
    );
  }, []);

  return (
    <>
      <div id="viewHeader" className="box-shadow">
        Задачи
      </div>
      <PlusIcon size={20} onPress={addNewTask}></PlusIcon>
      <div className="TaskCenterContent">
        <div>
          <header> Список задач </header>
          <div dir="ltr">{taskList}</div>
        </div>
        <div>
          <header> {currentTaskName} </header>
          <text> {currentTaskDescription} </text>
        </div>
      </div>
    </>
  );
};

export default memo(TasksView);
