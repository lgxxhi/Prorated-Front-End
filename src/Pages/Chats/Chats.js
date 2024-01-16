import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { ChatEngine } from "react-chat-engine";
import { useAuth } from "../../Firebase/AuthContext";
import "./Chats.css";

export default function Chats() {
  const didMountRef = useRef(false);
  const [loading, setLoading] = useState(true);
  const { authUser } = useAuth();

  console.log(authUser);

  useEffect(() => {
    if (authUser && !didMountRef.current) {
      didMountRef.current = true;

      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://api.chatengine.io/users/me/",
            {
              headers: {
                "project-ID": "420e3caa-66ec-4793-93bd-2aa46df08482",
                "User-Name": authUser.email,
                "User-Secret": authUser.uid,
              },
            }
          );
          console.log("Request Headers:", response.config.headers);
          console.log("Response Data:", response.data);
          setLoading(false);
        } catch (error) {
          console.log("Request Headers:", error.config.headers);
          console.error("Error:", error.response);
          let formdata = new FormData();
          formdata.append("email", authUser.email);
          formdata.append("username", authUser.email);
          formdata.append("secret", authUser.uid);

          axios.post("https://api.chatengine.io/users/", formdata, {
            headers: {
              "private-key": "93b3d154-cd33-4dc1-ab68-fadc5ecb3509",
            },
          });
        }
      };

      fetchData();
    }
  }, [authUser]);

  if (!authUser || loading) return <div />;

  return (
    <div className="chats-page">
      <ChatEngine
        projectID="420e3caa-66ec-4793-93bd-2aa46df08482"
        userName={authUser.email}
        userSecret={authUser.uid}
      />
    </div>
  );
}
