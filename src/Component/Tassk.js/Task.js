// import React ,{useStates}from 'react'

// const Task = () => {
//     const [userInput, setUserInput] = useState('');
//     const [countingNumbers, setCountingNumbers] = useState([]);

//     const handleInputChange = (e) => {
//         setUserInput(e.target.value);
//     }

//     const generateCountingNumbers = () => {
//         const parsedInput = parseInt(userInput);
//         if (!isNaN(parsedInput) && parsedInput > 0) {
//             const numbers = [];
//             for (let i = 1; i <= parsedInput; i++) {
//                 if (i % 10 === 0) {
//                     numbers.push(i);
//                 } else {
//                     numbers.push(i);
//                 }
//             }
//             setCountingNumbers(numbers);
//         } else {
//             alert('Please enter a valid number greater than 0.');
//         }
//     }
//     return (
//         <div>
//             <input type='number' placeholder='number' value={userInput}
//         onChange={handleInputChange}/>
//             <button onClick={generateCountingNumbers}>Click me</button>
//             <div>
//         {countingNumbers.map((number, index) => (
//           <span key={index}>{number}&nbsp;</span>
//         ))}
//       </div>
//         </div>
//     )
// }

// export default Task

