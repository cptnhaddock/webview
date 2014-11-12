define(['jquery', 'hammer'], function($, Hammer) {
    var body = $('body'),
        updateButton = $('.button-fetch'),
        loading = $('.container-loading'),
        refreshButton = $('.button-refresh');
    //var hammer = new Hammer(refreshButton[0], {});

    updateButton.click(getTop100);
    refreshButton.click(getTop100);
    //hammer.on('tap', getTop100);

    function getTop100(e) {
        $('#torrents').empty();
        loading.toggleClass('active', true);
        $('.container-fetch').toggleClass('hide', true);

        Android.getTorrentNames("getTorrentNamesCallback");
    }

    function renderTorrents(torrents) {
        var df = document.createDocumentFragment();
        torrents.forEach(function(name) {
            var li = document.createElement('li');
            li.innerHTML = name;

            df.appendChild(li);
        });

        $('#torrents').append(df);

        body.toggleClass('updating', false);
        loading.toggleClass('active', false);
    }

    window.getTorrentNamesCallback = function(result) {
        renderTorrents(result.values);
    }
});