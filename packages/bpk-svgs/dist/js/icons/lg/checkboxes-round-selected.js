import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm4.707-12.142a1.16 1.16 0 0 0 0-1.54.944.944 0 0 0-1.414 0l-4.357 4.743-2.299-2.068c-.426-.383-1.056-.317-1.408.146-.352.463-.292 1.15.134 1.532L11.064 16l5.643-6.142z" clipRule="evenodd" /></svg>);