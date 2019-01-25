<template>

	<div style="all: unset;">

    <appLoader v-if="loader"></appLoader>
	<div class="container-alt">

    <p class="reg-header">Candidates
        <span>
            <router-link to="/dashboard" tag="i" class="ti ti-angle-left"></router-link>
        </span>
    </p>

    <p class="reg-writeup">Usu at civibus partiendo adolescens dolores sapientem est ex sonet eligendi scaevola iracundia.</p>

    <ul>

        <li v-for="position in positions">
          <input type="checkbox" checked>
          <i class="ti ti-angle-down"></i>
          <h2>{{ position.title }}</h2>
          <p class="accordionP">{{ position.details }}</p>
        </li>      
    
    </ul>
			
	</div>

    <appFooter></appFooter>

	</div>	

</template>


<script>

import appFooter from "@/components/app_footer"
import appLoader from "@/components/loader"

export default {
    components: {appFooter,appLoader},
    data () {
        return {
          loader: true,
          positions: [{
              title: 'John Cena',
              details: 'In legere referrentur quo, eu efficiantur consectetuer nam. Ius cu laoreet, ne vel doming consectetuer. Nusquam ets atomorum facilisis eum ut.'
          },{
              title: 'Elon Musk',
              details: 'In legere referrentur quo, eu efficiantur consectetuer nam. Ius cu laoreet, ne vel doming consectetuer. Nusquam ets atomorum facilisis eum ut.'              
          },{
              title: 'Zack Ryder',
              details: 'In legere referrentur quo, eu efficiantur consectetuer nam. Ius cu laoreet, ne vel doming consectetuer. Nusquam ets atomorum facilisis eum ut.'              
          },{
              title: 'Tripple H',
              details: 'In legere referrentur quo, eu efficiantur consectetuer nam. Ius cu laoreet, ne vel doming consectetuer. Nusquam ets atomorum facilisis eum ut.'              
          },{
              title: 'John Doe',
              details: 'In legere referrentur quo, eu efficiantur consectetuer nam. Ius cu laoreet, ne vel doming consectetuer. Nusquam ets atomorum facilisis eum ut.'              
          },{
              title: 'Caleb Frost',
              details: 'In legere referrentur quo, eu efficiantur consectetuer nam. Ius cu laoreet, ne vel doming consectetuer. Nusquam ets atomorum facilisis eum ut.'              
          }
          ]
        }
    },
    mounted () {
        setTimeout(() => {
            this.loader = false
        }, 2000);        
    }
}

</script>
