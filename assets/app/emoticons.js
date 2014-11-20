app.factory('emoticons', function () {
	var files = [
		'3.gif',
		'allthethings.png',
		'argh.gif',
		'arya.png',
		'awthanks.png',
		'badass.png',
		'bahgawd.gif',
		'bang.gif',
		'beer.png',
		'boom.gif',
		'bravo.gif',
		'buddy.gif',
		'burger.gif',
		'cacodemon.gif',
		'catdrugs.gif',
		'catstare.gif',
		'ceilingcat.png',
		'chef.gif',
		'chompy.gif',
		'clint.gif',
		'comeatmebro.png',
		'crushed.png',
		'damn.gif',
		'dance.gif',
		'dealwithit.gif',
		'devil.gif',
		'dice.gif',
		'doge.png',
		'doomguy.gif',
		'downs.gif',
		'eel.png',
		'effort.gif',
		'eng101.gif',
		'f5.gif',
		'facepalm.gif',
		'feelsgood.png',
		'foreveralone.png',
		'frog.gif',
		'frown.gif',
		'fwp.png',
		'fuuu.png',
		'gay.gif',
		'getin.gif',
		'golfclap.gif',
		'goodnews.png',
		'hattip.gif',
		'haveaseat.png',
		'hellyeah.gif',
		'heysexy.gif',
		'hist101.gif',
		'hodor.png',
		'iceburn.gif',
		'imp.gif',
		'indeed.png',
		'itsatrap.png',
		'jonsnow.png',
		'mad.gif',
		'mancubus.gif',
		'masterstroke.gif',
		'mindblown.gif',
		'motherofgod.gif',
		'munch.gif',
		'ninja.gif',
		'notbad.png',
		'notsureif.png',
		'ohdear.png',
		'okay.png',
		'omgwhy.gif',
		'orly.png',
		'parrot.gif',
		'panic.gif',
		'pinky.gif',
		'psyduck.gif',
		'rageguy.png',
		'rant.gif',
		'rolleyes.gif',
		'romero.gif',
		'sadpanda.png',
		'sarge.gif',
		'sax.gif',
		'science.gif',
		'shipit.png',
		'shrug.png',
		'sigh.gif',
		'siren.gif',
		'skull.gif',
		'smile.gif',
		'smith.gif',
		'smug.gif',
		'smugdog.gif',
		'soulsphere.gif',
		'ssj.gif',
		'stare.png',
		'stare2.gif',
		'successkid.png',
		'suspense.gif',
		'sweatdrop.gif',
		'tableflip.png',
		'therent.png',
		'thumbsdown.png',
		'thumbsnone.png',
		'thumbsup.png',
		'tinfoil.gif',
		'toot.gif',
		'trollface.png',
		'truestory.png',
		'unlocked.gif',
		'unsmith.gif',
		'v.gif',
		'waffenss.gif',
		'wat.png',
		'wink.gif',
		'woop.gif',
		'words.gif',
		'xd.gif',
		'yaycloud.gif'
	];

	var list = _.map(files, function (file) {
		return {name: emoticonName(file), file: file, $count: 0};
	});

	return {
		list: list,
		names: _.pluck(list, 'name'),
		files: _.pluck(list, 'file')
	};
});

app.filter("emoticonName", function () {
	return emoticonName;
});

function emoticonName(input) {
	return input.replace(/.\w+$/, '');
}
