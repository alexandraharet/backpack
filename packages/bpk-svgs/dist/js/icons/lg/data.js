import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M20.883 10c.596 0 1.064-.52.926-1.1a9.076 9.076 0 0 0-6.71-6.71C14.52 2.054 14 2.52 14 3.118V9a1 1 0 0 0 1 1h5.883z" /><path d="M20 12c.552 0 1.006.45.945.998a9.001 9.001 0 1 1-9.943-9.943c.549-.06.998.393.998.945v6a2 2 0 0 0 2 2h6z" /></svg>);