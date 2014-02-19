var disqus_shortname = 'splunkdotnet';
var disqus_url = $.fn.socialSharePrivacy.settings.uri($.fn.socialSharePrivacy.settings);

$.extend(true, $.fn.socialSharePrivacy.settings, {
	layout:'box',
	services: {
		disqus: {
			shortname: disqus_shortname,
			onclick: function () {
				$('#comments-button').click();
			}
		}
	}
});

$(document).ready(function () {
	$('#comments-button').click(function () {
		$.getScript('http://' + disqus_shortname + '.disqus.com/embed.js');
		$(this).remove();
	});
});