export const useUtils = () => {
    const sayHello = () => {
        console.log("Hello Andrey")
    };
    return {
        sayHello,
    };
}