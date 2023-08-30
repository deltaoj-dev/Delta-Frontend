$(function() {
    // 搜索框
    $("#search-box > form > input").focus(function() {
        $("#search-box > form > input").animate(
            {width: getComputedStyle($("#search-box > form > input")[0]).getPropertyValue("--search-box-max-width")}, 80
        );
    });
    $("#search-box > form > input").focusout(function() {
        $("#search-box > form > input").animate(
            {width: getComputedStyle($("#search-box > form > input")[0]).getPropertyValue("--search-box-min-width")}, 80
        );
    });

    // 导航栏
    $("#delta-list > div > a").each(function() {
        if (this.href == $(location).attr("href"))
            this.style.backgroundColor = getComputedStyle($(":root")[0]).getPropertyValue("--third-color");
    });
});