import React from 'react';
import QuestionComponent from "../components/question/QuestionComponent";

// TODO: Replace placeholder values with actual student and lab identifiers
const STUDENT_ID = '23WH1A0556';
const LAB_ID = 'FSDLAB2';

function Home() {
  return (
    <div>
      <h1>Stack Track Lab</h1>
      <p>Student ID: {STUDENT_ID}</p>
      <p>Lab ID: {LAB_ID}</p>

      {/* TODO: Replace this placeholder with your question set UI */}
      {/* <p>QuestionComponent placeholder — implement your assigned question set here.</p> */}
      <QuestionComponent/>
    </div>
  );
}

export default Home;
