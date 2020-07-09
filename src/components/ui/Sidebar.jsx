import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div className="md:w-2/5 xl:w-1/5 bg-gray-800">
			<div className="p-6">
				<p className="uppercase text-white text-2xl tracking-wide text-center font-bold">RestaurantApp</p>
				<p className="mt-3 text-gray-600">Administra tu Reataurante en las siguientes opciones</p>
				<nav className='mt-10'>
					<NavLink
						exact
						activeClassName="text-yellow-500"
						to="/inicio"
						className=" p-1 text-grey-400 block hover:bg-yellow-500 hover:text-gray-900"
					>
						Ordenes
					</NavLink>
					<NavLink
						exact
						activeClassName="text-yellow-500"
						to="/menu"
						className=" p-1 text-grey-400 block hover:bg-yellow-500 hover:text-gray-900"
					>
						Menu
					</NavLink>
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
