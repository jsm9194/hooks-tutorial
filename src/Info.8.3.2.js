import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    //복사
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  //비구조화 할당으로 대입
  //name = name, nickname = nickname
  const onChange = (e) => {
    console.log(e.target);
    dispatch(e.target);
    //target= 이벤트가발생한객체
    //입력객체를 파라미터로 전달
  };

  return (
    <div className="info">
      <div className="">
        <input name="name" onChange={onChange} value={name} />
        <input name="nickname" onChange={onChange} value={nickname} />
      </div>
      <div>
        <div>
          <b>Name:</b> <code>{name}</code>
        </div>
        <div>
          <b>Nickname:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
