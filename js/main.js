(function () {
    "use strict";

    var $html = document.querySelector("html");
    var $light = document.querySelector("#light");
    var $dark = document.querySelector("#dark");

    $html.classList = "js";

    $light.addEventListener("change", function () {
        $html.classList.add("light-mode");
    })

    $dark.addEventListener("change", function () {
        $html.classList.remove("light-mode");
    })

    // Scrollspy

    window.addEventListener("scroll", () => {   //Serve pra quando eu descer a tela, a nav ficar da cor da atual seção que estou
        var windo = window.scrollY + 350;
        if (sobre.offsetTop <= windo && tecnologias.offsetTop > windo) {   // Pra afetar o nav Dishes, uso "dishes" e o nome da próxima nav que no caso aqui é o "about"

            document.querySelector(".inicioo").removeAttribute("id", "active")
            document.querySelector(".sobree").setAttribute("id", "active")
            document.querySelector(".tecnologiass").removeAttribute("id", "active")
            document.querySelector(".projetoss").removeAttribute("id", "active")
            document.querySelector(".contatoo").removeAttribute("id", "active")
        }

        else if (tecnologias.offsetTop <= windo && projetos.offsetTop > windo) {

            document.querySelector(".inicioo").removeAttribute("id", "active")
            document.querySelector(".sobree").removeAttribute("id", "active")
            document.querySelector(".tecnologiass").setAttribute("id", "active")
            document.querySelector(".projetoss").removeAttribute("id", "active")
            document.querySelector(".contatoo").removeAttribute("id", "active")
        }

        else if (projetos.offsetTop <= windo && contato.offsetTop > windo) {

            document.querySelector(".inicioo").removeAttribute("id", "active")
            document.querySelector(".sobree").removeAttribute("id", "active")
            document.querySelector(".tecnologiass").removeAttribute("id", "active")
            document.querySelector(".projetoss").setAttribute("id", "active")
            document.querySelector(".contatoo").removeAttribute("id", "active")
        }

        else if (contato.offsetTop <= windo) {

            document.querySelector(".inicioo").removeAttribute("id", "active")
            document.querySelector(".sobree").removeAttribute("id", "active")
            document.querySelector(".tecnologiass").removeAttribute("id", "active")
            document.querySelector(".projetoss").removeAttribute("id", "active")
            document.querySelector(".contatoo").setAttribute("id", "active")
        }

        else if (inicio.offsetTop <= windo) {

            document.querySelector(".inicioo").setAttribute("id", "active")
            document.querySelector(".sobree").removeAttribute("id", "active")
            document.querySelector(".tecnologiass").removeAttribute("id", "active")
            document.querySelector(".projetoss").removeAttribute("id", "active")
            document.querySelector(".contatoo").removeAttribute("id", "active")
        }
    })
})()