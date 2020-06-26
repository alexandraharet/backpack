import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M12 7.5a1.5 1.5 0 0 0-3 0v3.621l1.94 1.94a1.5 1.5 0 0 0 2.12-2.122L12 9.88V7.5z" /><path fillRule="evenodd" d="M10.5 19.5a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-3a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" clipRule="evenodd" /><path d="M19.414 17.126c-.15-.15-.783.242-1.414.874-.632.632-1.024 1.264-.875 1.414l2.612 2.612a1.618 1.618 0 1 0 2.289-2.29l-2.612-2.61z" /></svg>);