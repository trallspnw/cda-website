export class BannerList {
    constructor() {
        this.bannerElements = $('.banner-container .banner-item').toArray();
        this.banners = this.bannerElements.map(element => new Banner(element));
    }

    startAll() {
        this.banners.forEach(banner => banner.start());;
    }
}

export class Banner {
    constructor(element) {
        this.element = element;
    }

    async start() {
        $(this.element, '.close-button').click(() => $(this.element).slideUp()); 

        setTimeout(() => this.show(), 1500);
    }

    show() {
        $(this.element)
            .addClass('active alert')
            .slideDown();
        $(this.element).removeClass('alert');
    }
}
