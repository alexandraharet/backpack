import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 1a6 6 0 0 1 6 6 6 6 0 0 1-3.178 5.297c-.768.41-1.767.833-1.822 1.703v8c0 .5-.438 1-.969 1C11.5 23 11 22.5 11 22v-8c-.058-.87-1.03-1.285-1.8-1.693A6 6 0 0 1 12 1z" /></svg>);