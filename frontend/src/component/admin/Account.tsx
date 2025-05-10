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

const productList = {
  display: "flex",
  gap: "8px",
} as const;

const item = {
  display: "flex",
  flexDirection: "row",
  padding: "8px",
  border: "solid 2px #F2F2F2",
  backgroundColor: "white",
  gap: "8px",
} as const;

const box = {
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
} as const;

function Account() {
  const [accounts, setAccounts] = useState<any[]>([]);

  useEffect(() => {
    const fetchAccount = async () => {
      const response = await fetch("http://localhost:8080/admin/accounts", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const data = await response.json();
        setAccounts(data);
      }
    };

    fetchAccount();
  }, []);

  return (
    <div style={home}>
      <Header />
      <div style={main}>
        <Navigation />
        <Box style={box} width="100%" height="100%">
          <div>
            <strong>Danh sách accounts:</strong>{" "}
          </div>
          <div style={productList}>
            {accounts.map((account) => (
              <div key={account.id} style={item}>
                <div>
                  <strong>username:</strong> {account.username}
                </div>
                <div>
                  <strong>Tên:</strong> {account.name}
                </div>
                <div>
                  <strong>Vai trò:</strong> {account.role}
                </div>
                <div>
                  <strong>Địa chỉ:</strong> {account.address}
                </div>
              </div>
            ))}
          </div>
        </Box>
      </div>
    </div>
  );
}
export default Account;
