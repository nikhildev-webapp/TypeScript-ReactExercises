import type React from "react";

interface UserProfileProps{
    name: string;
    age: number;
    IsOnline: boolean;
    city:string
}
const UserProfileInterface:React.FC<UserProfileProps>= ({name,age,IsOnline,city})=> {
  return (
      <>
          <div>
              <h1>UserProfile</h1>
              <p>Creatig a UserProfile pass the props using the Interface instead of Type in typescript</p>
              <h3>UserName:{name}</h3>
              <h3>Age:{age}</h3>
              <h3>OnlineStatus:{IsOnline?"Online":"Offline"}</h3>
              <h3>City:{city}</h3>
         </div>
      </>
  )
}

export default UserProfileInterface