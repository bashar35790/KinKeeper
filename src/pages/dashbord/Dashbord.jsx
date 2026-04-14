import React from "react";
import Hero from "../../components/sections/hero/Hero";
import StatisticCard from "../../components/utils/statisticCard/StatisticCard";
import FriendCard from "../../components/utils/friendCard/FriendCard";

export default function Dashbord() {
  return <>
   <Hero></Hero>
   <section>
     <StatisticCard />
     <FriendCard />
   </section>
  </>;
}
