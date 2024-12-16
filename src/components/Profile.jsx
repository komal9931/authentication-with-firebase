// import React, { useEffect, useState } from "react";
// import { auth, db } from "../../firebase";
// import { doc, getDoc } from "firebase/firestore";

// function Profile() {
//   const [userDetails, setUserDetails] = useState(null);
//   const fetchUserData = async () => {
//     auth.onAuthStateChanged(async (user) => {
//       console.log(user);
//       const docRef = doc(db, "Users", user.uid);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         setUserDetails(docSnap.data());
//         console.log(docSnap.data());
//       } else {
//         console.log("User is not logged in");
//       }
//     });
//   };
//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   async function handleLogout() {
//     try {
//       await auth.signOut();
//       window.location.href = "/login";
//       console.log("User logged out successfully!");
//     } catch (error) {
//       console.error("Error logging out:", error.message);
//     }
//   }
//   return (
//     <div>
//       {userDetails ? (
//         <>
//           <div style={{ display: "flex", justifyContent: "center" }}>
//             <img
//               src={userDetails.photo}
//               width={"40%"}
//               style={{ borderRadius: "50%" }}
//               alt=""
//             />
//           </div>
//           <h3>Welcome {userDetails.firstName} 🙏🙏</h3>
//           <div>
//             <p>Email: {userDetails.email}</p>
//             <p>First Name: {userDetails.firstName}</p>
//             {/* <p>Last Name: {userDetails.lastName}</p> */}
//           </div>
//           <button className="btn btn-primary" onClick={handleLogout}>
//             Logout
//           </button>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }
// export default Profile;
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          console.log(user);          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
            console.log(docSnap.data());
          } else {
            console.log("User document does not exist");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <div>
      {userDetails ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* <img
              src={userDetails.photo || "https://via.placeholder.com/150"}
              width={"40%"}
              style={{ borderRadius: "50%" }}
              alt="User Profile"
            /> */}
          </div>
          <h3>Namaste, {userDetails.firstName} 🙏🙏</h3>
          <div>
            <p>
              <strong>Email:</strong> {userDetails.email}
            </p>
            <p>
              <strong>First Name:</strong> {userDetails.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {userDetails.lastName || "N/A"}
            </p>
            <p>
              <strong>Contact:</strong> {userDetails.contact || "N/A"}
            </p>
            <p>
              <strong>City:</strong> {userDetails.city || "N/A"}
            </p>
            <p>
              <strong>Gender:</strong> {userDetails.gender || "N/A"}
            </p>
            <p>
              <strong>Hobbies:</strong>{" "}
              {userDetails.hobbies?.length > 0
                ? userDetails.hobbies.join(", ")
                : "N/A"}
            </p>
          </div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
