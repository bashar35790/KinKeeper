import { useEffect, useState } from "react";

export default function StatisticCard() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("Friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="max-w-277.5 mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
      {/*  card 1 */}
      <div className="p-9 bg-base-100 shadow box-border rounded-2xl text-center">
        <h3 className="text-3xl text-brand font-semibold">{friends?.length}</h3>
        <p className="text-[18px]">Total Friends</p>
      </div>
      {/*  card 2 */}
      <div className="p-9 bg-base-100 shadow box-border rounded-2xl text-center">
        <h3 className="text-3xl text-brand font-semibold">{friends?.filter((friend) => friend?.status === "on-track").length}</h3>
        <p className="text-[18px]">On Track</p>
      </div>
      {/*  card 3 */}
      <div className="p-9 bg-base-100 shadow box-border rounded-2xl text-center">
        <h3 className="text-3xl text-brand font-semibold">{friends?.filter((friend) => friend?.status === "overdue").length}</h3>
        <p className="text-[18px]">Need Attention</p>
      </div>
      {/*  card 4 */}
      <div className="p-9 bg-base-100 shadow box-border rounded-2xl text-center">
        <h3 className="text-3xl text-brand font-semibold">12</h3>
        <p className="text-[18px]">Interactions This Month</p>
      </div>
    </div>
  );
}
