/** @type {import('./$types').LayoutLoad} */

export function load() {
    const navItems = [
		{
			src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c564b3064e2b069dc954a5597b0ba52d67084f050544e84e857e7e6546e79272?apiKey=dc11eee01a8f4aa6b112776747461d2f&',
			alt: 'Home',
			text: 'Home',
            link: '/'
		},
		{
			src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bb0991df5af0b4281c6d61d4c634aa0f61d4abe099218222a250f6a405c2d8ae?apiKey=dc11eee01a8f4aa6b112776747461d2f&',
			alt: 'Explore',
			text: 'Explore',
            link: '/explore'
		},
		{
			src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c0ffd805db9f65369dba115684e271365657a1b2ba2c932bb2932b1dd7e5bbc0?apiKey=dc11eee01a8f4aa6b112776747461d2f&',
			alt: 'Learn',
			text: 'Learn',
            link: '/learn'
		}
	];

    const userData = {
		profileSrc:
			'https://cdn.builder.io/api/v1/image/assets/TEMP/9f60bbf12940d34649e59c0e092c1c8b84fff3d51dae77ea9decc7d5083f74c3?apiKey=dc11eee01a8f4aa6b112776747461d2f&',
		alt: 'User Profile',
		name: 'Krishna Kiran',
		settingsSrc:
			'https://cdn.builder.io/api/v1/image/assets/TEMP/64575af3d5780ca3732834369870ebe8c92d42faf885c7470467c65080d67b11?apiKey=dc11eee01a8f4aa6b112776747461d2f&',
		settingsAlt: 'Settings'
	};

	return {
        navItems,
        userData
	};
}