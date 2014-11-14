define(['jquery', 'hammer'], function($, Hammer) {
    var body = $('body'),
        loading = $('.container-loading'),
        fetch = $('.container-fetch'),
        refreshButton = $('.button-refresh'),
        movies = $('#movies');

    refreshButton.click(getTop100);

    function getTop100(e) {
        movies.empty();
        fetch.toggleClass('active');
        loading.toggleClass('active');

        Android.getTorrentNames("getTorrentNamesCallback");
    }

    function renderTorrents(torrents) {
        var df = document.createDocumentFragment();

        torrents.forEach(function(name) {
            var li = document.createElement('li');
            li.innerHTML = name;

            df.appendChild(li);
        });

        movies.append(df);

        loading.toggleClass('active', false);
    }

    window.getTorrentNamesCallback = function(result) {
        renderTorrents(result.values);
    }
});