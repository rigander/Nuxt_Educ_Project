export default defineNuxtRouteMiddleware(
    (to, from) => {
        const isLoggedIn = false;
        // to is the destination
        console.log(to);
        if (isLoggedIn) {
            // redirect to the page we want to go
            return navigateTo(to.fullPath);
        }
        // redirect to a login page
        return navigateTo("/login");
    });