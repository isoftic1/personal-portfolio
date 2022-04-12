class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <ul class="navbar-nav">
        <li class="nav-item px-1">
        <a href="/work.html"title="Work page">Coding</a>
        </li>
            <li class="nav-item px-1">
              <a class="nav-link" title="design page" href="">design</a>
            </li>
            <li class="nav-item px-1">
            <a class="nav-link" title="about page" href="/about.html">about</a>
            </li>
            <li class="nav-item px-1">
            <a class="nav-link" title="Linked In Link" href="www.linkedin.com/in/isoftic1" target="_blank"><i class="fab fa-linkedin"></i></a>
            </li>
            <li class="nav-item px-1">
            <a class="nav-link" title="Instagram Link" href="" target="_blank"><i class="fab fa-instagram"></i></a>
            </li>
            <li class="nav-item px-1">
            <a class="nav-link" title="Github Link" href="https://github.com/isoftic1" target="_blank"><i class="fab fa-github-square"></i></a>
            </li>
        </ul> 
      `;
    }
  }
  
  customElements.define('header-component', Header);