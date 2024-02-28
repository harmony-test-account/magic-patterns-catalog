/** @type {import('next').NextConfig} */
const nextConfig = {
	//...Other config properties
	experimental: {
		// Only run the plugin in development mode
		swcPlugins: process.env.NODE_ENV !== 'production' || true ? [
			['harmony-ai-plugin', {rootDir: __dirname}]
		] : []
	},
}

module.exports = nextConfig;
