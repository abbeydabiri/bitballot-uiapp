<template>
     <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="container">
             <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, & modern CSS framework based on Flexbox" width="112" height="28">
                </a>

                <a class="navbar-burger burger" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>

            <div class="navbar-menu">
                <div class="navbar-end">
                    <router-link to="/" class="navbar-item">
                        Home
                    </router-link>    
                    <router-link to="/about" class="navbar-item">
                        About Us
                    </router-link>
                    <router-link to="/faq" class="navbar-item">
                        FAQ
                    </router-link>
                    <router-link to="/contact" class="navbar-item">
                        Contact
                    </router-link>
                    <router-link to="/login" class="navbar-item">
                        Login
                    </router-link>
                    <router-link to="/register" class="navbar-item">
                        Register
                    </router-link>
                    <router-link to="/services" class="navbar-item">
                        Services
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>


<script type="text/javascript">
    const submenu = [
      {to:'/',icon:'',title:'Home'},
      {to:'/about',icon:'',title:'About Us'},
      {to:'/faq',icon:'',title:'FAQ'},
      {to:'/contact',icon:'',title:'Contact'},
      {to:'/login',icon:'',title:'Login'},
      {to:'/register',icon:'',title:'Register'},
      {to:'/services',icon:'',title:'Services'},
    ]

export default {
    beforeMount(){
        window.addEventListener('scroll', this.toggleMenuBG, false); 
    },
    beforeDestroy(){
        window.removeEventListener('scroll', this.toggleMenuBG, false);
    },
    data() {return{
        menuBG:"",
        lShow:false,
    }},

    methods: {
        toggleMenuBG() {
            var menuBG;
			var shrinkOn = 350;
			var distanceY = window.pageYOffset || document.documentElement.scrollTop;
			if (distanceY > shrinkOn) { menuBG = "hero is-theme-primary"; }
			else { menuBG = ""; }

			if (menuBG !== this.menuBG) {
				this.menuBG = menuBG;
			}
        },     
        toggleMenu() {
            this.lShow = !this.lShow
            document.getElementsByTagName("html")[0].classList.toggle('overflow-hidden');
        }
    },
    components: {},
  }

</script>
