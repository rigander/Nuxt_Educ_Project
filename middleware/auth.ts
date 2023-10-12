export default defineNuxtRouteMiddleware(
    (to, from) => {
        console.log("hello from andrii middleware auth");
    });