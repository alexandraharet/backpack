import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M8.878 4.023c-.476-.228-1.053-.025-1.263.442a.867.867 0 0 0 .415 1.13L13 7.984c.957.488 1.47 1.536.984 2.464l-.064.123c-.247.473-.848.664-1.342.428a.938.938 0 0 1-.447-1.284.131.131 0 0 0-.062-.18l-4.98-2.253c-1.34-.684-1.91-2.236-1.312-3.572C6.44 2.23 7.995 1.572 9.5 2.292l6.625 3.057a2.9 2.9 0 0 1 1.568 1.872l2.035 9.617c.134.513-.192 1.033-.728 1.161-.536.128-1.079-.184-1.213-.696l-2.034-9.618a.966.966 0 0 0-.523-.624l-6.352-3.04zM16 20c0-.5.5-1 1-1h4c.5 0 1 .5 1 1s-.5 1-1 1h-4c-.5 0-1-.5-1-1z" /><path d="M5.182 11C3.977 11 3 12.38 3 13.556v1.27c0 .448.587.709.99.515a3.5 3.5 0 0 1 4.668 4.668c-.193.404.068.991.516.991h3.644C14.023 21 15 20.048 15 18.873v-1.064C15 14.285 12.07 11 8.455 11H5.182z" /><path d="M5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" /></svg>);