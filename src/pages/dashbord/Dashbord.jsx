import React, { Suspense } from "react";
import Hero from "../../components/sections/hero/Hero";
import StatisticCard from "../../components/utils/statisticCard/StatisticCard";
import FriendCard from "../../components/utils/friendCard/FriendCard";
import { useLoaderData, useNavigation } from "react-router";

export default function Dashbord() {
  const friendsData = useLoaderData();
  const navigation = useNavigation();
  return (
    <>
      {navigation.state === "loading" && (
        <span className="loading loading-bars loading-md"></span>
      )}
      <Hero></Hero>
      <section>
        <StatisticCard />
        <div className="max-w-277.5 mx-auto px-4 pt-10 pb-20 space-y-4">
          <h2 className="text-heading text-2xl font-semibold">Your Friends</h2>

          <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {friendsData.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
