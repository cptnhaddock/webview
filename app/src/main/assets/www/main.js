$(document).ready(function() {
	var body = $('body');
	var updateButton = $('.button-fetch');
	var loading = $('.container-loading'); 
	
	updateButton.click(updateButtonClicked);

	function updateButtonClicked(e) {
		body.toggleClass('updating', true);
		updateButton.prop('disabled', true);
		loading.toggleClass('active', true);

		//var names = Android.getTorrentNames(true);
		var names = ["Dracula Untold 2014 720p HDRip x264 AC3-JYK","Lets Be Cops (2014) 720p BrRip x264 - YIFY","Dawn.Of.The.Planet.of.The.Apes.2014.1080p.WEB-DL.DD51.H264-RARBG","Into the Storm (2014) 1080p BrRip x264 - YIFY","Hercules (2014) 1080p BrRip x264 - YIFY","Lucy.2014.1080p.WEB-DL.AAC2.0.H264-RARBG","A Most Wanted Man (2014) 720p BrRip x264 - YIFY","Teenage Mutant Ninja Turtles 2014 1080p WEB-DL x264 AC3-JYK","The Expendables 3 (2014) 1080p BrRip x264 - YIFY","Transformers Age of Extinction (2014) 1080p BrRip x264 - YIFY","Edge of Tomorrow (2014) 1080p BrRip x264 - YIFY","22 Jump Street (2014) 720p BrRip x264 - YIFY","Sex Tape (2014) 720p BrRip x264 - YIFY","How to Train Your Dragon 2 (2014) 1080p BrRip x264 - YIFY","Boyhood (2014) 720p BrRip x264 - YIFY","Step Up All In (2014) 720p BrRip x264 - YIFY","Maleficent (2014) 1080p BrRip x264 - YIFY","The Fault in Our Stars (2014) 720p BrRip x264 - YIFY","Let's Be Cops (2014) 1080p BrRip x264 - YIFY","Captain America The Winter Soldier (2014) 1080p BrRip x264 - YIF","Divergent (2014) 720p BrRip x264 - YIFY","Godzilla (2014) 1080p BrRip x264 - YIFY","Hercules (2014) 720p BrRip x264 - YIFY","The Purge Anarchy (2014) 720p BrRip x264 - YIFY","Reclaim (2014) 720p BrRip x264 - YIFY","Lucy 2014 Dual-Audio 720p WEBRip","Frozen (2013) 1080p BrRip x264 - YIFY","Neighbors (2014) 720p BrRip x264 - YIFY","A Million Ways to Die in the West (2014) 720p BrRip x264 - YIFY","Into the Storm (2014) 720p BrRip x264 - YIFY","Transformers Age of Extinction (2014) 720p BrRip x264 - YIFY","22 Jump Street (2014) 1080p BrRip x264 - YIFY","Noah (2014) 1080p BrRip x264 - YIFY","The Other Woman (2014) 720p BrRip x264 - YIFY","X-Men.Days.of.Future.Past.2014.1080p.WEB-DL.DD5.1.H264-RARBG","Planes Fire and Rescue (2014) 720p BrRip x264 - YIFY","The Expendables 3 (2014) 720p BrRip x264 - YIFY","Edge of Tomorrow (2014) 720p BrRip x264 - YIFY","The Hobbit The Desolation of Smaug (2013) 1080p BrRip x264 - YIF","300 Rise of an Empire (2014) 1080p BrRip x264 - YIFY","The Grand Budapest Hotel (2014) 720p BrRip x264 - YIFY","Hercules.2014.EXTENDED.1080p.WEB-DL.DD5.1.H264-RARBG","Deliver Us from Evil (2014) 720p BrRip x264 - YIFY","Automata (2014) 720p BrRip x264 - YIFY","Need for Speed (2014) 1080p BrRip x264 - YIFY","Transcendence (2014) 720p BrRip x264 - YIFY","Begin Again (2013) 720p BrRip x264 - YIFY","Tammy (2014) 720p BrRip x264 - YIFY","The Wolf of Wall Street (2013) 1080p BrRip x264 - YIFY","The.Giver 2014 720p REPACK HDRip.x264 AC3-JYK","Non-Stop (2014) 720p BrRip x264 - YIFY","Chef (2014) 720p BrRip x264 - YIFY","Dracula.Untold.2014.720p.HDRip.x264.AAC-RARBG","22.Jump.Street.2014.1080p.WEB-DL.AAC2.0.H264-RARBG","Boyhood (2014) 1080p BrRip x264 - YIFY","Think Like a Man Too (2014) 720p BrRip x264 - YIFY","Captain America The Winter Soldier (2014) 720p BrRip x264 - YIFY","Lucy (2014) Dual Audio WEBRip 720p MKV (No Korean Subs)","Godzilla (2014) 720p BrRip x264 - YIFY","Teenage.Mutant.Ninja.Turtles.2014.720p.HDRip.x264.AC3.5.1-RARBG","Eliza Graves (2014) Dual Audio WEB-DL 720p MKV x264","A Most Wanted Man (2014) 1080p BrRip x264 - YIFY","How.to.Train.Your.Dragon.2.2014.1080p.WEB-DL.AAC2.0.H264-RARBG","Maleficent (2014) 720p BrRip x264 - YIFY","The Amazing Spider-Man 2 (2014) 1080p BrRip x264 - YIFY","Drive Hard (2014) 1080p BrRip x264 - YIFY","Divergent (2014) 1080p BrRip x264 - YIFY","12 Years a Slave (2013) 1080p BrRip x264 - YIFY","The Lego Movie (2014) 720p BrRip x264 - YIFY","Step Up All In (2014) 1080p BrRip x264 - YIFY","And So It Goes (2014) 720p BrRip x264 - YIFY","Million Dollar Arm (2014) 720p BrRip x264 - YIFY","The Prince (2014) 1080p BrRip x264 - YIFY","That Awkward Moment (2014) 720p BrRip x264 - YIFY","The Hunger Games: Catching Fire (2013) 720p BrRip x264 - YIFY","The Fault in Our Stars (2014) 1080p BrRip x264 - YIFY","Dawn.Of.The.Planet.of.The.Apes.2014.720p.WEB-DL.x264.AC3-JYK","The Purge Anarchy (2014) 1080p BrRip x264 - YIFY","Automata (2014) 1080p BrRip x264 - YIFY","Zombeavers (2014) 1080p BrRip x264 - YIFY","Annabelle.2014.1080p.PROPER.HC.WEBRip.x264.AAC.2.0-RARBG","Sin.City.A.Dame.to.Kill.For.2014.1080p.BluRay.x264-SPARKS","Thor: The Dark World (2013) 1080p BrRip x264 - YIFY","Gravity (2013) 1080p BrRip x264 - YIFY","RoboCop (2014) 1080p BrRip x264 - YIFY","Rio 2 (2014) 1080p BrRip x264 - YIFY","The Conjuring (2013) 1080p BrRip x264 - YIFY","Neighbors (2014) 1080p BrRip x264 - YIFY","Nothing But the Truth (2008) 1080p BrRip x264 - YIFY","Into The Storm 2014 1080p BRRip x264 DTS-JYK","Despicable Me 2 (2013) 1080p BrRip x264 - YIFY","Earth to Echo (2014) 1080p BrRip x264 - YIFY","Saints and Soldiers The Void (2014) 1080p BrRip x264 - YIFY","The.Giver.2014.1080p.BluRay.x264-SPARKS","A Million Ways to Die in the West (2014) 1080p BrRip x264 - YIFY","The November Man 2014 1080p HDRip x264 AC3-JYK","3 Days to Kill (2014) 720p BrRip x264 - YIFY","Her (2013) 720p BrRip x264 - YIFY","Ride Along (2014) 720p BrRip x264 - YIFY","Wish I Was Here (2014) 720p BrRip x264 - YIFY"];

		setTimeout(function() {
			renderTorrents(names);
		}, 2000);
	}

	function renderTorrents(torrents){
		$('.container-fetch').toggleClass('hide', true);
		
		torrents.forEach(function(name){
			var li = document.createElement('li');
			li.innerHTML = name;

			$('#torrents').append(li);	
		});
		

		body.toggleClass('updating', false);
		updateButton.prop('disabled', false);		
		loading.toggleClass('active', false);
	}
});