import Box from "./Box";
import { Link } from "react-router-dom";

const navigation = {
  display: "flex",
  flexDirection: "column",
  padding: "16px",
  gap: "16px",
} as const;

const navLabel = {
  textDecoration: "none",
  color: "inherit",
};

const Navigation = () => {
  return (
    <Box style={navigation} width="200px" height="100%">
      <Link style={navLabel} to="/admin">
        Home
      </Link>
      <Link style={navLabel} to="/admin/account">
        Account
      </Link>
      <Link style={navLabel} to="/admin/product">
        Product
      </Link>
    </Box>
  );
};

export default Navigation;
