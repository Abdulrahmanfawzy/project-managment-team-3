export function setToken(token: string): void {
  localStorage.setItem("auth_token", token);
}

export function deleteToken(): void {
  localStorage.removeItem("auth_token");
}

export function getToken(): void {
  localStorage.getItem("auth_token");
}
