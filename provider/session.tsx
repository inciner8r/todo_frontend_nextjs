import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

const Session = (token: string | null) => {
  const router = useRouter();
  if (token != null) {
    axios
      .post("http://localhost:8080/validateJWT", { JWTString: token })
      .then((res) => {
        console.log(res);
      });
  }
};

export default Session;
