import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M10.5 3a1.5 1.5 0 1 0-3 0v11.25a2.25 2.25 0 0 0 2.25 2.25h3.75a3 3 0 0 1 3 3V21a1.5 1.5 0 0 0 3 0v-1.5a6 6 0 0 0-6-6h-3V3z" /><path d="M4.5 4.5A1.5 1.5 0 0 1 6 6v9a3 3 0 0 0 3 3h4.5a1.5 1.5 0 0 1 0 3H9a6 6 0 0 1-6-6V6a1.5 1.5 0 0 1 1.5-1.5z" /></svg>);