import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 3c-3.969 0-7.186 3.134-7.186 7v.64a9.789 9.789 0 0 1-1.084 4.47l-.51.995C2.536 17.436 3.53 19 5.055 19h13.888c1.526 0 2.52-1.565 1.837-2.894l-.51-.995a9.788 9.788 0 0 1-1.085-4.472V10c0-3.866-3.217-7-7.186-7zM9.076 20.959c-.265-.485.204-.959.756-.959h4.339c.552 0 1.02.474.755.959-.34.62-1.175 1.041-1.932 1.041h-2c-.757 0-1.578-.42-1.918-1.041z" /></svg>);