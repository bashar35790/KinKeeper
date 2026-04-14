import { Link } from "react-router";

export default function FriendCard({ friend }) {

  return (
    <Link to={`/friends-details/${friend.id}`} className="w-full mx-auto bg-white rounded-2xl shadow-md text-center p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300">
      {/* Avatar */}
      <div className="flex justify-center">
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src={friend.picture} alt="profile" />
          </div>
        </div>
      </div>

      {/* Name */}
      <h2 className="text-xl font-semibold mt-4">{friend.name}</h2>

      {/* Last Contact */}
      <p className=" mt-1">{friend.days_since_contact}d ago</p>

      {/* Tags */}
      <div className="flex flex-col items-center justify-center gap-2 mt-4 flex-wrap">
        <div className="flex gap-2 flex-wrap justify-center">
          <span className="badge bg-batch badge-md px-4 py-3 rounded-full">
            {friend.tags[0]}
          </span>
          <span className="badge bg-batch badge-md px-4 py-3 rounded-full">
            {friend.tags[2]}
          </span>
        </div>

        <span
          className={`badge  badge-md px-4 py-3 rounded-full ${(friend.status === "on-track" && "bg-green-500") || (friend.status === "almost due" && "bg-due") || (friend.status === "overdue" && "bg-overdue")} text-white`}
        >
          {friend.status}
        </span>
      </div>
    </Link>
  );
}
