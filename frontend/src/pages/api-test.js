import { useEffect, useState } from "react";

export default function ApiTest() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return <h1>Flask says: {message}</h1>;
}
