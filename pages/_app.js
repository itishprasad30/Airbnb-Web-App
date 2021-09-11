import "tailwindcss/tailwind.css";
import "../styles/global.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progressBar = new ProgressBar({
  size: 4,
  color: "#F06211",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progressBar.start);
Router.events.on("routeChangeComplete", progressBar.finish);
Router.events.on("routeChangeError", progressBar.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
