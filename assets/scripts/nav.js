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
        const navMenuWidth = $('.nav-menu').width();
        let spaceUsed = 0;
        $('.nav-container .nav-item').each(function(index) {
            $(this).removeClass('in-nav in-hamburger');
            spaceUsed += this.offsetWidth;
            if (spaceUsed <= navMenuWidth) {
                $(this).addClass('in-nav');
            } else {
                $(this).addClass('in-hamburger');
                // sub menu
            }
        })
    }
}
