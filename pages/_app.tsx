// https://nextjs.org/docs/advanced-features/custom-app
import Layout from "./components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout pageTitle="Blog" description="My Personal Blog">
      <Component {...pageProps} />
    </Layout>
  );
}
