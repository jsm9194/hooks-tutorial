import { useReducer } from "react";

const Forminput = () => {
  // function reducer(state, action) {
  //   return {
  //     ...state,
  //     [action.name]: action.value,
  //   };
  // }

  function reducer(state, action) {
    console.log(action.name);
    if (action.name === "btn") {
      return Form_init;
    } else {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
  }

  const Form_init = {
    id: "",
    password: "",
    jumin1: "",
    jumin2: "",
    tel1: "",
    tel2: "",
    tel3: "",
  };

  const [state, dispatch] = useReducer(reducer, Form_init);

  const { id, password, jumin1, jumin2, tel1, tel2, tel3 } = state;

  const onChange = (e) => {
    console.log(e.target);
    dispatch(e.target);
  };

  const onClick = () => {
    alert(`
아이디 : ${id} 
비밀번호 : ${password} 
주민번호 : ${jumin1} - ${jumin2} 
전화번호 : ${tel1} - ${tel2} - ${tel3}
    `);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log(e.target);
      onClick();
    }
  };

  return (
    <div className="form">
      <h1 align="center">asdasfdasfdasfa</h1>
      <table align="center" border="1">
        <thead className="code">
          <tr>
            <td width="110">아이디</td>
            <td width="400">
              <input
                className="ball"
                type="text"
                name="id"
                value={id}
                size="30"
                maxLength="6"
                onChange={onChange}
                onKeyPress={onKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td width="400">
              <input
                className="ball"
                type="password"
                name="password"
                value={password}
                size="30"
                onChange={onChange}
                onKeyPress={onKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td width="110">주민번호</td>
            <td width="400">
              <input
                className="ball"
                type="text"
                name="jumin1"
                value={jumin1}
                size="6"
                maxLength="6"
                onChange={onChange}
                onKeyPress={onKeyPress}
              />
              &nbsp;-&nbsp;
              <input
                className="ball"
                type="text"
                name="jumin2"
                value={jumin2}
                size="7"
                maxLength="7"
                onChange={onChange}
                onKeyPress={onKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td width={20}>
              <input
                className="ball"
                type="tel"
                name="tel1"
                value={tel1}
                size="3"
                maxLength="3"
                onChange={onChange}
                onKeyPress={onKeyPress}
              />
              &nbsp; ➡ &nbsp;
              <input
                className="ball"
                type="tel"
                name="tel2"
                value={tel2}
                size="4"
                maxLength="4"
                onChange={onChange}
                onKeyPress={onKeyPress}
              />
              &nbsp; ➡ &nbsp;
              <input
                className="ball"
                type="tel"
                name="tel3"
                value={tel3}
                size="4"
                maxLength="4"
                onChange={onChange}
                onKeyPress={onKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center" width="400">
              <button onClick={onClick} className="ball">
                확인
              </button>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Forminput;
