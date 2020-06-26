import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M10.5 12v-1.5h2.25a.75.75 0 0 1 0 1.5H10.5z" /><path fillRule="evenodd" d="M12 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5 1.5 6.201 1.5 12 6.201 22.5 12 22.5zM7.5 9A1.5 1.5 0 0 1 9 7.5h3.75a3.75 3.75 0 1 1 0 7.5H10.5v1.5a1.5 1.5 0 0 1-3 0V9z" clipRule="evenodd" /></svg>);