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
  //   console.log(authUser.email, authUser.uid);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      //   if (!authUser || authUser === null) {
      //     navigate("/");
      //     return;
      //   }

      axios
        .get("https://api.chatengine.io/users/me/", {
          headers: {
            "Project-ID": "4c4dd93c-8b8a-4c2e-8f06-e269442b9589",
            "User-Name": "michaelreyes@pursuit.org",
            "User-Secret": "pP1nQFv4NSUWUgrJIrSKQMuK58v2",
          },
        })
        .then(() => setLoading(false))
        .catch((e) => {
          //   let formdata = new FormData();
          //   formdata.append("email", authUser.email);
          //   formdata.append("username", authUser.email);
          //   formdata.append("secret", authUser.uid);

          //   axios
          //     .post("https://api.chatengine.io/users/", formdata, {
          //       headers: {
          //         "private-key": "e9414631-c47a-4aea-984b-93403eba4a86",
          //       },
          //     })
          //     .then(() => setLoading(false))
          //     .catch((e) => console.log("e", e.response));
          console.log(e);
        });
    }
  }, [authUser, navigate]);

  //   if (!authUser || loading) return <div />;

  return (
    <div className="chats-page">
      <ChatEngine
        height="calc(100vh - 66px)"
        projectID="4c4dd93c-8b8a-4c2e-8f06-e269442b9589"
        userName="michaelreyes@pursuit.org"
        userSecret="pP1nQFv4NSUWUgrJIrSKQMuK58v2"
      />
    </div>
  );
}
