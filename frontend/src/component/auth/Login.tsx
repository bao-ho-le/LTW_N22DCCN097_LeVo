import Box from "../ui/Box";
import { useState } from "react";

const login = {
  backgroundColor: "#F2F2F2",
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
} as const;

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
} as const;

const container = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
} as const;

const LOGIN_FAILED = "Login Failed";
const INVALID_CREDENTIALS = "Sai tên đăng nhập hoặc mật khẩu";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        setIsError(true);
        setError(INVALID_CREDENTIALS);
        return;
      }

      const data = await response.json();
      const role = data.role;

      if (role === "admin") {
        window.location.href = "/admin";
      } else if (role === "user") {
        window.location.href = "/user";
      }
    } catch (error) {
      setIsError(true);
      setError(LOGIN_FAILED);
    }
  };

  return (
    <div style={login}>
      <Box width="350px" height="" style={{ padding: "16px" }}>
        <form style={form} onSubmit={handleLogin}>
          <div style={container}>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          {/* Catch Error */}
          {isError && <div>{error}</div>}

          <button type="submit">Login</button>
        </form>
      </Box>
    </div>
  );
}
export default Login;
