"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/" },
  { label: "Careers", path: "/career" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [elevate, setElevate] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => setElevate(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "transparent",
        boxShadow: "none",
        color: "black",
        px: { xs: 2, md: 0 },
      }}
    >
      <Container
        sx={{
          width: { xs: "100%", md: "85%" },
          mx: "auto",
          backgroundColor: "white",
          borderRadius: "10px",
          mt: 3,
          transition: "box-shadow 0.3s ease",
          boxShadow: elevate ? "0 4px 12px rgba(0,0,0,0.2)" : "none",
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link href="/" style={{ display: "flex", alignItems: "center" }}>
              <Image src="/logo.png" alt="Logo" width={70} height={20} />
            </Link>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {pages.map((page) => (
              <Link key={page.label} href={page.path}>
                <Button
                  disableRipple
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 1,
                    color: pathname === page.path ? "#10562C" : "black",
                    fontSize: "1.1rem",
                    fontWeight: pathname === page.path ? "600" : "500",
                    textTransform: "none",
                  }}
                >
                  {page.label}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              variant="text"
              disableRipple
              sx={{
                backgroundColor: "#FCDE07",
                fontSize: "1.1rem",
                fontWeight: "500",
                color: "black",
                borderRadius: "8px",
                "&:hover": { backgroundColor: "#f5d742" },
                padding: "5px 20px",
                textTransform: "none",
              }}
            >
              Contact Us
            </Button>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="mobile-menu"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              disableRipple
              sx={{ color: "black", width: "50px" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="mobile-menu"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" },marginRight:"10rem" , marginTop:"0.5rem", borderRadius:"14px"}}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Link href={page.path} style={{ width: "100%" }}>
                    <Typography
                      textAlign="center"
                      sx={{
                        textTransform: "none",
                        color: pathname === page.path ? "#10562C" : "black",
                        fontWeight: pathname === page.path ? 600 : 400,
                      }}
                    >
                      {page.label}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
              <MenuItem>
                <Button
                  href="/"
                  fullWidth
                  disableRipple
                  variant="contained"
                  sx={{
                    backgroundColor: "yellow",
                    color: "black",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#f5d742" },
                  }}
                >
                  Contact Us
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
