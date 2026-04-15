import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const FriendsContext = createContext();

function FriendsContextProvider({ children }) {
  const [timeline, setTimeline] = useState([]);

  const addToTimeline = (friend, type) => {
    const exists = timeline.some(
      (item) => item.id === friend.id && item.type === type,
    );
    if (exists) {
      toast.error(`Already added a ${type} check-in for ${friend.name}!`, {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    toast.success(`You contacted ${friend.name} via ${type}!`);

    setTimeline([
      ...timeline,
      {
        id: friend.id,
        name: friend.name,
        type, 
        date: new Date(),
      },
    ]);
  };

  const data = {
    timeline,
    addToTimeline,
  };
  return (
    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  );
}

export default FriendsContextProvider;
