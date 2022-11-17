export const ROTATION_TIME = 1500;

export class Hero {
    constructor() {
        this.heroElements = $('.hero-item').toArray();
        this.heroSlides = this.heroElements.map(element => new HeroSlide(element));
    }

    async start() {
        if (this.heroSlides == 0) {
            return;
        }
        while(true) {
            for (const slide of this.heroSlides) {
                slide.activate();
                await new Promise(done => setTimeout(() => done(), 5000)); 
                slide.deactivate();
            }
        }
    }
}

export class HeroSlide {
    constructor(element) {
        this.element = element
        this.imageUrl = $(element).find('.hero-image-url')[0].innerText;
        $(element).css('background-image', 'url("' + this.imageUrl + '")');
    }

    async activate() {
        $(this.element).show();
    }

    async deactivate() {
        $(this.element).hide();
    }
}