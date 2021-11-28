/** @format */

import Button from "@material-ui/core/Button";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import validator from "validator";
import { makeStyles } from "@mui/styles";
import axios from "axios";
const useStyles = makeStyles({
  root: {}, // a style rule
  label: {}, // a nested style rule
});

export default function LoginModal({ styles }) {
  const StyleRef = useRef();
  const classes = useStyles();

  const router = useRouter();
  const [order, setOrder] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const canMakePaymentCache = "canMakePaymentCache";
  const [otp, setOtp] = useState("");
  const [gOtp, setGOtp] = useState();
  const [verified, setVerified] = useState(false);
  const [user, setUser] = useState([]);
  const options = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  const {
    cart,
    time,
    payment,
    comment,
    voucher,
    amount,
    userid,
    username,
    mobile,
    address,
    totalitems,
    delivered,
    date,
    vendors,
  } = order;

  useEffect(() => {
    var Order = JSON.parse(localStorage.getItem("temperory-cart"));
    var User = JSON.parse(localStorage.getItem("user"));
    setOrder(Order);
    if (User) {
      setUser(User);
    }
  }, []);

  const UploadImage = (e) => {
    console.log("running...");

    if (e.target.files.length === 0) {
      return toast.error("Please add Image", options);
    }
    // console.log(e.target.id = "FSI",e.target.innerText = "UPLOADED",e.target.disabled = true)
    var img = e.target.files[0];
    console.log("running...");
    toast.info("Image uploading...", options);
    e.target.innerText = "UPLOADING..";
    var FileName = img.name.split(".");
    var extension = FileName[FileName.length - 1];
    var FileId = Date.now();
    var checkoutCart = JSON.parse(localStorage.getItem("temperory-cart"));
    var title = `${checkoutCart.userid}_${checkoutCart.amount}_${FileId}`;
    var NewFileName = `${title}.${extension}`;
    var link = `/uploads/${NewFileName}`;
    console.log("running...");

    console.log(NewFileName);
    const formData = new FormData();
    formData.append("file", img, NewFileName);

    axios("/api/auth/uploadImage", {
      method: "POST",
      data: formData,
      "content-type": "multipart/form-data",
    }).then((res) => {
      e.target.id = "FSI";
      e.target.innerText = "UPLOADED";
      e.target.disabled = true;
      toast.success("Image uploaded", options);
      checkoutCart.paymentss = link;
      localStorage.setItem("temperory-cart", JSON.stringify(checkoutCart));
      router.back();
      console.log(res);
    });
  };

  const CheckOut = async () => {
    if (!order) {
      return toast.error("You Cart is empty", options);
    }

    try {
      toast.info("Placing Your Order", options);
      console.log(order);
      const response = await fetch(`/api/auth/checkOut`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.token,
        },
        body: JSON.stringify(order),
      });

      const Data = await response.json();
      if (Data.message) {
        toast.success("Order placed successfully", options);
        localStorage.removeItem("temperory-cart");
        localStorage.removeItem("items");
        router.push("/account");
      } else {
        toast.error(Data.error, options);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="modal" style={styles}>
      <form className="login-div" style={{ height: "80%" }}>
        <Button
          id="login-back"
          onClick={(e) => {
            router.back();
          }}
        >
          X
        </Button>

        <div className="login-heading">
          <h2>Confirm Your Payment</h2>
          <h5>
            Your payment will be pending unless you add the payment screenshot{" "}
          </h5>
        </div>

        <div className="checkout-detail">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/640px-QR_code_for_mobile_English_Wikipedia.svg.png"
            width="100%"
          />
        </div>

        <br />
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          hidden={true}
          onChange={(e) => UploadImage(e)}
        />
        <label htmlFor="contained-button-file" onChange={(e) => UploadImage(e)}>
          <Button
            component="span"
            id="login-button-v"
            style={{ width: "200px" }}
          >
            Upload ScreenShot
          </Button>
        </label>

        <br />
      </form>
      <div id="outputSection" style={{ display: "none" }}>
        <pre id="response"></pre>
      </div>
    </div>
  );
}
