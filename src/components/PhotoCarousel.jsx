import React from 'react';

export const PhotoCarousel = ({ dato }) => {
	return (
		<div className='h-full w-[400px] m-2 flex-shrink-0 cursor-pointer'>
			<div className='rounded-xl overflow-hidden mb-4 relative h-auto'>
				<img src={dato.image} alt={dato.alt} width={400}/>
			</div>

			<div className='px-4 flex gap-4'>
				<div className='flex flex-col gap-2 w-full'>
					<h3 className='text-lg font-bold text-slate-700 leading-7 whitespace-normal'>
						{dato.title}
					</h3>
					<div className='flex gap-4 text-wrap'>
						<p className='text-sm text-slate-800 font-semibold'>
							{dato.textLists}
						</p>
					</div>
				</div>
			</div>

		</div>
	);
};