import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.scss";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div id={styles.main}>
        <h1>{siteConfig.title}</h1>
        <h3>{siteConfig.tagline}</h3>
      </div>
    </Layout>
  );
}
