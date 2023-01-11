// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	build: {
		transpile: ["swiper"],
	},
	image: {
		dir: "assets/img",
		provider: "netlify",
	},
	router: {
		base: "/LDPR-nuxt/", // base: '/<repository>/'
	},
	css: ["~/assets/scss/main.scss"],
	modules: ["@pinia/nuxt", "nuxt-swiper", "@nuxt/image-edge", "nuxt-icons"],
});
