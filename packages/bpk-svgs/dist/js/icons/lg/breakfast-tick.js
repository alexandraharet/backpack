import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path fillRule="evenodd" d="M18 4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v12a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2.5c0-.276.225-.497.499-.53a4 4 0 0 0 0-7.94C18.225 4.998 18 4.777 18 4.5V4zm2 5a2 2 0 0 1-1.505 1.938c-.268.068-.495-.162-.495-.438v-3c0-.276.227-.506.495-.438A2 2 0 0 1 20 9zm-4.318-.269a1 1 0 1 0-1.364-1.462l-3.604 3.363-1.032-.963a1 1 0 1 0-1.364 1.462l2.396 2.237 4.968-4.637z" clipRule="evenodd" /><path d="M5 20a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5z" /></svg>);