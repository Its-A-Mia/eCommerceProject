import PrimaryLayout from "../components/PrimaryLayout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const renderWithLayout = Component.getLayout || ((page) => <PrimaryLayout>{page}</PrimaryLayout>);

  return renderWithLayout(<Component {...pageProps} />);
}
