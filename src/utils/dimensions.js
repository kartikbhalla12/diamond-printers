export const getDimensionsFromOrientation = orientation => {
	switch (orientation) {
		case 'portrait':
			return {
				width: 3,
				height: 4,
			};
		case 'landscape':
			return {
				width: 4,
				height: 3,
			};
		case 'square':
		default: {
			return {
				width: 1,
				height: 1,
			};
		}
	}
};
