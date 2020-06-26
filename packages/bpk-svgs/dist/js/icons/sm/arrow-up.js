import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M7.463 15h9.074c1.246 0 1.92-1.365 1.11-2.251l-4.354-4.77c-.568-.622-1.59-.641-2.184-.04l-4.718 4.77C5.526 13.581 6.19 15 7.463 15z" /></svg>);