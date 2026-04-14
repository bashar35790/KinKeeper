import { useLoaderData, useParams } from "react-router";

const FrindDetails = () => {
  const {id} = useParams();
  const friendsData = useLoaderData();
  
  const exactFriend = friendsData.find(friend => friend.id === parseInt(id));
  console.log(exactFriend);

  
  return (
    <div>
      <h1>Friend Details page</h1>
    </div>
  );
};
export default FrindDetails;
