import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import Box from "../ui/Box";

const home = {
  backgroundColor: "#F2F2F2",
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
} as const;

const main = {
  display: "flex",
  width: "75%",
  height: "100%",
  gap: "16px",
} as const;

function Home() {
  return (
    <div style={home}>
      <Header />
      <div style={main}>
        <Navigation />
        <Box style={{ padding: "16px" }} width="100%" height="100%">
          <div>
            <strong>Đây là trang Home của Admin</strong>
          </div>
        </Box>
      </div>
    </div>
  );
}
export default Home;
