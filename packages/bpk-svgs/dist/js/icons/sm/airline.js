import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M1.743 20.612c-.58.766-.055 1.888.884 1.888h13.475c1.037 0 1.94-.735 2.186-1.78l4.18-17.777c.172-.735-.364-1.443-1.093-1.443h-2.001c-1.993 0-3.878.96-5.127 2.609L1.743 20.612z" /></svg>);