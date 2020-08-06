import React from "react";
import "./sing-up.css";

function SingUp(data) {
  return (
    <div className="container-sing-up">
      <div className="title-sing-up">Sign Up and Save $1</div>
      <form className="form-sing-up">
        <input placeholder="Email adresse" className="input-form-sing-up" />
        <input placeholder="Zip Code" className="input-form-sing-up" />
        <button className="button-form-sing-up">SING ME UP</button>
      </form>
    </div>
  );
}

export default SingUp;
