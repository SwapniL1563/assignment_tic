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

const pages = ["Home", "About", "Products", "Careers"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [activePage, setActivePage] = React.useState("Home"); // default active

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page?: string) => {
    if (page) setActivePage(page);
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
          backgroundColor: { xs: "transparent", md: "white" },
          borderRadius: "10px",
          mt: 3, 
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image src="/logo.png" alt="Logo" width={70} height={20} />
          </Box>

          <Box
            sx={{
              // flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                disableRipple 
                onClick={() => handleCloseNavMenu(page)}
                sx={{
                  my: 1,
                  color: activePage === page ? "green" : "black",
                  fontSize: "1.1rem",
                  fontWeight: activePage === page ? "600" : "500",
                  textTransform: "none !important", 
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              variant="text"
              disableRipple
              sx={{
                backgroundColor: "#FCDE07",
                fontSize:"1.1rem",
                fontWeight:"500",
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
              sx={{ color: "white", width:"50px"}}
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
              onClose={() => handleCloseNavMenu()}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography
                    textAlign="center"
                    sx={{
                      textTransform: "none",
                      color: activePage === page ? "green" : "black",
                      fontWeight: activePage === page ? 600 : 400,
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <Button
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
