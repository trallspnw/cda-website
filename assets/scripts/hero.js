export const ROTATION_TIME = 5000;

export class Hero {
    constructor() {
        this.heroElements = $('.hero-item').toArray();
        this.heroSlides = this.heroElements.map(element => new HeroSlide(element));
        this.started = false;
    }

    async start() {
        if (this.heroSlides == 0) {
            return;
        }

        this.setSpacerHeight();
        $(window).on('resize', () => {
            this.setSpacerHeight();
        });

        while(true) {
            for (const slide of this.heroSlides) {
                slide.activate(this.started);
                this.started = true;
                await new Promise(done => setTimeout(() => done(), 5000)); 
                slide.deactivate();
            }
        }
    }

    setSpacerHeight() {
        $('.hero-spacer').css('height', $('.hero-container').css('height'));
    }
}

export class HeroSlide {
    constructor(element) {
        this.element = element
        this.imageUrl = $(element).find('.hero-image-url')[0].innerText;
        $(element).css('background-image', 'url("' + this.imageUrl + '")');
    }

    async activate(started) {
        if (!started) {
            $(this.element).show();
            $(this.element).css('z-index', '-1');
        }
        $(this.element).css('z-index', '1');
        $(this.element).fadeIn();
        await new Promise(done => setTimeout(() => done(), 5000/2)); 
        $(this.element).css('z-index', '-1');
    }

    async deactivate() {
        await new Promise(done => setTimeout(() => done(), 5000/2)); 
        $(this.element).hide();
    }
}