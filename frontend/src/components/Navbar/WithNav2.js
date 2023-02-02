import React from "react";
import NavbarOnlyLogo from "./NavbarOnlyLogo";
import { Outlet } from "react-router";

export default () => {
	return (
		<>
			<NavbarOnlyLogo />
			<Outlet />
		</>
	);
};
