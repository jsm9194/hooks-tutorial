import { Component } from "react";

class Forminput extends Component {
  state = {
    id: "",
    password: "",
    jumin1: "",
    jumin2: "",
    tel1: "",
    tel2: "",
    tel3: "",
  };

  onChange = (e) => {
    setTimeout(() => console.log(e), 500);
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name, ":", e.target.value);
  };

  // alert(
  //   `'<table>'
  // '<tr>'아이디 : ${this.state.id} '</tr>'
  // '<tr>'비밀번호 : ${this.state.password} '</tr>'
  // '<tr>'주민번호 : ${this.state.jumin1} - ${this.state.jumin2} '</tr>'
  // '<tr>'전화번호 : ${this.state.tel1} - ${this.state.tel2} - ${this.state.tel3}'</tr>'
  // '</table>'`
  // );

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.name == "id") {
        this.input_password.focus();
      } else if (e.target.name == "password") {
        this.input_jumin1.focus();
      } else if (e.target.name == "jumin1") {
        this.input_jumin2.focus();
      } else if (e.target.name == "jumin2") {
        this.input_tel1.focus();
      } else if (e.target.name == "tel1") {
        this.input_tel2.focus();
      } else if (e.target.name == "tel2") {
        this.input_tel3.focus();
      } else if (e.target.name == "tel3") {
        this.input_btn.focus();
      }
    }
  };

  handleClick = () => {
    alert(
      "아이디: " +
        this.state.id +
        "\n" +
        "비밀번호: " +
        this.state.password +
        "\n" +
        "주민번호: " +
        this.state.jumin1 +
        "-" +
        this.state.jumin2 +
        "\n" +
        "번호: " +
        this.state.tel1 +
        "-" +
        this.state.tel2 +
        "-" +
        this.state.tel3
    );
    this.setState({
      id: "",
      password: "",
      jumin1: "",
      jumin2: "",
      tel1: "",
      tel2: "",
      tel3: "",
    });
  };

  render() {
    return (
      <div>
        <table align="center" border="1">
          <thead>
            <tr>
              <td width="110">아이디</td>
              <td width="400">
                <input
                  type="text"
                  name="id"
                  value={this.state.id}
                  size="30"
                  maxLength="6"
                  onKeyPress={this.handleKeyPress}
                  onChange={this.onChange}
                  ref={(ref) => {
                    this.input_id = ref;
                  }}
                />
              </td>
            </tr>
            <tr>
              <td width="110">비밀번호</td>
              <td width="400">
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onKeyPress={this.handleKeyPress}
                  size="30"
                  onChange={this.onChange}
                  ref={(ref) => {
                    this.input_password = ref;
                  }}
                />
              </td>
            </tr>
            <tr>
              <td width="110">주민번호</td>
              <td width="400">
                <input
                  type="text"
                  name="jumin1"
                  value={this.state.jumin1}
                  size="6"
                  maxLength="6"
                  onChange={this.onChange}
                  onKeyPress={this.handleKeyPress}
                  ref={(ref) => {
                    this.input_jumin1 = ref;
                  }}
                />
                &nbsp;-&nbsp;
                <input
                  type="text"
                  name="jumin2"
                  value={this.state.jumin2}
                  size="7"
                  maxLength="7"
                  onChange={this.onChange}
                  onKeyPress={this.handleKeyPress}
                  ref={(ref) => {
                    this.input_jumin2 = ref;
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>전화번호</td>
              <td>
                <input
                  type="tel"
                  name="tel1"
                  value={this.state.tel1}
                  size="3"
                  maxLength="3"
                  onChange={this.onChange}
                  onKeyPress={this.handleKeyPress}
                  ref={(ref) => {
                    this.input_tel1 = ref;
                  }}
                />
                &nbsp;- &nbsp;
                <input
                  type="tel"
                  name="tel2"
                  value={this.state.tel2}
                  size="4"
                  maxLength="4"
                  onChange={this.onChange}
                  onKeyPress={this.handleKeyPress}
                  ref={(ref) => {
                    this.input_tel2 = ref;
                  }}
                />
                &nbsp;- &nbsp;
                <input
                  type="tel"
                  name="tel3"
                  value={this.state.tel3}
                  size="4"
                  maxLength="4"
                  onChange={this.onChange}
                  onKeyPress={this.handleKeyPress}
                  ref={(ref) => {
                    this.input_tel3 = ref;
                  }}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="center" width="500">
                <button
                  onClick={this.handleClick}
                  ref={(ref) => {
                    this.input_btn = ref;
                  }}
                >
                  확인
                </button>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default Forminput;
