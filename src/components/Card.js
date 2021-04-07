import React, { useState } from "react";

const Card = ({
  taskObj,
  index,
  deleteTask,
  updateListArray,
  editItem,
  addItem,
  deleteTaskItem,
}) => {
  const [itemValue, setItemValue] = useState("");

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  return (
    <div className="card-wrapper m-4">
      <div
        className="card-top"
        style={{ backgroundColor: colors[index % 5].primaryColor }}
      ></div>
      <div className="task-holder">
        <span
          className="card-header"
          style={{
            backgroundColor: colors[index % 5].secondaryColor,
            borderRadius: "10px",
          }}
        >
          {taskObj.Name}
        </span>
        <p className="mt-3" style={{ overflow: "auto", marginBottom: "16px" }}>
          {taskObj.Description}
        </p>

        <div
          className="mt-3"
          style={{ overflow: "auto", marginBottom: "10px" }}
        >
          <div className="add-item-input">
            <input
              type="text"
              value={itemValue}
              onChange={(text) => {
                setItemValue(text.target.value);
              }}
              className="form-control "
              placeholder="Add a item"
            />

            <button
              type="button"
              className="btn btn-success"
              onClick={() => addItem(itemValue, index)}
            >
              +
            </button>
          </div>
        </div>

        {/* Adding card item part  */}
        <div className="card-list-item-wrapper">
          {taskObj.todos.map((item, itemIndex) => {
            return (
              <>
                <div className="card-list-item" key={itemIndex}>
                  <div>{item}</div>
                  <div
                    onClick={() => deleteTaskItem(taskObj, itemIndex, index)}
                  >
                    <i className="fas fa-times icons"></i>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i
            className="far fa-edit mr-3"
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
            onClick={() => editItem(index)}
          ></i>
          <i
            className="fas fa-trash-alt"
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
            onClick={() => deleteTask(index)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
