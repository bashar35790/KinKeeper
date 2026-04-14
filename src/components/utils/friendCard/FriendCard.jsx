

export default function FriendCard() {
  return (
    <div className="w-full mx-auto bg-white rounded-2xl shadow-md text-center p-6">
      {/* Avatar */}
      <div className="flex justify-center">
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="profile"
            />
          </div>
        </div>
      </div>

      {/* Name */}
      <h2 className="text-xl font-semibold mt-4">David Kim</h2>

      {/* Last Contact */}
      <p className=" mt-1">62d ago</p>

      {/* Tags */}
      <div className="flex flex-col items-center justify-center gap-2 mt-4 flex-wrap">
        <span className="badge bg-batch badge-md px-4 py-3 rounded-full">
          WORK
        </span>

        <span className="badge  badge-md px-4 py-3 rounded-full bg-due text-white">
          Almost Due
        </span>
      </div>
    </div>
  );
}
