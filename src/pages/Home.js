import React from 'react';

// TODO: Replace placeholder values with actual student and lab identifiers
const STUDENT_ID = 'STUDENT_ID_PLACEHOLDER';
const LAB_ID = 'LAB_ID_PLACEHOLDER';

function Home() {
  return (
    <div>
      <h1>Stack Track Lab</h1>
      <p>Student ID: {STUDENT_ID}</p>
      <p>Lab ID: {LAB_ID}</p>

      {/* TODO: Replace this placeholder with your question set UI */}
      <p>QuestionComponent placeholder — implement your assigned question set here.</p>

    </div>
  );
}

export default Home;
