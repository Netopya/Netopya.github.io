// based on http://zerosixthree.se/create-a-responsive-header-video-with-graceful-degradation/

var HeaderVideo = function(settings) {
    if (settings.element.length === 0) {
        return;
    }
    this.init(settings);
    this.appendIframe();
};

HeaderVideo.prototype.init = function(settings) {
    this.$element = $(settings.element);
    this.settings = settings;
    this.videoDetails = this.getVideoDetails();
};

HeaderVideo.prototype.getVideoDetails = function() {
    var mediaElement = $(this.settings.media);

    return {
        videoURL: mediaElement.attr('data-video-URL'),
        videoHeight: mediaElement.attr('data-video-height'),
        videoWidth: mediaElement.attr('data-video-width')
    };
};

HeaderVideo.prototype.setFluidContainer = function() {
    var element = this.$element;
    element.data('aspectRatio', this.videoDetails.videoHeight / this.videoDetails.videoWidth);

    $(window).resize(function() {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        element.width(Math.ceil(windowWidth));
        element.height(Math.ceil(windowWidth * element.data('aspectRatio'))); //Set the videos aspect ratio, see https://css-tricks.com/fluid-width-youtube-videos/

        if(windowHeight < element.height()) {
            element.width(Math.ceil(windowWidth));
            element.height(Math.ceil(windowHeight));
        }
    }).trigger('resize');
};

HeaderVideo.prototype.appendIframe = function() {
    var html = '<video id="vid" video autobuffer autoplay muted><source id="mp4" src="'+this.videoDetails.videoURL+'" type="video/mp4"></video>';
    this.$element.children(':eq(0)').after(html);
};

$('.header-video').each(function(i, elem) {
    headerVideo = new HeaderVideo({
      element: elem,
      media: '.header-video__media'
    });
});