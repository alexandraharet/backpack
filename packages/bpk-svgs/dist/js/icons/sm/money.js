import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path fillRule="evenodd" d="M3 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H3zm9 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-9-3a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm16.5 1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" clipRule="evenodd" /></svg>);