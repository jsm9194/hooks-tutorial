import { useState, useEffect } from "react";

const Info = () => {
  // const [name, setName] = useState("");
  // const [nickname, setNickname] = useState("");

  const [data, setData] = useState({
    name: "",
    nickname: "",
    firstName: "",
  });

  //랜더링 될때마다 수행
  // console.log("랜더링이 완료되었습니다!");
  // console.log({
  //   name,
  //   nickname,
  //   firstName,
  // });

  // useEffect(() => {
  //   console.log("effect");
  //   console.log(data.name);
  //   return () => {
  //     console.log("cleanup");
  //     console.log(data.name);
  //   };
  // }, [data.name]);
  //p195

  useEffect(() => {
    console.log("effect");
    return () => {
      console.log("unmount");
    };
  }, []);
  const { name, nickname, firstName } = data;

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };

  // const onChangeNickname = (e) => {
  //   setNickname(e.target.value);
  // };

  const onChange = (e) => {
    const nextData = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(nextData);
  };

  return (
    <div className="info">
      <div className="">
        <input name="name" onChange={onChange} />
        <input name="nickname" onChange={onChange} />
        <input name="firstName" onChange={onChange} />
      </div>
      <div>
        <div>
          <b>Name:</b> <code>{name}</code>
        </div>
        <div>
          <b>Nickname:</b> {nickname}
        </div>
        <div>
          <b>firstName:</b> {firstName}
        </div>
      </div>
    </div>
  );
};

export default Info;
