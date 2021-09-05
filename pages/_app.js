import "tailwindcss/tailwind.css";
import "../styles/global.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
const progress = new ProgressBar({
  size: 4,

  // Color of the progress bar.
  // Also used for the glow around the bar.
  color: "#59FE59",

  // Class name used for the progress bar element.
  className: "z-50",

  // How many milliseconds to wait before the progress bar
  // animation starts after calling .start().
  delay: 100,
});
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeEnd", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
