export class Nav {
    async start() {
        this.hamburgerMenuOpen = false;

        this.stackNav();
        $('.nav-container .nav-item').hover(
            function () {
                $(this).find('.nav-sub-items').show();
                $('.collapsed-nav').trigger('close');
            },
            function () {
                $(this).find('.nav-sub-items').hide();
            });

        $(window).on('resize', () => {
            this.stackNav();
        });

        this.initHamburger();
    }

    stackNav() {
        let navMenuWidth = $('.nav-menu').width();
        let items = $('.nav-container .nav-item');
        let hamburgerItems =  $('.collapsed-nav-container .nav-item');
        let totalWidthOfItems = 0;
        let spaceUsed = 0;

        $('.collapsed-nav').trigger('close');
        items.each(function(index) {
            $(items[index]).removeClass('in-nav in-hamburger');
            $(hamburgerItems[index]).removeClass('in-hamburger');
            totalWidthOfItems += items[index].offsetWidth;
        });

        $('.nav-hamburger').removeClass('present');
        if (totalWidthOfItems > navMenuWidth) {
            $('.nav-hamburger').addClass('present');
        } 
        navMenuWidth = $('.nav-menu').width();
        
        items.each(function(index) {
            spaceUsed += items[index].offsetWidth;
            if (spaceUsed <= navMenuWidth) {
                $(items[index]).addClass('in-nav');
            } else {
                $(items[index]).addClass('in-hamburger');
                $(hamburgerItems[index]).addClass('in-hamburger');
            }
        });
    }

    initHamburger() {
        $('.collapsed-nav').on('open', this.openHamburger);
        $('.collapsed-nav').on('close', this.closeHamburger);

        $('.hamburger-button').bind('click', () => $('.collapsed-nav').trigger('open'));
    }



    openHamburger() {
        $('.collapsed-nav-container').show("slide");
        $('.hamburger-button').unbind('click');

        $(document).bind('mouseup', function(e) {
            var container = $('.collapsed-nav-container');
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.collapsed-nav').trigger('close');
            }            
        });
    }

    async closeHamburger() {
        $('.collapsed-nav-container').hide();
        $(document).unbind('mouseup');
        setTimeout(() => $('.hamburger-button').bind('click', () => $('.collapsed-nav').trigger('open')), 50);
    }
}
