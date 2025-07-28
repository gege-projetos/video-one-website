import React from 'react';

const Button = React.forwardRef(({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
	const baseClasses = 'inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
	
	const variantClasses = {
		default: 'bg-purple-600 text-white hover:bg-purple-700',
		destructive: 'bg-red-600 text-white hover:bg-red-700',
		outline: 'border border-gray-600 bg-transparent hover:bg-gray-700 hover:text-white',
		secondary: 'bg-gray-600 text-white hover:bg-gray-700',
		ghost: 'hover:bg-gray-700 hover:text-white',
		link: 'text-purple-400 underline-offset-4 hover:underline',
	};
	
	const sizeClasses = {
		default: 'h-10 px-4 py-2',
		sm: 'h-9 px-3',
		lg: 'h-11 px-8',
		icon: 'h-10 w-10',
	};
	
	const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ''}`;
	
	return (
		<button
			className={classes}
			ref={ref}
			{...props}
		/>
	);
});
Button.displayName = 'Button';

export { Button };