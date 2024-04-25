import React, { useState } from 'react';
import './App.css'
function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [num4, setNum4] = useState('');
  const [operation, setOperation] = useState('');
  const [assemblyCode, setAssemblyCode] = useState('');

  const generateAssemblyCode = () => {
    let code = '';
    switch (operation) {
      case 'addition':
        code = `
          MOV r0, ${num1}
          ADD r0, r0, ${num2}
          ADD r0, r0, ${num3}
          ADD r0, r0, ${num4}
        `;
        break;
      case 'subtraction':
        code = `
          MOV r0, ${num1}
          SUB r0, r0, ${num2}
          SUB r0, r0, ${num3}
          SUB r0, r0, ${num4}
        `;
        break;
      case 'multiplication':
        code = `
          MOV r0, ${num1}
          MUL r1, r0, ${num2}
          MUL r2, r1, ${num3}
          MUL r3, r2, ${num4}
        `;
        break;
      case 'division':
        code = `
          MOV r0, ${num1}
          MOV r1, ${num2}
          MOV r2, ${num3}
          MOV r3, ${num4}
          SDIV r0, r0, r1
          SDIV r0, r0, r2
          SDIV r0, r0, r3
        `;
        break;
      default:
        code = 'Invalid operation';
    }
    setAssemblyCode(code);
  };

  return (
    <div>
      <h1>ARM Assembly Code Generator</h1>
      <div>
        <label>Number 1: </label>
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      </div>
      <div>
        <label>Number 2: </label>
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      </div>
      <div>
        <label>Number 3: </label>
        <input type="number" value={num3} onChange={(e) => setNum3(e.target.value)} />
      </div>
      <div>
        <label>Number 4: </label>
        <input type="number" value={num4} onChange={(e) => setNum4(e.target.value)} />
      </div>
      <div>
        <label>Select Operation: </label>
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="">Select</option>
          <option value="addition">Addition</option>
          <option value="subtraction">Subtraction</option>
          <option value="multiplication">Multiplication</option>
          <option value="division">Division</option>
        </select>
      </div>
      <button onClick={generateAssemblyCode}>Submit</button>
      <div>
        <h2>Generated ARM Assembly Code</h2>
        <textarea
          value={assemblyCode}
          readOnly
          rows={10}
          cols={80}
        />
      </div>
    </div>
  );
}

export default App;
