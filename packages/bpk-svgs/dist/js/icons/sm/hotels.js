import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M3.684 5.067C3.275 5.234 3 5.701 3 6.227V9.43c0 .591.504 1.071 1.125 1.071H5.25A.75.75 0 0 0 6 9.75v-1.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v1.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v1.5c0 .414.336.75.75.75h1.123c.622 0 1.126-.48 1.125-1.073l-.001-1.07H21v-2.13c0-.526-.275-.993-.684-1.16l-1.991-.812c-4.106-1.673-8.544-1.673-12.65 0l-1.991.812zM4.5 12a3 3 0 0 0-3 3v5.25c0 .414.336.75.75.75h.286a.75.75 0 0 0 .671-.415L4.5 18h15l1.293 2.585a.75.75 0 0 0 .67.415h.287a.75.75 0 0 0 .75-.75V15a3 3 0 0 0-3-3h-15z" /></svg>);