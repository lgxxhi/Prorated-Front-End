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
                "project-ID": "1637d9e9-7672-4f3e-9fbe-2f7cf4a29e56",
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
              "private-key": "83b75aeb-006c-4063-94ff-0c8312b6cd7b",
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
        projectID="1637d9e9-7672-4f3e-9fbe-2f7cf4a29e56"
        userName={authUser.email}
        userSecret={authUser.uid}
      />
    </div>
  );
}
