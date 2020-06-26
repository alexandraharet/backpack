import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M10.326 1.968L2.14 6.838c-.874.52-.847 1.944.045 2.422l8.276 4.431a3.222 3.222 0 0 0 3.078 0l3.753-2.009a1.5 1.5 0 0 1 2.208 1.322V15a1.5 1.5 0 0 0 2.806.739c.122-.172.194-.381.194-.608V8.033c0-.47-.213-.941-.64-1.195l-8.186-4.87a3.23 3.23 0 0 0-3.348 0z" /><path d="M18 14.574c0-.384-.4-.637-.748-.474l-3.713 1.688a3.222 3.222 0 0 1-3.078 0L5.25 13.23a.525.525 0 0 0-.773.462v4.764c0 .397.225.76.58.938l5.065 2.664c1.182.59 2.574.59 3.756 0l3.542-1.727c.355-.177.58-.54.58-.938v-4.818z" /></svg>);