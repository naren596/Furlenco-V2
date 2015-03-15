function tabContentImage() {
    $(".tab-content img").each($(window).width() <= 480 ? function() {
        $(this).attr("src").match("_m.jpg") || $(this).attr("src", $(this).attr("src").replace(".jpg", "_m.jpg"))
    } : function() {
        $(this).attr("src", $(this).attr("src").replace("_m.jpg", ".jpg"))
    })
}
$(document).ready(function() {
    $(window).load(function() {
        $(".preloader").fadeOut()
    });
    var t = new WOW({
        mobile: !1
    });
    t.init(), $(window).scroll(function() {
        $(window).width() > 1260 && (windowScroll = $(window).scrollTop(), contentOpacity = 1 - windowScroll / ($("#intro").offset().top + $("#intro").height()), $(".intro-section").css("transform", "translateY(" + Math.floor(.16 * windowScroll) + "px)"), $(".intro-section").css("-webkit-transform", "translateY(" + Math.floor(.16 * windowScroll) + "px)"), $(".intro-section").css("opacity", contentOpacity.toFixed(2)))
    }), $(window).scroll(function() {
        $(window).scrollTop() > 500 ? $(".navbar").addClass("fixednav") : $(".navbar").removeClass("fixednav")
    }), $(".nav").onePageNav({
        currentClass: "current",
        scrollOffset: 500
    }), $(".nav a, .navbar-header a").click(function() {
        $(".navbar-collapse").removeClass("in").addClass("collapse")
    }), $(".navbar-brand").click(function() {
        return $.scrollTo(".intro", 1e3), !1
    }), $(".btn-brief, a.mouse").click(function() {
        return $.scrollTo(".brief", 1e3,{offset:-65}), !1
    }), $(".btn-benefits, a.mouse").click(function() {
        return $.scrollTo(".packages", 1e3,{offset:-65}), !1
    }), $(".btn-subscription, a.mouse").click(function() {
        return $.scrollTo(".features", 1e3,{offset:-65}), !1
    }), $(".screens").owlCarousel({
        items: 4,
        navigation: !0,
        navigationText: ["<i class='fa fa-angle-left btn-slide'></i>", "<i class='fa fa-angle-right btn-slide'></i>"],
        pagination: !1,
        itemsDesktop: [1e3, 4],
        itemsDesktopSmall: [990, 3],
        itemsTablet: [600, 1],
        itemsMobile: !1
    }), $(".screens a").nivoLightbox({
        effect: "fadeScale"
    }), $(".small-slider").owlCarousel({
        items: 1,
        navigation: !0,
        navigationText: ["<i class='fa fa-angle-left btn-slide'></i>", "<i class='fa fa-angle-right btn-slide'></i>"],
        pagination: !1,
        itemsDesktop: [1e3, 1],
        itemsDesktopSmall: [900, 1],
        itemsTablet: [600, 1],
        itemsMobile: !1
    }), $(".testemonials").owlCarousel({
        autoPlay: 8e3,
        singleItem: !0,
        navigation: !1,
        itemsDesktop: [1e3, 1],
        itemsDesktopSmall: [900, 1],
        itemsTablet: [600, 1],
        itemsMobile: !1
    }), $(".video-item").fitVids(), $(".tabs a").click(function(t) {
        t.preventDefault(), $(this).tab("show")
    }), $(".customer-slider").owlCarousel({
        autoPlay: 8e3,
        items: 5,
        pagination: !1,
        itemsDesktop: [1e3, 1],
        itemsDesktopSmall: [900, 1],
        itemsTablet: [600, 1],
        itemsMobile: !1
    }), $(".intro-slider").owlCarousel({singleItem:!0,pagenation:!0,itemsDesktop:[1e3,4],itemsDesktopSmall:[900,2],itemsTablet:[600,1],itemsMobile:!1}),tabContentImage()
}), $(window).resize(function() {
    tabContentImage()
});