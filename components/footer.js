class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer>
            <div class="footer-links py-2">
                <ul>
                <li><a href="/work.html"title="Work page">Coding</a></li>
                    <li><a href="">Design</a></li>
                    <li><a href="/about.html" title="About page">About</a></li>
                    
                    <li><a href="www.linkedin.com/in/isoftic1" title="Linked In" target="_blank"><i class="fab fa-linkedin"></i></i></a></li>
                    <li><a href="" title="Instagram" target="_blank"><i class="fab fa-instagram"></i></i></a></li>
                    <li><a title="Dribbble Link" href="" target="_blank"><i class="fab fa-dribbble-square"></i></a></li>
                    <li><a title="Github Link" href="https://github.com/isoftic1" target="_blank"><i class="fab fa-github-square"></i></a></li>
                </ul>
            </div>
            <small>
                    This website is designed and coded by <a href="www.linkedin.com/in/isoftic1" target="_blank">Izeta Softic</a>, and is <a href="https://github.com/isoftic1/personal-portfolio.git" target="_blank">open-sourced</a>.
                    <br>© 2022 Izeta Softic
            </small>
    </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);