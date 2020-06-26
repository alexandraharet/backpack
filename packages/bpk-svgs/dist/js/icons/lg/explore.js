import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm3.252-13.962a.55.55 0 0 1 .71.71l-3.038 7.9a.55.55 0 0 1-.932.159.533.533 0 0 1-.082-.151l-.97-2.467a2 2 0 0 0-1.13-1.13l-2.466-.97a.533.533 0 0 1-.15-.081.55.55 0 0 1 .158-.931l7.9-3.04z" clipRule="evenodd" /></svg>);