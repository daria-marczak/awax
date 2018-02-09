function initMap() {
	var uluru = {
		lat: -37.8136276,
		lng: 144.96305759999996
	};
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 18,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}