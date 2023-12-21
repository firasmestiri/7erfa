
//export function isSignedIn() {
  //return localStorage.getItem("token");
//}

export function isSignedIn() {
  console.log(localStorage.getItem('token'));
  const signedIn = localStorage.getItem('token') != null;
  console.log('User is signed in:', signedIn);
  return signedIn;
 // return !!localStorage.getItem("token");
}
