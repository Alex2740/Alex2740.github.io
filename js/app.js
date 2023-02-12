const ToggleMobileMenu = () => {
    const menu = document.getElementById("menu-mobile")
    const iconBurger = document.getElementById("icon-burger")
    const iconClose = document.getElementById("icon-close")

    menu.classList.toggle("close")
    iconBurger.classList.toggle("hidden")
    iconClose.classList.toggle("hidden")
}