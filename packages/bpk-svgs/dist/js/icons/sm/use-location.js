import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M3.113 8.295l17.692-6.71c1.007-.383 1.993.603 1.61 1.61l-6.71 17.692c-.772 2.036-3.597 2.179-4.57.232l-2.126-4.25a4.2 4.2 0 0 0-1.878-1.878l-4.25-2.125c-1.947-.974-1.804-3.799.232-4.571z" /></svg>);