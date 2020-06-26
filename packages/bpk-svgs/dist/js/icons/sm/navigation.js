import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" /><path fillRule="evenodd" d="M12 22.5c5.775 0 10.5-4.725 10.5-10.5S17.775 1.5 12 1.5 1.5 6.225 1.5 12 6.225 22.5 12 22.5zM10.518 9.31l5.352-1.785a.478.478 0 0 1 .605.605l-1.785 5.352a1.91 1.91 0 0 1-1.208 1.209L8.13 16.474a.478.478 0 0 1-.605-.605l1.784-5.352a1.91 1.91 0 0 1 1.209-1.208z" clipRule="evenodd" /></svg>);