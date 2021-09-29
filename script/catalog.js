import { getData } from "./getData.js";
import generateSubCatalog from "./generateSubCatalog.js"


export const catalog = () => {
    const updateSubCatalog = generateSubCatalog();
    const btnBurger = document.querySelector(".btn-burger");
    const catalog = document.querySelector(".catalog");
    const overlay = document.querySelector(".overlay");
    const subCatalog = document.querySelector(".subcatalog");
    const subCatalogHeader = document.querySelector(".subcatalog-header");
    const btnReturn = document.querySelector(".btn-return");
    const btnClose = document.querySelector(".btn-close")


    const openMenu = () => {
        catalog.classList.add("open");
        overlay.classList.add("active");
    }
    const closeMenu = () => {
        catalog.classList.remove("open");
        overlay.classList.remove("active");
        closeSubMenu();
    }
    const handlerCatalog = event => {
        event.preventDefault();
        const target = event.target;
        const itemList = target.closest(".catalog-list__item>a");
        if (itemList) {
            getData.subCatalog(itemList.textContent, data => {
                updateSubCatalog(itemList.textContent, data)
                subCatalog.classList.add("subopen");
            })

        };
        if (event.target.classList.contains("btn-close")) {
            closeMenu()
        }
    };
    const closeSubMenu = () => {
        subCatalog.classList.remove("subopen")
    }


    btnBurger.addEventListener("click", openMenu);
    btnClose.addEventListener('click', closeMenu);
    overlay.addEventListener("click", closeMenu);
    catalog.addEventListener("click", handlerCatalog);
    subCatalog.addEventListener("click", event => {
        const btnReturn = event.target.closest("btn-return");
        if (btnBurger) closeSubMenu();
    })

}