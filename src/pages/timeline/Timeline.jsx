import {
  CalendarX,
  MessageCircleMore,
  PhoneCall,
  VideoIcon,
} from "lucide-react";
import { useContext, useState } from "react";
import { FriendsContext } from "../../context/FriendsContext";
import { Link } from "react-router";

const Timeline = () => {
  const { timeline } = useContext(FriendsContext);
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [search, setSearch] = useState("");

  //  Filter
  const filtered = timeline.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  //  Sort
  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder === "newest") return new Date(b.date) - new Date(a.date);
    return new Date(a.date) - new Date(b.date);
  });

  //  Search
  const finalData = sorted.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.type.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="max-w-227.5 mx-auto py-20 px-4">
      {/* Title */}
      <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-heading font-bold mb-4">
        Timeline
      </h1>

      {/* Controls */}
      <div className="flex flex-wrap gap-4 mb-6">
        {/* Filter */}
        <select
          className="select select-bordered"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="text">Text</option>
          <option value="call">Call</option>
          <option value="video">Video</option>
        </select>

        {/* Sort */}
        <select
          className="select select-bordered"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>

        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Timeline List */}
      {finalData.length === 0 && (
        <div className="max-w-277.5 w-full mx-auto ">
          {/* Empty State */}
          <div className="flex flex-col items-center justify-center text-center p-6 rounded-xl bg-base-100 shadow-sm">
            {/* Icon */}
            <div className="p-4 bg-base-200 rounded-full mb-4">
              <CalendarX className="w-10 h-10 text-gray-400" />
            </div>

            {/* Text */}
            <h2 className="text-xl font-semibold mb-2">No activity yet</h2>

            <p className="text-gray-500 max-w-sm">
              You don’t have any timeline activity right now. Start interacting
              with your friends to see updates here.
            </p>

            {/* Optional Button */}
            <Link to="/" className="btn bg-brand text-white mt-6">
              Add Activity
            </Link>
          </div>
        </div>
      )}

      {/* Timeline List */}
      <div className="space-y-4">
        {finalData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-white rounded-xl shadow"
          >
            {/* Icon */}
            <div className="p-2 bg-base-200 rounded-lg">
              {item.type === "text" && <MessageCircleMore />}
              {item.type === "call" && <PhoneCall />}
              {item.type === "video" && <VideoIcon />}
            </div>

            {/* Content */}
            <div>
              <p className="font-semibold">
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                <span className="text-gray-500"> with {item.name}</span>
              </p>
              <p className="text-sm text-gray-400">
                {new Date(item.date).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
