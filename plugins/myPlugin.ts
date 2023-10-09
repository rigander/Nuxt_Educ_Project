export default defineNuxtPlugin (nuxtApp => {
    return {
        provide: {
            saySimon: (msg: string) => {
                console.log(`Hello ${msg}`);
                return `Hell yeah ${msg}`;
            }
        }
    }
})