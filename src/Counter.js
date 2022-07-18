// import { useState } from "react";

// const Counter = () => {
//   const [value, setValue] = useState(0);

//   return (
//     <div>
//       <p>
//         현재 카운터 값은<b>{value}입니다.</b>
//       </p>
//       <button onClick={() => setValue(value + 1)}> +1 </button>
//       {/*익명이기때문에 여기서만 사용 */}
//       <button onClick={() => setValue(value - 1)}> -1 </button>
//     </div>
//   );
// };

// export default Counter;

//p200 카운터 수정werwer
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은<b>{state.value}입니다.</b>
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}> +1 </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}> -1 </button>
    </div>
  );
};

export default Counter;
