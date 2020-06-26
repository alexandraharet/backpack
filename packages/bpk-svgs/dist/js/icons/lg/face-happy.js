import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm5.114-3.074a1.5 1.5 0 1 1 2.771 1.148 1.5 1.5 0 0 1-2.771-1.148zm8.386-.927a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-6.668 6.446a1 1 0 0 0-1.664 1.11C8.403 17.407 10.228 18 12 18c1.771 0 3.597-.593 4.832-2.445a1 1 0 1 0-1.664-1.11C14.403 15.593 13.302 16 12 16s-2.403-.407-3.168-1.555z" clipRule="evenodd" /></svg>);