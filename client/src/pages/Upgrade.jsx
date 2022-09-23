import { React, useRef, useState, useEffect } from "react";
import clip from "../assets/clip.png";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { API } from "../config/api";

function Upgrade() {
  let Navigate = useNavigate();
  let { data: profile, refetch: profileRefetch } = useQuery(
    "profileCache",
    async () => {
      const config = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      };
      const response = await API.get("/check-auth", config);
      return response.data.data;
    }
  );

  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = "SB-Mid-client-yyus5cIEx8irJgE0";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const handleBuy = useMutation(async (e) => {
    e.preventDefault()
    try {
      const data = {
        userId: profile?.ID,
      };

      const body = JSON.stringify(data);

      const config = {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.token,
          "Content-type": "application/json",
        },
        body,
      };

      // Insert transaction data
      const response = await API.post("/transaction", config);
      console.log("ini transaction", response);
      const token = response.data.data.token;

      window.snap.pay(token, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          Navigate("/profiles");
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          Navigate("/paymen");
        },
        onError: function (result) {
          /* You may add your own implementation here */
          console.log(result);
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("you closed the popup without finishing the payment");
        },
      });
    } catch (error) { }
  });
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
                onClick={(e) => handleBuy.mutate(e)}
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
