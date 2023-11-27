import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { useAuth } from "../Firebase/AuthContext";
import axios from "axios";

function Chats() {
  const [loading, setLoading] = useState(true);
  const { authUser } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="chats-page">
      <ChatEngine
        height="calc(100vh - 66px)"
        projectId="4c4dd93c-8b8a-4c2e-8f06-e269442b9589"
        userName="."
        userSecret="."
      />
    </div>
  );
}

export default Chats;
