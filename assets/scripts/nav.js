export class Nav {
    async start() {
        this.stackNav();
        $('.nav-container .nav-item').hover(
            function () {
                $(this).find('.nav-sub-items').show();
            },
            function () {
                $(this).find('.nav-sub-items').hide();
            });

        $(window).on('resize', () => {
            this.stackNav();
        });  
    }

    stackNav() {
        let navMenuWidth = $('.nav-menu').width();
        let items = $('.nav-container .nav-item');
        let totalWidthOfItems = 0;
        let spaceUsed = 0;

        items.each(function(index) {
            $(this).removeClass('in-nav in-hamburger');
            totalWidthOfItems += this.offsetWidth;
        });

        $('.nav-hamburger').removeClass('present');
        if (totalWidthOfItems > navMenuWidth) {
            $('.nav-hamburger').addClass('present');
        } 
        navMenuWidth = $('.nav-menu').width();
        
        items.each(function(index) {
            spaceUsed += this.offsetWidth;
            if (spaceUsed <= navMenuWidth) {
                $(this).addClass('in-nav');
            } else {
                $(this).addClass('in-hamburger');
                // sub menu
            }
        });
    }
}
