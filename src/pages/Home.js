import React from "react";
import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import Explore from "../components/Explore";

function Home() {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <Explore />
    </div>
  );
}

export default Home;
