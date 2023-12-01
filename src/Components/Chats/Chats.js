import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { ChatEngine } from "react-chat-engine";
import { useAuth } from "../Firebase/AuthContext";
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
                "project-ID": "4c4dd93c-8b8a-4c2e-8f06-e269442b9589",
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
              "private-key": "e9414631-c47a-4aea-984b-93403eba4a86",
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
        projectID="4c4dd93c-8b8a-4c2e-8f06-e269442b9589"
        userName={authUser.email}
        userSecret={authUser.uid}
      />
    </div>
  );
}
