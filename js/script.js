/*
$(function(){
    $.getJSON('https://swapi.co/api/people/', function(data) {
        console.log(data);
    });
});*/
var apiLoadURL = 'https://swapi.co/api/';
var saleLoadURL = apiLoadURL + 'people';
// 'https://swapi.co/api/people';
var filmLoadURL = '';
var allSales = [];

fetchSales();

function fetchSales(url) {
    var initial = !url;
    url = url || saleLoadURL;

    var searchData = document.getElementById('searchPro') && document.getElementById('searchPro').value;
    url = !!searchData && searchData.length > 0 && initial ? url + '&search=' + searchData : url;

    $.ajax({
        url: url,
        success: function (data) {
            handleSalesLoad(data, initial);
        },
        error: function () {

        },
        dataType: 'json',
        type: 'GET'
    });
}

function handleSalesLoad(data, initial) {
    var saleHolder = document.getElementById('peopleFlip');
    var i;

    if (initial) {
        allSales = [];
        while (saleHolder.firstChild) {
            saleHolder.removeChild(saleHolder.firstChild);
        }
    }

    allSales = allSales.concat(data.results);


    for (i = 0; i < data.results.length; i++) {
        var sale = data.results[i];

        var saleTag = document.createElement('div');
        saleTag.classList.toggle("col-md-4");
        var sc = "<div class=\"image-flip\" id=\"peopleFlip\" ontouchstart=\"this.classList.toggle('hover');\">\n" +
            "                    <div class=\"mainflip\">\n" +
            "                        <div class=\"frontside\">\n" +
            "                            <div class=\"card\">\n" +
            "                                <div class=\"card-body text-center\">\n" +
            "                                    <p><img class=\" img-fluid\" src=\"img/usr.png\" alt=\"card image\"></p>\n" +
            "                                    <h4 class=\"card-title\">" + sale.name + "</h4>\n" +
            "                                    <h6 class=\"text-center\">" + sale.gender + "</h6>\n" +
            "                                    <h6 class=\"text-center fntNm\">Birth Year : " + sale.birth_year + "</h6>\n" +
            "                                    <a href=\"#\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-plus\"></i></a>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"backside\">\n" +
            "                            <div class=\"card\">\n" +
            "                                <div class=\"card-body text-center mt-4\">\n" +
            "                                    <h4 class=\"card-title\">Sunlimetech</h4>\n" +
            "                                    <p class=\"card-text\">" + sale.films + "</p>\n" +
            "                                    <ul class=\"list-inline\">\n" +
            "                                        <li class=\"list-inline-item\">\n" +
            "                                            <a class=\"social-icon text-xs-center\" target=\"_blank\" href=\"#\">\n" +
            "                                                <i class=\"fa fa-facebook\"></i>\n" +
            "                                            </a>\n" +
            "                                        </li>\n" +
            "                                        <li class=\"list-inline-item\">\n" +
            "                                            <a class=\"social-icon text-xs-center\" target=\"_blank\" href=\"#\">\n" +
            "                                                <i class=\"fa fa-twitter\"></i>\n" +
            "                                            </a>\n" +
            "                                        </li>\n" +
            "                                        <li class=\"list-inline-item\">\n" +
            "                                            <a class=\"social-icon text-xs-center\" target=\"_blank\" href=\"#\">\n" +
            "                                                <i class=\"fa fa-skype\"></i>\n" +
            "                                            </a>\n" +
            "                                        </li>\n" +
            "                                        <li class=\"list-inline-item\">\n" +
            "                                            <a class=\"social-icon text-xs-center\" target=\"_blank\" href=\"#\">\n" +
            "                                                <i class=\"fa fa-google\"></i>\n" +
            "                                            </a>\n" +
            "                                        </li>\n" +
            "                                    </ul>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>";


        saleTag.innerHTML = sc;
        saleHolder.append(saleTag);

    }

}