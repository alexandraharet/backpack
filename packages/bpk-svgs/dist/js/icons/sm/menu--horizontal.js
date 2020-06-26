import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M6 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm9 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>);