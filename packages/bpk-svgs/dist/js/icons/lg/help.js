import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12.019 2c-2.337 0-3.898.873-4.846 2.1C6.26 5.282 6 6.679 6 7.644a1 1 0 0 0 2 0c0-.66.188-1.585.756-2.32C9.286 4.636 10.236 4 12.019 4c2.146 0 3.328 1.123 3.773 2.432.47 1.384.133 2.993-.895 3.967-.23.217-.515.43-.88.704l-.099.074c-.391.293-.847.64-1.27 1.056C11.773 13.093 11 14.27 11 16v1a1 1 0 1 0 2 0v-1c0-1.055.444-1.745 1.05-2.34.317-.313.677-.59 1.068-.883l.111-.083c.342-.256.724-.541 1.043-.843 1.654-1.566 2.109-4.018 1.414-6.063C16.966 3.67 15.024 2 12.019 2zM13 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /></svg>);