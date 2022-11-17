export class Nav {
    async start() {
        $('.nav-item').hover(
            function () {
                $(this).find('.nav-sub-items').show();
            },
            function () {
                $(this).find('.nav-sub-items').hide();
            });
    }
}
