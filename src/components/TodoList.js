import React, { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";
import EditTask from "../modals/EditTask";

const TodoList = () => {
  const [editModal, setEditModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    // tempList.splice(index, 1);
    const filteredList = tempList.filter((i, index2) => index !== index2);
    localStorage.setItem("taskList", JSON.stringify(filteredList));
    setTaskList(filteredList);
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
  };

  const createToggle = () => {
    setCreateModal(!createModal);
  };

  const editToggle = () => {
    setEditModal(!editModal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;

    // setItemArr((prev) => [...prev, item]);
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setCreateModal(false);

    setTaskList(taskList);
  };
  const addItem = (item, index) => {
    if (item.length > 0) {
      let tempList = taskList;

      tempList[index].todos.push(item);

      localStorage.setItem("taskList", JSON.stringify(tempList));
      setTaskList((prev) => {
        prev[index].todos.push(item);
        prev[index].todos.splice(-1, 1);
        return [...prev];
      });
    }
  };

  const deleteTaskItem = (taskObj, itemIndex, index) => {
    let lastArr = [];
    lastArr = taskObj.todos.filter((e, i) => i !== itemIndex);
    taskObj.todos = lastArr;
    let tempList = taskList;
    tempList[index] = taskObj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList([...tempList]);
  };

  return (
    <>
      <div className="head-content text-center">
        <h3>Patika.dev</h3>
        <button
          className="btn btn-primary mt-2"
          onClick={() => setCreateModal(true)}
        >
          Create Project
        </button>
      </div>
      <div className="task-container">
        {taskList &&
          taskList.map((obj, index) => (
            <Card
              key={Math.random()}
              taskObj={obj}
              index={index}
              addItem={addItem}
              deleteTask={deleteTask}
              deleteTaskItem={deleteTaskItem}
              updateListArray={updateListArray}
              editItem={() => {
                setSelectedItemIndex(index);
                editToggle();
              }}
            />
          ))}
      </div>
      <CreateTask toggle={createToggle} modal={createModal} save={saveTask} />
      {editModal && (
        <EditTask
          modal={editModal}
          toggle={editToggle}
          updateTask={(obj, index) => updateListArray(obj, index)}
          taskObj={taskList[selectedItemIndex]}
          index={selectedItemIndex}
        />
      )}
    </>
  );
};

export default TodoList;
