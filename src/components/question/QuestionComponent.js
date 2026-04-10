import React from 'react';
import { useState, useEffect } from 'react';
import {getTasks} from "../../api/client";
import { useSearchParams } from 'react-router-dom';

// TODO: Import any API functions you need from '../../api/client'
// Example: import { get, post } from '../../api/client';

function QuestionComponent() {
  // TODO: Define state variables needed for your question set
  const [tasks, setTasks] = useState([]);
  const[searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status") || "pending";

  // TODO: Implement data fetching inside a useEffect hook
  useEffect(() => {
    const fetchTasks = async () => {
      getTasks(status).then((data) => {
        console.log(data);
        setTasks(Array.isArray(data) ? data : []);
      }).catch((error) => {
        console.error("Error fetching tasks:", error);
      });
    };
    fetchTasks();
  }, [status]);

  const handleFilter = (newStatus) => {
    setSearchParams({ status: newStatus });
  };

  // TODO: Implement any event handlers required by your question set
  

  return (
    <div>
      {/* TODO: Replace this placeholder with your question set UI */}
      {/* <p>QuestionComponent placeholder — implement your assigned question set here.</p> */}
      <h2>Filter Tasks</h2>
      <button onClick={() => handleFilter("pending")}>Pending</button>
      <button onClick={() => handleFilter("completed")}>Completed</button>
      {Array.isArray(tasks) &&
      tasks.map((t)=>
        <div key={t.id}>
          <h3>{t.title}</h3>
          <p>{t.description}</p>
          <p>{t.status}</p>
        </div>
      )}
      {/* TODO: Render fetched data or form elements as required */}
    </div>
  );
}

export default QuestionComponent;
