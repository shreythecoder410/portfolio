import { AppBar, Toolbar, Button, Box } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <Toolbar className="flex justify-between max-w-7xl mx-auto w-full py-2">

        {/* LOGO / BRAND */}
       <h1 className="text-xl font-bold tracking-wide flex items-center gap-1 cursor-pointer">
  <span className="text-blue-600 font-mono text-lg">&lt;/&gt;</span>
  <span className="text-black">Shreyasee</span>
  <span className="text-blue-600">.dev</span>
</h1>

        {/* DESKTOP MENU */}
        <Box className="hidden md:flex items-center gap-6">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="
                relative text-black font-medium
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-blue-600
                after:transition-all after:duration-300
                hover:text-blue-600 hover:after:w-full
              "
            >
              {item}
            </a>
          ))}

          {/* CTA */}
          <Button
            variant="contained"
            href="#contact"
            sx={{
              ml: 1,
              backgroundColor: "#2563eb",
              textTransform: "none",
              fontWeight: 500,
              borderRadius: "10px",
              px: 3,
              "&:hover": {
                backgroundColor: "#1d4ed8",
              },
            }}
          >
            Hire Me
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
