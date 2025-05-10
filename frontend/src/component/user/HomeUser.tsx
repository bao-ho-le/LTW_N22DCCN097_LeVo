import Header from "../ui/Header";
import Box from "../ui/Box";

import { useState, useEffect } from "react";

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

const box = {
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
} as const;

const productList = {
  display: "flex",
  gap: "8px",
} as const;

const item = {
  display: "flex",
  flexDirection: "column",
  padding: "8px",
  border: "solid 2px #F2F2F2",
  backgroundColor: "white",
  gap: "8px",
} as const;

function HomeUser() {
  const [products, setProducts] = useState<any[]>([]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:8080/user/products", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div style={home}>
      <Header />
      <div style={main}>
        <Box style={box} width="100%" height="100%">
          <strong>
            <div>Danh sách sản phẩm:</div>
          </strong>
          <div style={productList}>
            {products.map((product) => (
              <div style={item}>
                <div>
                  <strong>Tên sản phẩm:</strong> {product.name}
                </div>
                <div>
                  <strong>Loại:</strong> {product.type}
                </div>
                <div>
                  <strong>Thông tin mô tả:</strong> {product.description}
                </div>
                <div>
                  <strong>Giá:</strong>{" "}
                  <span style={{ color: "#FF0000" }}>{product.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </Box>
      </div>
    </div>
  );
}
export default HomeUser;
