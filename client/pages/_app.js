import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/build-client";
const AppComponent = ({ Component, pageProps }) => {
  return (
    <div>
      <h1>Header!</h1>
      <Component {...pageProps} />
    </div>
  );
};

AppComponent.getInitialProps = (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");
  //   when you console log appContext is shows the componets in Apptree thats
  // are trying to use getInitsalProps this is finding those compoents
  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);

  return data;
};

export default AppComponent;
