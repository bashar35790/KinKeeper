import { createContext, useEffect, useState } from "react";

export const FriendsContext = createContext(); 

function FriendsContextProvider({ children }) {
  const [friends, setFriends] = useState([]);

  
  return (
    <FriendsContext.Provider value={{ friends, setFriends }}>
      {children}
    </FriendsContext.Provider>
  );
}

export default FriendsContextProvider;
