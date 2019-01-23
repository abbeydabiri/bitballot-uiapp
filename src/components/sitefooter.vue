<template>
    <footer class="footer">
    <div class="content has-text-centered">
        <p>
        <strong>Bulma</strong> by <a href="https://jgthms.com">Ajaloleru Samson</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
    </div>
</footer>
</template>


<script type="text/javascript">

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
