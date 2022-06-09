import { LoginForm } from "./LoginForm";
import "./style.css";

export const Loginw = () => {
  return (
    <div id="login-form" style={false?{"opacity":"0.5"}:{"opacity":"1"}}>
      <div id="login-form-inner">
        <div id="login-form-inner2">
          
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
