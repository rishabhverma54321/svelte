/** @type {import('./$types').PageLoad} */
export function load() {
	const section = {
		section: {
			heroSection: {
				cofounder: {
					name: 'Krishna Kiran',
					image: 'https://ucarecdn.com/788028e9-01d3-417f-8122-b0412a90cb6f/Frame41.svg',
					title: 'Co-Founder and CEO'
				},
				description:
					'Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of Engineering. I write hot-takes on building a business, shipping delightful products and accelerating product and career growth.',
				logo: 'https://ucarecdn.com/c2126641-8f33-4b0c-9564-d90ed5c9cd60/SocialIcons.svg',
				url: '/'
			},
			journey: [
				{
					container: {
						date: 'Dec 2023',
						cards: [
							{
								image: 'https://ucarecdn.com/bf954d40-c335-4ca5-9a4d-109479be60e7/Rectangle71.png',
								text: 'No amount of technology can convert a bad story into a good story.'
							},
							{
								image: 'https://ucarecdn.com/bf954d40-c335-4ca5-9a4d-109479be60e7/Rectangle71.png',
								text: "Most people don't have original ideas. Here is how Sam Altman pushes himself to have unpopular ideas."
							}
						]
					},
					position: {
						company_logo:
							'https://ucarecdn.com/c2126641-8f33-4b0c-9564-d90ed5c9cd60/SocialIcons.svg',
						company_name: 'Duggup',
						company_address: 'San Francisco Bay Area Joined',
						date: 'Nov 2023',
						position_title: 'Co-Founder and CEO',
						position_description: 'Full-time - Remote'
					}
				},
				{
					container: {
						date: 'Dec 2023',
						cards: [
							{
								image: 'https://ucarecdn.com/348d2637-7d6d-4a83-a630-9da5c535c323/Rectangle711.png',
								text: `Startup Lesson I am reflecting. Don't build for the "average person".`
							},
							{
								image: 'https://ucarecdn.com/6037165a-b1de-4616-8d29-6318ae4b3743/Rectangle712.png',
								text: "Your biggest regrets at 80 will be acts of omission."
							}
						]
					},
					position: {
						company_logo:
							'https://ucarecdn.com/9857d6ac-3d75-4a02-acd2-e0bc95ea08dc/SocialIcons1.png',
						company_name: 'BetterUp',
						company_address: 'San Francisco Bay Area Joined',
						date: 'Nov 2023',
						position_title: 'VP Engineering',
						position_description: 'Full-time'
					}
				}
			]
		}
	};

	return section;
}
