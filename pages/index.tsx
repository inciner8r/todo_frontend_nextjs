import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    console.log(localStorage.getItem("jwt"));
    router.push("/login");
  }, []);
};

export default Home;
