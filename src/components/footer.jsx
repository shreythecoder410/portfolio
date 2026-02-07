import { Container } from "@mui/material";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container maxWidth="lg">
        <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-3">
          
          {/* BRAND */}
          <span className="font-semibold text-gray-900">
            Shreyasee<span className="text-blue-600">.dev</span>
          </span>

          {/* COPYRIGHT */}
          <span className="text-sm text-gray-500">
            © 2026 Shreyasee Pal. All rights reserved.
          </span>

        </div>
      </Container>
    </footer>
  );
}
