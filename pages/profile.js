import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Auth, Hub } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Header from "../components/Header";

function Profile() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          console.log("Sigined In");
          break;
        case "signOut":
          console.log("Sigined Out");
          setUser(null);
          router.push("/");
          break;
        case "signIn_failure":
          console.log("Sign in failure", data);
          break;
      }
    });
    // Access the user session on the client
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => setUser(null));
  }, []);

  const signOutHandler = (anything) => {
    console.log(anything);
  };

  return (
    <div>
      <Header />
      {user && (
        <h1>
          Welcome, {user.username}. Group(s):{" "}
          {user.signInUserSession.accessToken.payload["cognito:groups"]}
        </h1>
      )}
      <AmplifySignOut handleAuthStateChange={signOutHandler} />
    </div>
  );
}

export default withAuthenticator(Profile);
