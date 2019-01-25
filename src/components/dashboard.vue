<template>

	<div style="all: unset;">

    <appLoader v-if="loader"></appLoader>
	<div class="container">

    <p class="reg-header">Dasboard
        <span>
            <router-link to="/setting" tag="i" class="ti ti-settings"></router-link>
        </span>
    </p>

    <p class="reg-writeup">Mea ad probo incorrupte conttentiones ius tale disuptando at vis eu ariam iuducabit diceret.</p>

    <div v-for="elc in elc_data" class="card">
        <div class="card-header"> {{ elc.proposal }}<span class="elc-done"></span></div>    
            
        <div class="card-result">
                
            <div class="elc" v-for="contestant in elc.Contestant">
                <div class="elc-main elc-flag">
                    <img :src="contestant.image"  alt="">
                </div>
                <div class="elc-main elc-party">
                    <p>{{ contestant.name }} <span>{{ contestant.party }}</span></p>
                </div>
                <div class="elc-main elc-vote">
                    <p>{{ contestant.Count }}</p>
                </div>
            </div> 
                
        </div>
    </div>   
			
	</div>

    <appFooter></appFooter>

	</div>	

</template>


<script>

import appFooter from "@/components/app_footer"
import appLoader from "@/components/loader"

import austria from "../assets/images/flags/003-austria.png"
import tanzania from "../assets/images/flags/006-tanzania.png"
import italy from "../assets/images/flags/013-italy.png"
import china from "../assets/images/flags/034-china.png"
import andorra from "../assets/images/flags/045-andorra.png"
import algeria from "../assets/images/flags/144-algeria.png"

export default {
    components: {appFooter,appLoader},
    data () {
        return {
            loader: true,
            elc_data: [
                {
                    proposal: `Best Men's Player`,
                    Contestant: [{
                        name: 'Luca Modric',
                        party: null,
                        Count: '29.05',
                        image: austria
                    },
                    {
                        name: 'Cristiano Ronaldo',
                        party: null,
                        Count: '19.08',
                        image: tanzania
                    },
                    {
                        name: 'Mohamed Salah',
                        party: null,
                        Count: '11.23',
                        image: italy
                    }]
                },
                {
                    proposal: 'Pukas Award',
                    Contestant: [{
                        name: 'Mohamed Salah',
                        party: null,
                        Count: '78k',
                        image: china
                    }]
                },
                {
                    proposal: 'Senator (Kogi)',
                    Contestant: [{
                        name: '50 Cent',
                        party: '(APC)',
                        Count: '8.5k',
                        image: andorra
                    },
                    {
                        name: 'Whiz Kid',
                        party: '(PDP)',
                        Count: '1.5k',
                        image: algeria
                    },
                    {
                        name: 'Swype Tada',
                        party: '(WBC)',
                        Count: '18k',
                        image: austria
                    }]
                }                                       
            ]
        }
    },
    mounted () {
        setTimeout(() => {
            this.loader = false
        }, 0);        
    }
}

</script>
