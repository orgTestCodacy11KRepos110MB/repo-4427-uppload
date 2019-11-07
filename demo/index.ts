import { Uppload } from "../src/uppload";
// import Axios from "@uppload/axios";
import Instagram from "../src/uploaders/instagram";
import Camera from "../src/uploaders/camera";
import URL from "../src/uploaders/URL";
import Local from "../src/uploaders/local";
import { en } from "../src/i18n";

const uppload = new Uppload({
  value: "https://via.placeholder.com/150",
  bind: ".uppload-image",
  call: ".uppload-button",
  lang: en
});
uppload.use([new Local(), new Camera(), new Instagram(), new URL()]);
// uppload.use(new Axios(() => ({
//   method: "GET",
//   url: "https://jsonplaceholder.typicode.com/todos/1"
// }), () => "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"));

uppload.open();