import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path fillRule="evenodd" d="M15 2.546c0-.58-.453-1.05-1.012-1.05h-3.976c-.559 0-1.012.47-1.012 1.05v4.881a4.33 4.33 0 0 1-.404 1.83l-3.79 8.722C3.832 20.07 5.3 22.5 7.54 22.5h8.92c2.24 0 3.709-2.43 2.733-4.521l-3.79-8.727A4.33 4.33 0 0 1 15 7.423V2.546zm-.81 7.659a.75.75 0 0 0-1.38.59l2.25 5.25a.75.75 0 0 0 1.38-.59l-2.25-5.25z" clipRule="evenodd" /></svg>);