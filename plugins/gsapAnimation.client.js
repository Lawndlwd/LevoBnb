import { gsap, Back } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)

export default function(context, inject) {
	inject('gsap', {
		runAnimation,
	})
	function runAnimation() {
		ScrollTrigger.matchMedia({
			'(min-width: 769px)': function() {
				nav()
			},
			'(max-width: 769px)': function() {},
		})
	}

	function nav() {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.header-index',
				start: 'center top',
				scrub: 1,
			},
		})
		tl.set('.header-index', {
			top: '0rem',
			
		})
		tl.to('.header-index', {
			backgroundColor: 'rgba(253, 253, 253, 1)',
			boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
			position: 'fixed',
			top: '0rem',
			duration: 0.01,
			width: '100%',
		},"-=.5")
	}
}
