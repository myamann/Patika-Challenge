import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTaskPopup = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [check, setCheck] = useState(false);
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = (e) => {
    if (taskName.length > 0 && description.length > 0) {
      e.preventDefault();
      let taskObj = {};
      taskObj["Name"] = taskName;
      taskObj["Description"] = description;
      taskObj["check"] = check;
      taskObj["todos"] = todos;
      save(taskObj);
      setTaskName("");
      setDescription("");
      setCheck(false);
      setTodos([]);
    }
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Project</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Project Name</label>
          <input
            type="text"
            required
            className="form-control"
            value={taskName}
            onChange={handleChange}
            name="taskName"
            maxLength="18"
            placeholder="What is your project title."
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="5"
            required
            className="form-control"
            value={description}
            onChange={handleChange}
            name="description"
            maxLength="25"
            placeholder="Enter a short description about your project..."
          ></textarea>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTaskPopup;
