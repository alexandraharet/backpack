import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path fillRule="evenodd" d="M3.869 5.17c-.4.176-.669.666-.669 1.22V11a1 1 0 0 1-1 1h-.1c-.608 0-1.1.504-1.1 1.125v7.055a.82.82 0 0 0 1.626.136l.574-2.691h17.6l.575 2.69A.819.819 0 0 0 23 20.18v-7.055c0-.621-.492-1.125-1.1-1.125h-.1a1 1 0 0 1-1-1l-.003-2.375h.003V6.389c0-.553-.27-1.043-.669-1.218l-1.947-.853c-4.014-1.757-8.354-1.757-12.368 0l-1.947.853zM7 6a1 1 0 0 1 1 1v.839A4.989 4.989 0 0 1 11.874 6c1.255 0 2.405.464 3.283 1.229a1 1 0 1 1-1.314 1.508A2.985 2.985 0 0 0 11.874 8c-.888 0-1.687.386-2.236 1H10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm10 9a1 1 0 0 1-1-1v-.175A4.994 4.994 0 0 1 11.874 16a4.983 4.983 0 0 1-3.308-1.25 1 1 0 1 1 1.324-1.5 2.982 2.982 0 0 0 1.984.75 3.001 3.001 0 0 0 2.83-2H14a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1z" clipRule="evenodd" /></svg>);