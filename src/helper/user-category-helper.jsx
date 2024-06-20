export const user_category = (user_category, to_register = false) => {
    localStorage.setItem("user_role", JSON.stringify({user_category}));
    if(to_register) {
        window.location.href = `/${to_register}`
        return
    }
    window.location.href = '/signin'
}