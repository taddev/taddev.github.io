$.fn.socialSharePrivacy.settings.order = ['facebook','twitter','gplus','reddit','pinterest','linkedin'];
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
		$.getScript('https://' + disqus_shortname + '.disqus.com/embed.js');
		$(this).remove();
	});

	$('.share').socialSharePrivacy({
		layout:"line",
		services:{
			buffer:{ 
				status: false
			},
			delicious:{ 
				status: false
			},
			disqus:{ 
				status: false
			},
			fbshare:{ 
				status: false
			},
			flattr:{ 
				status: false
			},
			hackernews:{ 
				status: false
			},
			mail:{ 
				status: false
			},
			stumbleupon:{ 
				status: false
			},
			tumblr:{ 
				status: false
			},
			xing:{ 
				status: false
			}
		}
	});
});