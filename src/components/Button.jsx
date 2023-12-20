/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  if (props.type === "primary") {
    return (
      <div
        css={css`
          border: 1px solid;
          background-color: #074ee8;
          border-radius: 4px;
          padding: 0px, 16px, 0px, 16px;
          margin: 10px;
          color: white;
        `}
      >
        <h3>{props.text}</h3>
      </div>
    );
  } else if (props.type === "secondary") {
    return (
      <div
        css={css`
          border: 1px solid;
          background-color: #07a4e8;
          border-radius: 4px;
          padding: 0px, 16px, 0px, 16px;
          margin: 10px;
          color: white;
        `}
      >
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

export default Button;
