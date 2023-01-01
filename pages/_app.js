import { Provider } from "react-redux";
import PrimaryLayout from "../components/PrimaryLayout";
import "../styles/globals.css";
import store from "../store";

export default function App({ Component, pageProps }) {
  const renderWithLayout =
    Component.getLayout ||
    ((page) => (
      <Provider store={store}>
        <PrimaryLayout>{page}</PrimaryLayout>
      </Provider>
    ));

  return renderWithLayout(<Component {...pageProps} />);
}
