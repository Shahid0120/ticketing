import axios from "axios";

export default ({ req }) => {
  // check if its in broswr
  // if in broswer then send to base url
  //   req.header => where the cookie is localted and hostname 'ticketing.dev'
  //   the req.header has all the information sent from the licent server to the ingress service/namespace to auth service

  if (typeof window == "undefined") {
    // sever
    // reqeust madde to http://NAMESPACE.NAMESPACE_SERVICE
    return axios.create({
      baseURL:
        "http://ingress-nginx.ingress-nginx-controller.svc.cluster.local",
      headers: req.headers,
    });
  } else {
    // web
    return axios.create({
      baseUrl: "/",
    });
  }
};
