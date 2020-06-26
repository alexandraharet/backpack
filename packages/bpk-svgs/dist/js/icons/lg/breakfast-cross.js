import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path fillRule="evenodd" d="M8 2a2 2 0 0 0-2 2v12a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2.5c0-.276.225-.497.499-.53a4 4 0 0 0 0-7.94C18.225 4.998 18 4.777 18 4.5V4a2 2 0 0 0-2-2H8zm10.495 8.938c-.268.068-.495-.162-.495-.438v-3c0-.276.227-.506.495-.438a2 2 0 0 1 0 3.876zM9.282 8.641a.961.961 0 1 1 1.359-1.36L12 8.642l1.36-1.36a.961.961 0 0 1 1.359 1.36L13.359 10l1.36 1.36a.961.961 0 0 1-1.36 1.359L12 11.359l-1.36 1.36a.961.961 0 0 1-1.358-1.36L10.64 10 9.28 8.64z" clipRule="evenodd" /><path d="M5 20a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5z" /></svg>);