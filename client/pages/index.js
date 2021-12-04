import axios from "axios";
const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  return <h1>This is the landing Page.</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
  // req.header => where the cookie is localted and hostname 'ticketing.dev'
  //   the req.header has all the information sent from the licent server to the ingress service/namespace to auth service
  if (typeof window === "undefined") {
    // we are on the server!
    // reqeust madde to http://NAMESPACE.NAMESPACE_SERVICE
    const { data } = await axios.get(
      "http://ingress-nginx.ingress-nginx-controller.svc.cluster.local/api/users/currentuser",
      {
        headers: {
          Host: req.headers,
        },
      }
    );
  } else {
    //   we are on the broswer!
    // base url
    const { data } = await axios("/api/users/currentuser");
    return data;
    // {currentUser : null}
  }
};

export default LandingPage;
