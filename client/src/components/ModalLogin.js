import React from "react";
import { Modal, Alert } from "react-bootstrap";

export default function ModalLogin({
  loginShow,
  setLoginShow,
  loginHere,
  setIsLogin,
}) {
  function ShowPass() {
    let x = document.getElementById("ShowPass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  return (
    <Modal
      size="md"
      show={loginShow}
      onHide={() => setLoginShow(false)}
      centered
    >
      <Modal.Body className="bg-Modal">
        <div className="card-auth p-4">
          <div
            style={{
              fontSize: "30px",
              lineHeight: "49px",
              fontWeight: "700",
              color: "white",
            }}
            className="mb-3"
          >
            Login
          </div>
          {/* {message && message} */}
          <form>
            <div className="mt-3 form">
              <input
                type="email"
                placeholder="Email"
                // value={email}
                name="email"
                // onChange={handleChange}
                className="px-3 py-2 mt-3"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="ShowPass"
                // value={password}
                // onChange={handleChange}
                className="px-3 py-2 mt-3"
              />
            </div>
            <div>
              <input
                type="checkbox"
                id="Show"
                onClick={ShowPass}
                className="mt-3"
              />
              <label for="Show" className="ms-1">
                Show Password
              </label>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button className="btn1" onClick={() => setIsLogin(true)}>
                Login
              </button>
              <p className="warning">
                Don't have an account?
                <button onClick={loginHere} className="btnHere">
                  Click here
                </button>
              </p>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}
