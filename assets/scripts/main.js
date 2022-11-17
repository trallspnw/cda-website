import { BannerList } from "./banner.js";
import { Hero } from "./hero.js";
import { Nav } from "./nav.js";

class App {
    run() {
        const nav = new Nav();
        nav.start();
        const banners = new BannerList();
        banners.startAll();
        const hero = new Hero();
        hero.start();
    }
}

$(document).ready(function() {
    const app = new App();
    app.run();
})