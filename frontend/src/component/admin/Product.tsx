import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
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

function Product() {
  const [products, setProducts] = useState<any[]>([]);
  const [modifyPriceProductId, setModifyPriceProductId] = useState<
    number | null
  >(null);
  const [newPrice, setNewPrice] = useState<string>("");
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    type: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:8080/admin/products", {
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

  const handleDelete = async (productId: number) => {
    const response = await fetch(
      `http://localhost:8080/admin/products/${productId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    } else {
      console.error("Failed to delete product");
    }
  };

  const handleModify = (productId: number, currentPrice: number) => {
    setModifyPriceProductId(productId);
    setNewPrice(currentPrice.toString());
  };

  const handleSave = async (productId: number) => {
    const response = await fetch(
      `http://localhost:8080/admin/products/${productId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ price: Number(newPrice) }),
      }
    );

    if (response.ok) {
      {
        /* dòng code dưới này nhằm mục đích thay đổi giá ngay khi lưu mà không cần load lại trang */
      }
      setProducts((prev) =>
        prev.map((product) =>
          product.id === productId
            ? { ...product, price: Number(newPrice) }
            : product
        )
      );
      setModifyPriceProductId(null);
      setNewPrice("");
    } else {
      console.error("Failed to update product");
    }
  };

  const handleAddProduct = async () => {
    setIsAddingProduct(true);
  };

  const handleSaveNewProduct = async () => {
    const response = await fetch("http://localhost:8080/admin/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (response.ok) {
      const addedProduct = await response.json();
      setProducts((prevProducts) => [...prevProducts, addedProduct]);
      setIsAddingProduct(false);
      setNewProduct({ name: "", type: "", description: "", price: "" });
    } else {
      console.error("Failed to add product");
    }
  };

  const handleCancelAdd = () => {
    setIsAddingProduct(false);
    setNewProduct({ name: "", type: "", description: "", price: "" });
  };

  return (
    <div style={home}>
      <Header />
      <div style={main}>
        <Navigation />
        <Box style={box} width="100%" height="100%">
          <div>
            <strong>Danh sách sản phẩm: </strong>
          </div>

          <div>
            <button onClick={handleAddProduct} type="button">
              Thêm sản phẩm
            </button>
          </div>

          {isAddingProduct && (
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <input
                type="text"
                placeholder="Tên sản phẩm"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Loại"
                value={newProduct.type}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, type: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Mô tả sản phẩm"
                value={newProduct.description}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, description: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Giá"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
              <button onClick={handleSaveNewProduct}>Lưu</button>
              <button onClick={handleCancelAdd}>Hủy</button>
            </div>
          )}

          <div style={productList}>
            {products.map((product) => (
              <div key={product.id} style={item}>
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

                <div>
                  {modifyPriceProductId === product.id ? (
                    <div style={{ display: "flex", gap: "4px" }}>
                      <input
                        type="number"
                        value={newPrice}
                        onChange={(e) => setNewPrice(e.target.value)}
                      />
                      <button onClick={() => handleSave(product.id)}>
                        Lưu
                      </button>
                    </div>
                  ) : (
                    <div style={{ display: "flex", gap: "4px" }}>
                      <button
                        onClick={() => handleModify(product.id, product.price)}
                      >
                        Chỉnh giá
                      </button>
                      <button onClick={() => handleDelete(product.id)}>
                        Xoá
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Box>
      </div>
    </div>
  );
}
export default Product;
