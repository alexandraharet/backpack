import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path fillRule="evenodd" d="M9.414 4.887c.47-.526 1.52-.506 2.008 0l5.948 6.397a1 1 0 0 1 .003 1.358l-6.011 6.532c-.47.526-1.46.369-1.948-.138-.487-.508-.573-1.47-.103-1.997l4.638-5.078-4.535-4.97c-.488-.506-.47-1.577 0-2.104z" clipRule="evenodd" /></svg>);