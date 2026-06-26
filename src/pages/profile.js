import { initProfile } from "../features/profile/components/profile.js";
import { hideLoading } from "../shared/components/loading.js";

window.addEventListener('DOMContentLoaded', async () => {
    await initProfile();
    hideLoading();
})