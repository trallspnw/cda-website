export class Nav {
    async start() {
        $('.navbar-item').hover(
            function () {
                $(this).find('.navbar-sub-nav').show();
            },
            function () {
                $(this).find('.navbar-sub-nav').hide();
            });
    }
}
