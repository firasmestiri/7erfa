
export function isSignedIn() {
  return localStorage.getItem("token");
}