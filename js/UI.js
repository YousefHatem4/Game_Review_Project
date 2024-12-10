export default class uiClass{
    constructor() {
       this.ui = document.querySelector('.UI')
    }
    displayUi() {
        this.ui.innerHTML = `
       <header>
        <img src="./Images/images1.png" class="w-100 z-0" alt="">
    </header>
    <nav class="navbar navbar-expand-lg m-auto bg-nav rounded-nav md-75 sm-100 position-sticky z-3">
        <div class="container">
            <a class="navbar-brand text-white fs-2 my-0 py-0" href="#"> <img src="./Images/images2.png"
                    class="width-nav pe-1" alt=""> Game
                Reviews</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active text-white links" aria-current="page" href="#">mmorpg</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white links" href="#">shooter</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white links" href="#">sailing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white links" href="#">permadeath</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white links" href="#">superhero</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white links" href="#">pixel</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        `
    }
}