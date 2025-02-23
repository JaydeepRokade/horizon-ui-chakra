// Chakra Imports
import { 
	Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Link, Text, useColorModeValue 
  } from "@chakra-ui/react";
  import PropTypes from "prop-types";
  import React, { useState, useEffect } from "react";
  import AdminNavbarLinks from "components/navbar/NavbarLinksAdmin";
  
  export default function AdminNavbar({ secondary, message, brandText, onOpen, logoText, fixed }) {
	const [scrolled, setScrolled] = useState(false);
  
	useEffect(() => {
	  const changeNavbar = () => setScrolled(window.scrollY > 1);
	  window.addEventListener("scroll", changeNavbar);
	  return () => window.removeEventListener("scroll", changeNavbar);
	}, []);
  
	// Navbar Styling
	const mainText = useColorModeValue("navy.700", "white");
	const secondaryText = useColorModeValue("gray.700", "white");
	const navbarBg = useColorModeValue("rgba(244, 247, 254, 0.2)", "rgba(11,20,55,0.5)");
	const navbarProps = {
	  position: "fixed",
	  boxShadow: "none",
	  bg: navbarBg,
	  borderColor: "transparent",
	  filter: "none",
	  backdropFilter: "blur(20px)",
	  borderRadius: "16px",
	  borderWidth: "1.5px",
	  borderStyle: "solid",
	  transition: "0.25s linear",
	  minH: "75px",
	  mx: "auto",
	  pb: "8px",
	  px: { sm: "15px", md: "10px" },
	  pt: "8px",
	  top: { base: "12px", md: "16px", lg: "20px", xl: "20px" },
	  w: {
		base: "calc(100vw - 6%)",
		md: "calc(100vw - 8%)",
		lg: "calc(100vw - 6%)",
		xl: "calc(100vw - 350px)",
		"2xl": "calc(100vw - 365px)",
	  },
	};
  
	return (
	  <Box {...navbarProps}>
		<Flex w="100%" flexDirection={{ sm: "column", md: "row" }} alignItems={{ xl: "center" }}>
		  <Box mb={{ sm: "8px", md: "0px" }}>
			<Breadcrumb>
			  <BreadcrumbItem color={secondaryText} fontSize="sm" mb="5px">
				<BreadcrumbLink href="#" color={secondaryText}>Pages</BreadcrumbLink>
			  </BreadcrumbItem>
			  <BreadcrumbItem color={secondaryText} fontSize="sm" mb="5px">
				<BreadcrumbLink href="#" color={secondaryText}>{brandText}</BreadcrumbLink>
			  </BreadcrumbItem>
			</Breadcrumb>
			<Link 
			  color={mainText} 
			  href="#" 
			  fontWeight="bold" 
			  fontSize="34px" 
			  _hover={{ color: mainText }}
			  _active={{ bg: "inherit", transform: "none", borderColor: "transparent" }}
			  _focus={{ boxShadow: "none" }}
			>
			  {brandText}
			</Link>
		  </Box>
		  <Box ms="auto" w={{ sm: "100%", md: "unset" }}>
			<AdminNavbarLinks onOpen={onOpen} logoText={logoText} secondary={secondary} fixed={fixed} scrolled={scrolled} />
		  </Box>
		</Flex>
		{secondary && <Text color="white">{message}</Text>}
	  </Box>
	);
  }
  
  AdminNavbar.propTypes = {
	brandText: PropTypes.string,
	secondary: PropTypes.bool,
	fixed: PropTypes.bool,
	onOpen: PropTypes.func,
	logoText: PropTypes.string,
  };
  