"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    redirect('/api/auth/login?post_login_redirect_url=/dashboard')
  }, []);

  return (
    <></>
  );
}

export default Home;