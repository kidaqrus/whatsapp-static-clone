import React from "react";
import ReactDOM from "react-dom";
import "./Icons";
import "./styles.css";

function Whatsapp() {
  return (
    <div className="tweet">
      <AppName />
      <CameraIcon />
      <Chat />
      <Status />
      <Calls />
      <SearchIcon />
      <MoreOption />
      <Avatar />
    </div>
  );
}

function AppName() {
  return (
    <div className="appname">
      <h4>Whatsapp</h4>
    </div>
  );
}

function CameraIcon() {
  return (
    <img
      src="https://media.flaticon.com/dist/min/img/uicons/icons/rounded/regular/fi-rr-camera.svg"
      alt="noimage"
      className="camera"
    />
  );
}

function Chat() {
  return (
    <a href="#" className="link" style={{ color: "black" }}>
      <h4
        className="chat"
        style={{ position: "absolute", top: "30px", left: "60px" }}
      >
        CHATS
      </h4>
    </a>
  );
}

function Status() {
  return (
    <h4
      className="status"
      style={{ position: "absolute", top: "30px", left: "140px" }}
    >
      STATUS
    </h4>
  );
}

function Calls() {
  return (
    <h4
      className="calls"
      style={{ position: "absolute", top: "30px", right: "160px" }}
    >
      CALLS
    </h4>
  );
}

function SearchIcon() {
  return (
    <img
      className="searchicon"
      src="https://media.flaticon.com/dist/min/img/uicons/icons/rounded/regular/fi-rr-zoom-in.svg"
      alt="noImage"
      style={{ height: "20px", position: "absolute", left: "250px" }}
    />
  );
}
function MoreOption() {
  return (
    <img
      className="moreoption"
      style={{ height: "25px", position: "absolute", left: "280px" }}
      src="https://media.flaticon.com/dist/min/img/uicons/icons/rounded/regular/fi-rr-menu-dots-vertical.svg"
      alt="noImage"
    />
  );
}
function Avatar() {
  return (
    <img
      src="data:image/jpeg;base64,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"
      className="avatar"
      style={{
        height: "50px",
        position: "absolute",
        top: "90px",
        border: "1px solid ",
        borderRadius: "40px"
      }}
      alt="noImage"
    />
  );
}
ReactDOM.render(<Whatsapp />, document.querySelector("#root"));
