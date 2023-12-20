/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Alert(props) {
  if (props.type === "alert1") {
    return (
      <div
        css={css`
          border: 1px;
          background-color: #f9c8c8;
          border-radius: 10px;
          width: 650px;
          height: 76px;
          display: flex;
          justify-content: left;
          align-item: center;
          size: 20px;
          color: #444444;
          margin: 10px;
        `}
      >
        <img
          src="https://cdn.icon-icons.com/icons2/906/PNG/512/frown-face_icon-icons.com_70129.png"
          alt="frown"
        />
        <h3>{props.text}</h3>
      </div>
    );
  } else if (props.type === "alert2") {
    return (
      <div
        css={css`
          border: 1px;
          background-color: #f9d9c8;
          border-radius: 10px;
          width: 650px;
          height: 76px;
          display: flex;
          justify-content: left;
          align-item: center;
          size: 20px;
          color: #444444;
          margin: 10px;
        `}
      >
        <img
          src="https://cdn.icon-icons.com/icons2/2098/PNG/512/alert_triangle_icon_128962.png"
          alt="alert triangle"
        />
        <h3>{props.text}</h3>
      </div>
    );
  } else if (props.type === "alert3") {
    return (
      <div
        css={css`
          border: 1px;
          background-color: #f9ebc8;
          border-radius: 10px;
          width: 650px;
          height: 76px;
          display: flex;
          justify-content: left;
          align-item: center;
          size: 20px;
          color: #444444;
          margin: 10px;
        `}
      >
        <img
          src="https://cdn.icon-icons.com/icons2/2098/PNG/512/alert_circle_icon_128964.png"
          alt="Alert circle"
        />
        <h3>{props.text}</h3>
      </div>
    );
  } else if (props.type === "alert4") {
    return (
      <div
        css={css`
          border: 1px;
          background-color: #cef7cd;
          border-radius: 10px;
          width: 650px;
          height: 76px;
          display: flex;
          justify-content: left;
          align-item: center;
          size: 20px;
          color: #444444;
          margin: 10px;
        `}
      >
        <img
          src="https://cdn.icon-icons.com/icons2/2098/PNG/512/check_circle_icon_128923.png"
          alt="check circle"
        />
        <h3>{props.text}</h3>
      </div>
    );
  }

  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
}

export default Alert;
