import buildClient from "../api/build-client";
const LandingPage = ({ currentUser }) => {
  return (
    <div>
      <h1>This is the landing page</h1>
      currentUser ? (<h1>You are not signed in!</h1>) : (
      <h1>You are signed in!</h1>)
    </div>
  );
};

LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  return data;
};

export default LandingPage;
