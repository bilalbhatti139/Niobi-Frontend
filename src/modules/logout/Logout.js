function Logout() {
  localStorage.clear();
  window.location.replace('/login');
}

export default Logout;
