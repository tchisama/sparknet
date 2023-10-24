"use client"
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";
import { Home, LayoutGrid, MessageCircle, MessageCircleIcon } from "lucide-react";
import { Divider } from "@nextui-org/react";


const size = 20
const navbarLinks = [
	{
		href: "/",
		label: "Home",
		icon: <LayoutGrid size={size}/>
	},
	{
		href: "/chat",
		label: "chat",
		icon: <MessageCircleIcon size={size}/>
	},
]

export const Navbar = () => {

	return (
		<div className="dark:bg-[#1b1b1b] bg-[#f5f5f5] flex flex-col items-center p-8 min-w-[100px]">
			<Logo/>
			<Divider className="my-8"/>
			<div className="flex flex-col gap-2">
				{
					navbarLinks.map((item) => (
						<NextLink key={item.href} href={item.href}>
							<Button isIconOnly variant="ghost" className="border-none">
								{item.icon}
							</Button>
						</NextLink>
					))
				}
			</div>
			<ThemeSwitch className="mt-auto"/>
		</div>
	);
};




		// <NextUINavbar maxWidth="xl" position="sticky">
		// 	<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
		// 		<NavbarBrand as="li" className="gap-3 max-w-fit">
		// 			<NextLink className="flex justify-start items-center gap-1" href="/">
		// 				<Logo />
		// 				<p className="font-bold text-inherit">ACME</p>
		// 			</NextLink>
		// 		</NavbarBrand>
		// 		<ul className="hidden lg:flex gap-4 justify-start ml-2">
		// 			{siteConfig.navItems.map((item) => (
		// 				<NavbarItem key={item.href}>
		// 					<NextLink
		// 						className={clsx(
		// 							linkStyles({ color: "foreground" }),
		// 							"data-[active=true]:text-primary data-[active=true]:font-medium"
		// 						)}
		// 						color="foreground"
		// 						href={item.href}
		// 					>
		// 						{item.label}
		// 					</NextLink>
		// 				</NavbarItem>
		// 			))}
		// 		</ul>
		// 	</NavbarContent>

		// 	<NavbarContent
		// 		className="hidden sm:flex basis-1/5 sm:basis-full"
		// 		justify="end"
		// 	>
		// 		<NavbarItem className="hidden sm:flex gap-2">
		// 			<Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
		// 				<TwitterIcon className="text-default-500" />
		// 			</Link>
		// 			<Link isExternal href={siteConfig.links.discord} aria-label="Discord">
		// 				<DiscordIcon className="text-default-500" />
		// 			</Link>
		// 			<Link isExternal href={siteConfig.links.github} aria-label="Github">
		// 				<GithubIcon className="text-default-500" />
		// 			</Link>
		// 			<ThemeSwitch />
		// 		</NavbarItem>
		// 		<NavbarItem className="hidden md:flex">
		// 			<Button
        //     isExternal
		// 				as={Link}
		// 				className="text-sm font-normal text-default-600 bg-default-100"
		// 				href={siteConfig.links.sponsor}
		// 				startContent={<HeartFilledIcon className="text-danger" />}
		// 				variant="flat"
		// 			>
		// 				Sponsor
		// 			</Button>
		// 		</NavbarItem>
		// 	</NavbarContent>

		// 	<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
		// 		<Link isExternal href={siteConfig.links.github} aria-label="Github">
		// 			<GithubIcon className="text-default-500" />
		// 		</Link>
		// 		<ThemeSwitch />
		// 		<NavbarMenuToggle />
		// 	</NavbarContent>

		// 	<NavbarMenu>
		// 		<div className="mx-4 mt-2 flex flex-col gap-2">
		// 			{siteConfig.navMenuItems.map((item, index) => (
		// 				<NavbarMenuItem key={`${item}-${index}`}>
		// 					<Link
		// 						color={
		// 							index === 2
		// 								? "primary"
		// 								: index === siteConfig.navMenuItems.length - 1
		// 								? "danger"
		// 								: "foreground"
		// 						}
		// 						href="#"
		// 						size="lg"
		// 					>
		// 						{item.label}
		// 					</Link>
		// 				</NavbarMenuItem>
		// 			))}
		// 		</div>
		// 	</NavbarMenu>
		// </NextUINavbar>