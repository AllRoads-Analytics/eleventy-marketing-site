module.exports = {
  "title": "AllRoads Analytics",
  "description": "Marketing site.",
  "url": "https://eleventywebstarter.netlify.app",
  "author": "Chris Collins",
  "meta_data": {
    "twitter": "@scottishstoater",
    "opengraph_default": "/static/opengraph-default.jpg"
  },
  "env": process.env.ELEVENTY_ENV === 'production',

	"social": [
		{
			label: 'Twitter',
			url: 'https://twitter.com/AllRoadsApp',
			icon: '<i class="fab fa-twitter"></i>',
		},
		{
			label: 'LinkedIn',
			url: 'https://www.linkedin.com/company/allroads-analytics',
			icon: '<i class="fab fa-linkedin"></i>',
		},
		{
			label: 'Facebook',
			url: 'https://www.facebook.com/ALLRoadsAnalytics/',
			icon: '<i class="fab fa-facebook"></i>',
		},
	],

	"plans": [
		{
				id: 'free',
				label: 'Free',
				monthly_price: 0,
				limit_funnels: 1,
				limit_data_view_days: 7,
				limit_users: 1,
				limit_pageviews_per_month: '10,000',
		},
		{
				id: 'basic',
				label: 'Basic',
				monthly_price: 7,
				limit_funnels: 3,
				limit_data_view_days: 30,
				limit_users: 3,
				limit_pageviews_per_month: '50,000',
		},
		{
				id: 'plus',
				label: 'Plus',
				monthly_price: 15,
				limit_funnels: 10,
				limit_data_view_days: 90,
				limit_users: 5,
				limit_pageviews_per_month: '100,000',
		},
		{
				id: 'pro',
				label: 'Pro',
				monthly_price: 30,
				limit_funnels: 20,
				limit_data_view_days: 365,
				limit_users: 10,
				limit_pageviews_per_month: '500,000',
		},
		{
				id: 'enterprise',
				label: 'Enterprise',
				monthly_price: 50,
				limit_funnels: null,
				limit_data_view_days: null,
				limit_users: null,
				limit_pageviews_per_month: '1,000,000',
		},
	]
}
