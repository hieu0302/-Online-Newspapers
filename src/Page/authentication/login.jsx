import React, { useEffect, useState } from "react";
import "./login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { Button, Modal } from "antd";
import SocialAuth from "./SocialAuth";
import { Link } from "react-router-dom";
const getLocal = () => {
  let inforUser = localStorage.getItem("user");
  if (inforUser) {
    return (inforUser = JSON.parse(localStorage.getItem("user")));
  } else {
    return [];
  }
};
export function Login() {
  const [user, setUser] = useState(getLocal);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  localStorage.setItem("user", JSON.stringify(user));
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <div>
        {user ? (
          <div className="inforUser">
            <div className="photo">
              <img src={user.photoURL} alt="dp" referrerPolicy="no-referrer" />
            </div>
            <Link
              to={"/recently"}
              title="Recently Viewed"
              style={{ textDecoration: "none" }}
            >
              {user.displayName}
            </Link>

            <Button className="logout" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        ) : (
          <div>
            <Button onClick={showModal}>Log In</Button>
            <Modal
              title="Log In"
              open={isModalOpen}
              onCancel={handleCancel}
              //   footer={null}
              okButtonProps={{ style: { display: "none" } }}
              width={400}
            >
              <h4>Sign In With: </h4>
              <button
                onClick={handleGoogleSignIn}
                style={{ border: "none", backgroundColor: "white" }}
              >
                <SocialAuth />
              </button>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
}
