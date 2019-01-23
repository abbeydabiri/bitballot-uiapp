<template>
	<section>
		<siteheader/>
		<div class="hero is-small ">
			<img class="" src="https://wikiki.github.io/images/merry-christmas.jpg" alt="" />
		</div>
		<section class="section" style="margin:40px;">
			<div class="columns is-multiline is-centered">
				<div class="column is-narrow is-2 has-text-centered">
					<h1 class="title is-4"> Crypto Trading</h1>
					<p class="subtitle is-6 is-offset-3" style="margin-top: 30px;">
							The cryptocurrency sector over the last few years has been the most permant sector in global economics. 
							The liberating and novel nature of these digital currencies has spawned a new type of market. 
							We have been making profitable trades in this market since inception.</p>
				</div>
				<div class="column is-narrow is-2 has-text-centered">
					<h1 class="title is-4">Pool Funding</h1>
					<p class="subtitle is-6" style="margin-top: 30px;">
							A derivative sector of crptocurrency is the mining industry which allows miners get freshly baked cryptocurrencies. 
							Todays mining system is mostly dominated by big companies leaving little or no room for individual to mine. 
							We funding various mining organizations and generate more profit for you.</p>
				</div>
				<div class="column is-narrow is-2 has-text-centered">
					<h1 class="title is-4">Digital Assets</h1>
					<p class="subtitle is-6" style="margin-top: 30px;">
							The digital assets market has been evolving since the inception of bitcoin and the block chain. 
							We are specialists in managing a portfolio of some of the most performant coins based on our expert analysis. 
							We acquire and manage these digital assets for greatest profit.</p>
				</div>
				<div class="column is-narrow is-2 has-text-centered">
					<h1 class="title is-4">Investments</h1>
					<p class="subtitle is-6" style="margin-top: 30px;">
							As elite investors before the crypto boom, we have been financing small and medium size businesses for over 3 years and we still are. 
							As part of our rooster of profit generating ventures, we invest in profitable sectors of various economies providing an added front for profit making.</p>
				</div>
			</div>	
		</section>
		<div class="notification">
			<div class="columns is-multiline is-centered" style="margin-top: 50px;">
				<div class="column is-narrow is-3">
					<span class="title is-3">Our Story</span>
					<p class="subtitle is-6 is-offset-3" style="margin-top: 30px;">
							Alliedcrypto is an investment company with a widely diversified portfolios. 
							We trade cryptocurrencies and stocks of companies employing the expertise of our traders and market researchers working round the clock. 
							We seek long term appreciation of our investments through investing lavishly in fast-growing cryptocurrencies. 
							Our system is designed to make everything for our investors and to reduce administrative expenses, 
							you don’t have to incur various hidden fees in order to benefit from investing your funds with us.</p>
				</div>
				<div class="column is-narrow is-6">
					PROFITABLE INVESTMENT RETURNS
					<progress class="progress is-link" value="95" max="100">45%</progress>
					ACCURATE TRADE SIGNALS
					<progress class="progress is-link" value="80" max="100">60%</progress>
					TRADE ACCOUNT MANAGEMENT
					<progress class="progress is-link" value="90" max="100">75%</progress>
					CUSTOMER HAPPINESS
					<progress class="progress is-link" value="95" max="100"></progress>
				</div>	
			</div>
		</div>

		<div class="columns is-centered" style="padding: 2rem">
			<div class="column is-2 has-text-centered">
				<figure class="image">
					<img src="https://bulma.io/images/placeholders/48x48.png" alt="Placeholder image">
				</figure>
				<div class="" style="margin-top: 30px">
					<p class="title is-5">Jeff Anderson</p>
					<p class="subtitle is-6">Lead Trader</p>
				</div>
				<p class="">
					He has rich experience both from trading cryptocurrencies and forex market. 
					While many traders went bankrupt during the economic crisis, he survived profitably from trading crypto.
				</p>
			</div>
			<div class="column is-2 has-text-centered">
				<figure class="image">
					<img src="https://bulma.io/images/placeholders/48x48.png" alt="Placeholder image">
				</figure>
				<div class="" style="margin-top: 30px">
					<p class="title is-5">Michael Dixon</p>
					<p class="subtitle is-6">Technical Analyst</p>
				</div>
				<p class="">
					He manages the company’s day-to-day technical operations and long-term financial strategy and planning.
				</p>
			</div>
			<div class="column is-2 has-text-centered">
				<figure class="image">
					<img src="https://bulma.io/images/placeholders/48x48.png" alt="Placeholder image">
				</figure>
				<div class="" style="margin-top: 30px">
					<p class="title is-5">George Smith</p>
					<p class="subtitle is-6">Financial Analyst</p>
				</div>
				<p class="">
					George Smith is responsible for all financial activities of the corporation. 
					He was elected chief financial officer after having previously worked in several leadership roles at the company.
				</p>
			</div>
        </div>


	
	</section>

</template>


<script type="text/javascript">
import {HTTP} from "@/common"
import {uploadFileCSV} from "@/common"
import siteheader from "@/components/siteheader"
import sitefooter from "@/components/sitefooter"

export default {
    created() { },
    components: {siteheader,sitefooter},
    data() {
		return{ 
			status:{}, 
			record:{uuid:"",file:"", filename:""},
			fileError:"",
			notification:"",
			riskList:[],
		}
	},
    methods: {
		uploadFile() {
			uploadFileCSV(event, this, "record")
		},
		generate() {
			const app = this;
			app.status = {"generate":"is-loading"};
			HTTP.get("/api/uuid").then((response) => {
				if (response.data != null && response.data != undefined) {
					app.record.uuid = ""
					if (response.data.uuid != null && response.data.uuid != undefined ) {
						app.record.uuid = response.data.uuid
					}
				}
				app.status = {}
			}).catch((e) => {
				app.status = {}
				console.log(e)
			})
		},
		submit() {
			const app = this;
			this.status = {"submit":"is-loading"};
			app.riskList = [];
			app.notification = "";
			HTTP.post("/api/risk", app.record,{withCredentials: true}).then((response) => {
				console.log(response.data);
				if (response.data != null && response.data != undefined) {
					if (response.data.Error != null && response.data.Error != undefined ) {
						if (response.data.Error !== ""){
							app.notification = response.data.Error
						} 
					} else {
						app.riskList =  response.data;
					}
				}
				app.status = {}
			}).catch((e) => {
				app.status = {}
				console.log(e)
			})
		},
    }
  }
</script>
