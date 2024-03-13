import React from 'react';
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList"; // Импортируем компонент FriendList
import userData from "./userData.json";
import friends from "./friends.json";

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} /> {/* Внедряем компонент FriendList и передаем ему пропс friends */}
    </div>
  );
};

export default App;
