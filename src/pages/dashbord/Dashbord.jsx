import Hero from "../../components/sections/hero/Hero";
import StatisticCard from "../../components/utils/statisticCard/StatisticCard";
import FriendCard from "../../components/utils/friendCard/FriendCard";
import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";

export default function Dashbord() {
  const friendsData = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (friendsData) {
      setLoading(false);
    }
  }, [friendsData]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  return (
    <>
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
