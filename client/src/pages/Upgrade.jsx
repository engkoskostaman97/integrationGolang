import { React, useRef, useState } from "react";
import clip from "../assets/clip.png";

function Upgrade() {
  const title = "Be Premium";
  document.title = "Dumbflix | " + title;

  const [previewSrc, setPreviewSrc] = useState(null);
  const [file, setFile] = useState(null);

  const onChangeFiles = (e) => {
    let fileInfo = e.target.files[0];
    setFile(fileInfo);
    let reader = new FileReader();

    if (e.target.files.length === 0) {
      return;
    }

    reader.onloadend = (e) => {
      setPreviewSrc([reader.result]);
    };

    reader.readAsDataURL(fileInfo);
  };

  const inputFileRef = useRef(null);

  const onBtnClick = () => {
    inputFileRef.current.click();
  };
  return (
    <div className="payment-container">
      <div className="payment-details">
        <div className="payment-desc">
          <h1
            style={{
              marginBottom: "60px",
            }}
          >
            Premium
          </h1>
          <p>
            Bayar sekarang dan nikmati streaming film-film yang kekinian dari{" "}
            <span className="red">DUMBFLIX </span> <br />{" "}
            <span className="red">DUMBFLIX </span> : 0981312323
          </p>
          <form>
            <div className="form-payment">
              <input
                type="number"
                name="accountNumber"
                className="custom-input mb-3"
                placeholder="Input Your Account Number"
              />

              <button
                type="button"
                onClick={() => onBtnClick()}
                className="btn-light"
                style={{
                  width: "100%",
                  height: "50px",
                  fontSize: "18px",
                  textAlign: "left",
                  padding: "0 10px",
                }}
              >
                Attach proof of transfer{" "}
                <div
                  style={{
                    float: "right",
                    display: "inline",
                    fontSize: "20px",
                  }}
                >
                  <img src={clip} alt="" />
                </div>
              </button>
              <input
                onChange={(e) => onChangeFiles(e)}
                type="file"
                name="file"
                ref={inputFileRef}
                style={{ display: "none" }}
              />
              <img src={previewSrc} alt="" className="preview-src" />

              <button
                type="submit"
                className="btnsub"
                style={{
                  height: "35px",
                  fontSize: "16px",
                  marginTop: "25px",
                }}
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Upgrade;
