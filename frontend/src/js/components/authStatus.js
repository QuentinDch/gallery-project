// authStatus.js

export async function checkAuthStatus() {
  try {
    const response = await fetch("http://localhost:5000/api/auth/profile", {
      method: "GET",
      credentials: "include",
    });

    return response.ok;
  } catch (error) {
    console.error("Error checking auth status:", error);
    return false;
  }
}
