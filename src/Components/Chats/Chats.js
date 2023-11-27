// import { React, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { ChatEngine } from "react-chat-engine";
// import { useAuth } from "../Firebase/AuthContext";
// import axios from "axios";

// function Chats() {
//   const [loading, setLoading] = useState(true);
//   const { authUser } = useAuth();
//   const navigate = useNavigate();

//   return (
//     <div className="chats-page">
//       <ChatEngine
//         height="calc(100vh - 66px)"
//         projectId="4c4dd93c-8b8a-4c2e-8f06-e269442b9589"
//         userName="."
//         userSecret="."
//       />
//     </div>
//   );
// }

// export default Chats;

import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { useAuth } from "../Firebase/AuthContext";
import { auth } from "../Firebase/Firebase";

export default function Chats() {
  const didMountRef = useRef(false);
  const [loading, setLoading] = useState(true);
  const { authUser } = useAuth();
  const navigate = useNavigate();
  async function handleLogout() {
    await auth.signOut();
    navigate("/");
  }

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      if (!authUser || authUser === null) {
        navigate("/");
        return;
      }

      axios
        .get("https://api.chatengine.io/users/me/", {
          headers: {
            "project-id": "784bdb9e-8724-4f63-8ab6-3c10d59f74a7",
            "user-name": authUser.email,
            "user-secret": authUser.uid,
          },
        })
        .then(() => setLoading(false))
        .catch((e) => {
          let formdata = new FormData();
          formdata.append("email", authUser.email);
          formdata.append("username", authUser.email);
          formdata.append("secret", authUser.uid);

          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY,
              },
            })
            .then(() => setLoading(false))
            .catch((e) => console.log("e", e.response));
        });
    }
  }, [authUser, navigate]);

  if (!authUser || loading) return <div />;

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Unichat</div>

        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>

      <ChatEngine
        height="calc(100vh - 66px)"
        projectID="784bdb9e-8724-4f63-8ab6-3c10d59f74a7"
        userName={authUser.email}
        userSecret={authUser.uid}
      />
    </div>
  );
}
