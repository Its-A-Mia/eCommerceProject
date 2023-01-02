import { Provider, useSelector } from "react-redux";
import PrimaryLayout from "../components/PrimaryLayout";
import "../styles/globals.css";
import store from "../store";
import App from "next/app";

export default function customApp({ Component, pageProps }) {
  // console.log(pageProps);

  const renderWithLayout =
    Component.getLayout ||
    ((page) => (
      <Provider store={store}>
        <PrimaryLayout>{page}</PrimaryLayout>
      </Provider>
    ));

  return renderWithLayout(<Component {...pageProps} />);
}

customApp.getInitialProps = async (appContext) => {
  // getInitialProps may be deprecated, not sure of another way to grab cookie and change layout based on result
  const pageProps = await App.getInitialProps(appContext);
  // set up prop to decide what the layout should present
  const authAndProfile = {
    auth: "auth",
    profile: "profile",
  };

  // checks token on initial render--NavBar catches prop, then sets state depending on object value
  if (!appContext.ctx.req?.cookies.userToken) {
    pageProps.pageProps = {
      authOrProfile: authAndProfile.auth,
    };
  } else {
    pageProps.pageProps = {
      authOrProfile: authAndProfile.profile,
    };
  }

  return {
    ...pageProps,
  };
};
