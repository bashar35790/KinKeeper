import { useLoaderData, useParams } from "react-router";

const FrindDetails = () => {
  const { id } = useParams();
  const friendsData = useLoaderData();

  const exactFriend = friendsData.find((friend) => friend.id === parseInt(id));
  console.log(exactFriend);

  const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = exactFriend;

  return (
    <div className=" bg-base-200 py-20">
      <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
        {/* Left Column */}
        <div className="flex flex-col gap-3">
          {/* Profile Card */}
          <div className="card bg-base-100 shadow-md rounded-2xl">
            <div className="card-body items-center text-center gap-3">
              <div className="avatar">
                <div className="w-20 rounded-full bg-base-300">
                  <img src={picture} alt={name} />
                </div>
              </div>
              <h2 className="card-title text-brand">{name}</h2>
              <div className="flex flex-col items-center gap-1">
                <span
                  className={`badge  badge-md px-4 py-3 rounded-full ${(status === "on-track" && "bg-green-500") || (status === "almost due" && "bg-due") || (status === "overdue" && "bg-overdue")} text-white`}
                >
                  {status}
                </span>

                <div className="flex gap-2 flex-wrap justify-center">
                  <span className="badge bg-batch badge-md px-4 py-3 rounded-full">
                    {tags[0]}
                  </span>
                  <span className="badge bg-batch badge-md px-4 py-3 rounded-full">
                    {tags[2]}
                  </span>
                </div>
              </div>
              <p className="text-sm italic">"{bio}"</p>
              <p className="text-xs">Preferred: {email}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2">
            <button className="btn btn-outline btn-sm justify-start gap-2 font-normal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.73 21a2 2 0 0 1-3.46 0"
                />
              </svg>
              Snooze 2 Weeks
            </button>
            <button className="btn btn-outline btn-sm justify-start gap-2 font-normal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
                />
              </svg>
              Archive
            </button>
            <button className="btn btn-outline btn-error btn-sm justify-start gap-2 font-normal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <polyline points="3 6 5 6 21 6" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 6l-1 14H6L5 6M10 11v6M14 11v6M9 6V4h6v2"
                />
              </svg>
              Delete
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-2 flex flex-col gap-3">
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-3">
            <div className="card bg-base-100 border border-base-300 shadow-none">
              <div className="card-body items-center text-center py-4 px-3">
                <p className="text-3xl font-medium text-brand">
                  {days_since_contact}
                </p>
                <p className="text-[18px]">Days Since Contact</p>
              </div>
            </div>
            <div className="card bg-base-100 border border-base-300 shadow-none">
              <div className="card-body items-center text-center py-4 px-3">
                <p className="text-3xl font-medium text-brand">{goal}</p>
                <p className="text-[18px]">Goal (Days)</p>
              </div>
            </div>
            <div className="card bg-base-100 border border-base-300 shadow-none">
              <div className="card-body items-center text-center py-4 px-3">
                <p className="text-xl font-medium text-brand">
                  {next_due_date}
                </p>
                <p className="text-[18px]">Next Due</p>
              </div>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="card bg-base-100 border border-base-300 shadow-none">
            <div className="card-body py-4 px-5">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-brand">Relationship Goal</h3>
                <button className="btn btn-outline btn-xs font-normal">
                  Edit
                </button>
              </div>
              <p className="text-sm text-base-content/60">
                Connect every{" "}
                <span className="font-medium text-brand">{goal} days</span>
              </p>
            </div>
          </div>

          {/* Quick Check-In */}
          <div className="card bg-base-100 border border-base-300 shadow-none">
            <div className="card-body py-4 px-5">
              <h3 className="font-medium text-brand">Quick Check-In</h3>
              <div className="grid grid-cols-3 gap-3">
                <button className="btn btn-outline btn-sm flex-col h-auto py-4 gap-2 font-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 5.93 5.93l1.47-1.47a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                    />
                  </svg>
                  Call
                </button>
                <button className="btn btn-outline btn-sm flex-col h-auto py-4 gap-2 font-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    />
                  </svg>
                  Text
                </button>
                <button className="btn btn-outline btn-sm flex-col h-auto py-4 gap-2 font-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <rect x="2" y="7" width="15" height="10" rx="2" />
                    <polygon points="17 9 22 6 22 18 17 15" />
                  </svg>
                  Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FrindDetails;
