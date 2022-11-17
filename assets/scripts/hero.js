export const ROTATION_TIME = 5000;
export const OVERLAP_TIME = 1000;


export class Hero {
    constructor() {
        this.heroElements = $('.hero-item').toArray();
        this.heroSlides = this.heroElements
            .map(element => new HeroSlide(element, element == this.heroElements[0]));

        for (let i = 0; i < this.heroSlides.length; i++) {
            this.heroSlides[i].nextSlide = (i == this.heroSlides.length -1) ?
                this.heroSlides[0] :
                this.heroSlides[i + 1];
        }
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
                slide.runSlide();
                await new Promise(done => setTimeout(() => done(), ROTATION_TIME)); 
            }
        }
    }

    setSpacerHeight() {
        $('.hero-spacer').css('height', $('.hero-container').css('height'));
    }
}

export class HeroSlide {
    constructor(element, isFirst) {
        this.element = element;
        this.isFirst = isFirst;
        this.imageUrl = $(element).find('.hero-image-url')[0].innerText;
        this.isPrepared = false;
        this.nextSlide;
    }

    async runSlide() {
        if (this.isFirst && !this.isPrepared) {
            this.prepareSlide()
            $(this.element).css('z-index', '1');
        } else {
            if ($(this.element).is(":visible")) {
                $(this.element).hide();
            }
            $(this.element).css('z-index', '1');
            $(this.element).fadeIn();
        }
        this.nextSlide.prepareSlide();
        await new Promise(done => setTimeout(() => done(), ROTATION_TIME/2)); 
        $(this.element).css('z-index', '-1');
        await new Promise(done => setTimeout(() => done(), ROTATION_TIME/2 + OVERLAP_TIME)); 
        $(this.element).hide();
    }

    async prepareSlide() {
        if (this.isPrepared) {
            return;
        }
        $(this.element).css('background-image', 'url("' + this.imageUrl + '")');
        $(this.element).css('z-index', '-2');
        $(this.element).show();
        this.isPrepared = true;
    }
}