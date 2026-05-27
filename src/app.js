import { loadProfileHeader } from "./components/common/load-profile-header.js";
import { handleLogout } from "./utils/logout.js";

document.addEventListener('DOMContentLoaded', () => {
    loadProfileHeader();
    handleLogout();
});