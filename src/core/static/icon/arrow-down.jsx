import React from 'react';

export const ArrowDownSVGColors = {
	white: '#FFF',
	gray: '#717171',
	blue: '#4655FF',
}

export const ArrowDownSVG = ({ color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="50"
			height="50"
			viewBox="0 0 50 50"
		>
			<path
				fill={color}
				d="M0.384806 3.61137C0.550271 3.44595 0.77466 3.35303 1.00863 3.35303C1.2426 3.35303 1.46699 3.44595 1.63245 3.61137L6.0001 7.97902L10.3677 3.61137C10.5342 3.45064 10.757 3.3617 10.9884 3.36371C11.2197 3.36572 11.441 3.45852 11.6046 3.62212C11.7682 3.78571 11.861 4.00702 11.863 4.23837C11.865 4.46972 11.7761 4.6926 11.6154 4.85902L6.62392 9.85049C6.45845 10.0159 6.23406 10.1088 6.0001 10.1088C5.76613 10.1088 5.54174 10.0159 5.37627 9.85049L0.384806 4.85902C0.21939 4.69355 0.126465 4.46916 0.126465 4.23519C0.126465 4.00122 0.21939 3.77683 0.384806 3.61137Z"
			/>
		</svg>
	);
}

export default ArrowDownSVG;
