import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.scss";
import Link from "@docusaurus/Link";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

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
        <div className={styles["button-container"] + " button-color"}>
          <Link href="/docs/intro">Get Started &nbsp;🚀</Link>
        </div>
        <hr className="hr" />
        <HomepageFeatures />
      </div>
    </Layout>
  );
}
