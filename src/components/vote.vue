<template>

	<div style="all: unset;">

    <appLoader v-if="loader"></appLoader>
	<div class="container">

    <p class="reg-header">Vote
        <span>
            <router-link to="/dashboard" tag="i" class="ti ti-angle-left"></router-link>
        </span>
    </p>

    <p class="reg-writeup">Eos et scaevola singulis pro ea sale quidam et mea congue appetere argumentum ea ad senserit.</p>


			
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
        }
    },
    mounted () {
        setTimeout(() => {
            this.loader = false
        }, 2000);        
    }
}

</script>
