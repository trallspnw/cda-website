import { Banner, BannerList } from "./banner.js";

class App {
    run() {
        const banners = new BannerList();
        banners.startAll();
    }
}

$(document).ready(function() {
    const app = new App();
    app.run();
})