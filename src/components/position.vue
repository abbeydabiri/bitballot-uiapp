<template>

	<div style="all: unset;">

    <appLoader v-if="loader"></appLoader>
	<div class="container">

    <p class="reg-header">Positions
        <span>
            <router-link to="/dashboard" tag="i" class="ti ti-angle-left"></router-link>
        </span>
    </p>

    <p class="reg-writeup">Ut purto modus partem mei et erant accusam suscipiantur est No autem persequeris vel te eam.</p>

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
              title: 'Local Government',
              details: 'In legere referrentur quo, eu efficiantur consectetuer nam. Ius cu laoreet, ne vel doming consectetuer. Nusquam ets atomorum facilisis eum ut.'
          },{
              title: 'Gubernitorial',
              details: 'In legere referrentur quo, eu efficiantur consectetuer nam. Ius cu laoreet, ne vel doming consectetuer. Nusquam ets atomorum facilisis eum ut.'              
          },{
              title: 'Chairman',
              details: 'In legere referrentur quo, eu efficiantur consectetuer nam. Ius cu laoreet, ne vel doming consectetuer. Nusquam ets atomorum facilisis eum ut.'              
          },{
              title: 'Senator',
              details: 'In legere referrentur quo, eu efficiantur consectetuer nam. Ius cu laoreet, ne vel doming consectetuer. Nusquam ets atomorum facilisis eum ut.'              
          },{
              title: 'Minister',
              details: 'In legere referrentur quo, eu efficiantur consectetuer nam. Ius cu laoreet, ne vel doming consectetuer. Nusquam ets atomorum facilisis eum ut.'              
          },{
              title: 'Representatives',
              details: 'In legere referrentur quo, eu efficiantur consectetuer nam. Ius cu laoreet, ne vel doming consectetuer. Nusquam ets atomorum facilisis eum ut.'              
          }
          ]
        }
    },
    mounted () {
        setTimeout(() => {
            this.loader = false
        }, 3000);        
    }
}

</script>
