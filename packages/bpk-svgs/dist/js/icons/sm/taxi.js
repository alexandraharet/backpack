import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M4.5 3.75A.75.75 0 0 1 5.25 3h6a.75.75 0 0 1 .75.75v.404c0 .19.155.346.346.346 1.309 0 2.53.684 3.256 1.822l2.37 3.716a1 1 0 0 0 .843.462h.685A4.5 4.5 0 0 1 24 15v3a1.5 1.5 0 0 1-1.5 1.5h-.75c-.414 0-.74-.341-.843-.742a3.001 3.001 0 0 0-5.814 0c-.103.401-.429.742-.843.742h-4.5c-.414 0-.74-.341-.843-.742a3.001 3.001 0 0 0-5.814 0c-.103.401-.429.742-.843.742H1.5A1.5 1.5 0 0 1 0 18v-6a1.5 1.5 0 0 1 1.5-1.5h14.023a.5.5 0 0 0 .424-.764L14.3 7.093A2.322 2.322 0 0 0 12.346 6H2.283C1.85 6 1.5 5.702 1.5 5.25s.35-.75.783-.75H4.05a.45.45 0 0 0 .45-.45v-.3z" /><path d="M6 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm13.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" /></svg>);