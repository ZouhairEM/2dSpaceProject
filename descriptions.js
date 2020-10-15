	$('body').click(function() {
		document.getElementById('infosun').style.opacity = '0.0';
		document.getElementById('infomercury').style.opacity = '0.0';
		document.getElementById('infovenus').style.opacity = '0.0';
		document.getElementById('infoearth').style.opacity = '0.0';
		document.getElementById('infomars').style.opacity = '0.0';
		document.getElementById('infojupiter').style.opacity = '0.0';
		document.getElementById('infosaturn').style.opacity = '0.0';
		document.getElementById('infouranus').style.opacity = '0.0';
		document.getElementById('infoneptune').style.opacity = '0.0';
	});

	function togglessun() {
		document.getElementById('infosun').style.opacity = '1.0';
		document.getElementById('infomercury').style.opacity = '0.0';
		document.getElementById('infovenus').style.opacity = '0.0';
		document.getElementById('infoearth').style.opacity = '0.0';
		document.getElementById('infomars').style.opacity = '0.0';
		document.getElementById('infojupiter').style.opacity = '0.0';
		document.getElementById('infosaturn').style.opacity = '0.0';
		document.getElementById('infouranus').style.opacity = '0.0';
		document.getElementById('infoneptune').style.opacity = '0.0';
	}
	$(document).ready(function() {
		$("img").hover(function() {
			togglessun();
		});
	});

	function togglesmercury() {
		document.getElementById('infosun').style.opacity = '0.0';
		document.getElementById('infomercury').style.opacity = '1.0';
		document.getElementById('infovenus').style.opacity = '0.0';
		document.getElementById('infoearth').style.opacity = '0.0';
		document.getElementById('infomars').style.opacity = '0.0';
		document.getElementById('infojupiter').style.opacity = '0.0';
		document.getElementById('infosaturn').style.opacity = '0.0';
		document.getElementById('infouranus').style.opacity = '0.0';
		document.getElementById('infoneptune').style.opacity = '0.0';
	}
	$(document).ready(function() {
		$("#Mercury").hover(function() {
			togglesmercury();
		});
	});

	function togglesvenus() {
		document.getElementById('infosun').style.opacity = '0.0';
		document.getElementById('infomercury').style.opacity = '0.0';
		document.getElementById('infovenus').style.opacity = '1.0';
		document.getElementById('infoearth').style.opacity = '0.0';
		document.getElementById('infomars').style.opacity = '0.0';
		document.getElementById('infojupiter').style.opacity = '0.0';
		document.getElementById('infosaturn').style.opacity = '0.0';
		document.getElementById('infouranus').style.opacity = '0.0';
		document.getElementById('infoneptune').style.opacity = '0.0';
	}
	$(document).ready(function() {
		$("#Venus").hover(function() {
			togglesvenus();
		});
	});

	function togglesearth() {
		document.getElementById('infosun').style.opacity = '0.0';
		document.getElementById('infomercury').style.opacity = '0.0';
		document.getElementById('infovenus').style.opacity = '0.0';
		document.getElementById('infoearth').style.opacity = '1.0';
		document.getElementById('infomars').style.opacity = '0.0';
		document.getElementById('infojupiter').style.opacity = '0.0';
		document.getElementById('infosaturn').style.opacity = '0.0';
		document.getElementById('infouranus').style.opacity = '0.0';
		document.getElementById('infoneptune').style.opacity = '0.0';
	}
	$(document).ready(function() {
		$("#Earth").hover(function() {
			togglesearth();
		});
	});

	function togglesmars() {
		document.getElementById('infosun').style.opacity = '0.0';
		document.getElementById('infomercury').style.opacity = '0.0';
		document.getElementById('infovenus').style.opacity = '0.0';
		document.getElementById('infoearth').style.opacity = '0.0';
		document.getElementById('infomars').style.opacity = '1.0';
		document.getElementById('infojupiter').style.opacity = '0.0';
		document.getElementById('infosaturn').style.opacity = '0.0';
		document.getElementById('infouranus').style.opacity = '0.0';
		document.getElementById('infoneptune').style.opacity = '0.0';
	}
	$(document).ready(function() {
		$("#Mars").hover(function() {
			togglesmars();
		});
	});

	function togglesjupiter() {
		document.getElementById('infosun').style.opacity = '0.0';
		document.getElementById('infomercury').style.opacity = '0.0';
		document.getElementById('infovenus').style.opacity = '0.0';
		document.getElementById('infoearth').style.opacity = '0.0';
		document.getElementById('infomars').style.opacity = '0.0';
		document.getElementById('infojupiter').style.opacity = '1.0';
		document.getElementById('infosaturn').style.opacity = '0.0';
		document.getElementById('infouranus').style.opacity = '0.0';
		document.getElementById('infoneptune').style.opacity = '0.0';
	}
	$(document).ready(function() {
		$("#Jupiter").hover(function() {
			togglesjupiter();
		});
	});

	function togglessaturn() {
		document.getElementById('infosun').style.opacity = '0.0';
		document.getElementById('infomercury').style.opacity = '0.0';
		document.getElementById('infovenus').style.opacity = '0.0';
		document.getElementById('infoearth').style.opacity = '0.0';
		document.getElementById('infomars').style.opacity = '0.0';
		document.getElementById('infojupiter').style.opacity = '0.0';
		document.getElementById('infosaturn').style.opacity = '1.0';
		document.getElementById('infouranus').style.opacity = '0.0';
		document.getElementById('infoneptune').style.opacity = '0.0';
	}
	$(document).ready(function() {
		$("#Saturn").hover(function() {
			togglessaturn();
		});
	});

	function togglesuranus() {
		document.getElementById('infosun').style.opacity = '0.0';
		document.getElementById('infomercury').style.opacity = '0.0';
		document.getElementById('infovenus').style.opacity = '0.0';
		document.getElementById('infoearth').style.opacity = '0.0';
		document.getElementById('infomars').style.opacity = '0.0';
		document.getElementById('infojupiter').style.opacity = '0.0';
		document.getElementById('infosaturn').style.opacity = '0.0';
		document.getElementById('infouranus').style.opacity = '1.0';
		document.getElementById('infoneptune').style.opacity = '0.0';
	}
	$(document).ready(function() {
		$("#Uranus").hover(function() {
			togglesuranus();
		});
	});

	function togglesneptune() {
		document.getElementById('infosun').style.opacity = '0.0';
		document.getElementById('infomercury').style.opacity = '0.0';
		document.getElementById('infovenus').style.opacity = '0.0';
		document.getElementById('infoearth').style.opacity = '0.0';
		document.getElementById('infomars').style.opacity = '0.0';
		document.getElementById('infojupiter').style.opacity = '0.0';
		document.getElementById('infosaturn').style.opacity = '0.0';
		document.getElementById('infouranus').style.opacity = '0.0';
		document.getElementById('infoneptune').style.opacity = '1.0';
	}
	$(document).ready(function() {
		$("#Neptune").hover(function() {
			togglesneptune();
		});
	});