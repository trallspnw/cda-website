import { BannerList } from "./banner.js";
import { Nav } from "./nav.js";

class App {
    run() {
        const nav = new Nav();
        nav.start();
        const banners = new BannerList();
        banners.startAll();
    }
}

$(document).ready(function() {
    const app = new App();
    app.run();
})