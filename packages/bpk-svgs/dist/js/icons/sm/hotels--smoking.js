import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M3 3a1.5 1.5 0 1 1 3 0v1.5a3 3 0 0 0 3 3h.803A5.972 5.972 0 0 1 9 4.5V3a1.5 1.5 0 1 1 3 0v1.5a3 3 0 0 0 3 3h1.5A4.5 4.5 0 0 1 21 12a1.5 1.5 0 0 1-3 0 1.5 1.5 0 0 0-1.5-1.5H9a6 6 0 0 1-6-6V3z" /><path fillRule="evenodd" d="M1.5 18a3 3 0 0 1 3-3h15a3 3 0 1 1 0 6h-15a3 3 0 0 1-3-3zM15 18a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 0 3h-3A1.5 1.5 0 0 1 15 18z" clipRule="evenodd" /></svg>);