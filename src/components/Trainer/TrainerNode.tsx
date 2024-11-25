import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useWallet } from "../hooks/useWallet";
import { TaskSummery } from "../types/Tasks";
import { Form } from "react-router-dom";
// import styles from "./TrainerNode.module.css";

interface Task {
  taskID: number;
  taskName: string;
}

const TrainerNode = () => {
  const [tasks, setTasks] = useState<TaskSummery[]>([]);
  const [selectedTask, setSelectedTask] = useState<number | null>(null);
  const { callChainFunction, connectWallet } = useWallet();

  useEffect(() => {
    // Fetch tasks from API or blockchain
    const fetchTasks = async () => {
      const result = await callChainFunction("getTasks");
      if (!result.success) {
        alert(`Transaction failed: ${result.error.message}`);
      } else {
        const response = result.result;
        alert("Transaction successful!" + response);
        console.log("Available response:", response);
        if (response && response[0] && Array.isArray(response[0])) {
          const tasks = response[0].map((_, i: number) => ({
            id: response[0][i].toString(),
            description: response[1][i],
            isActive: response[2][i],
            assignedTo: response[3][i],
          }));
          console.log(tasks.length);
          setTasks(tasks);
        } else {
          console.error("Invalid response from getTasks");
        }
      }
    };
    fetchTasks();
  }, []);

  const handleTaskChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTask(parseInt(event.target.value));
  };

  return (
    <div className="dropdown show">
      <h2>Trainer Node</h2>
      <select value={selectedTask} onChange={handleTaskChange}>
        <option value="">Select a task</option>
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <option key={task.id} value={task.id}>
              {task.description}
            </option>
          ))
        ) : (
          <option disabled>No tasks available</option>
        )}
      </select>
      {selectedTask && (
        <div>
          <h3>Selected Task: {selectedTask}</h3>
          {/* Render task details or perform actions here */}
        </div>
      )}
    </div>
  );
};

export default TrainerNode;
