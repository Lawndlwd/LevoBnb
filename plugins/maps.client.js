export default function(context, inject) {
	addScript()
	let isLoaded = false
	let waiting = []
	inject('gMap', {
		showMap,
		makeAutoComplete,
	})
	function addScript() {
		const script = document.createElement('script')
		script.src =
			'https://maps.googleapis.com/maps/api/js?key=AIzaSyBGYqYoS0VwgPRDT6fS4dt002hZQbDHyQE&libraries=places&callback=initGoogleMaps'
		script.async = true
		window.initGoogleMaps = initGoogleMaps
		document.head.appendChild(script)
	}

	function initGoogleMaps() {
		isLoaded = true
		waiting.forEach((item) => {
			if (typeof item.fn === 'function') {
				item.fn(...item.arguments)
			}
		})
		waiting = []
	}
	function makeAutoComplete(input) {
		if (input instanceof HTMLInputElement) {
			if (!isLoaded) {
				waiting.push({ fn: makeAutoComplete, arguments })
				return
			}
			const autoComplete = new window.google.maps.places.Autocomplete(
				input,
				{
					types: ['(cities)'],
				}
			)
			autoComplete.addListener('place_changed', () => {
				const place = autoComplete.getPlace()
				input.dispatchEvent(
					new CustomEvent('changed', { detail: place })
				)
			})
		}
	}
	function showMap(canvas, lat, lng) {
		if (!isLoaded) {
			waiting.push({ fn: showMap, arguments })
			return
		}
		const mapOptions = {
			zoom: 12,
			center: new window.google.maps.LatLng(lat, lng),
			disableDefaultUI: true,
			zoomControl: true,
			styles: [
				{
					featureType: 'poi.business',
					stylers: [{ visibility: 'off' }],
				},
				{
					featureType: 'transit',
					elementType: 'labels.icon',
					stylers: [{ visibility: 'off' }],
				},
				{
					featureType: 'landscape',
					elementType: 'labels',
					stylers: [{ visibility: 'off' }],
				},
			],
		}
		const position = new window.google.maps.LatLng(lat, lng)
		const gMap = new window.google.maps.Map(canvas, mapOptions)
		const marker = new window.google.maps.Marker({ position })
		marker.setMap(gMap)
		const contentString =
			'<div id="content">' +
			'<div id="siteNotice">' +
			'</div>' +
			'<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
			'<div id="bodyContent">' +
			'<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
			'sandstone rock formation in the southern part of the ' +
			'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
			'south west of the nearest large town, Alice Springs; 450&#160;km ' +
			'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
			'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
			'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
			'Aboriginal people of the area. It has many springs, waterholes, ' +
			'rock caves and ancient paintings. Uluru is listed as a World ' +
			'Heritage Site.</p>' +
			'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
			'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
			'(last visited June 22, 2009).</p>' +
			'</div>' +
			'</div>'

		const infowindow = new google.maps.InfoWindow({
			content: contentString,
		})
		marker.addListener('click', () => {
			infowindow.open(gMap, marker)
		})
	}
}
