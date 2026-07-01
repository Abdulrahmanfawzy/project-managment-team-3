class TokenService {
  private static tokenKey: string = "auth_token";
  public static setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }
  public static getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
  public static deleteToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
export default TokenService;
