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
                "project-ID": "48849ace-9871-40bf-8f8c-aae4795192ff",
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
              "private-key": "6477ace8-b3b8-4866-b1f0-7c5be628ceca",
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
        projectID="48849ace-9871-40bf-8f8c-aae4795192ff"
        userName={authUser.email}
        userSecret={authUser.uid}
      />
    </div>
  );
}
