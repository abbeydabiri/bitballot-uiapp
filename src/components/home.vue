<template>
	<section>
		<siteheader/>
		<section class="">
			<div class="hero is-small">
				<img class="" src="https://wikiki.github.io/images/merry-christmas.jpg" alt="" />
			</div>

			<section class="section">
				<div class="columns is-multiline is-centered" style="margin: 50px;">
					<div class="column is-narrow is-4">
						<h1 class="title is-4">WHY INVEST WITH ALLIEDCRYPTO</h1>
						<p class="subtitle is-6" style="margin-top: 30px;">
							Alliedcrypto offers competitive spreads, with no commissions charged on transactions making it more profitable. 
							When you invest with Alliedcrypto you start earning on the positive price changes of the digital coin. 
							Traders on Alliedcrypto always trade with 100% reputable brokers. More reasons to trade cryptocurrencies with Alliedcrypto today are:</p>
						<div class="content">
							<ul >
								<li>Start with as little as $500</li>
								<li>Benefit from a wide range of top traded cryptocurrencies on the market</li>
								<li>Instant withdrawals</li>
								<li>Around the clock service and support</li>
								<li>Live quotes and charts for your reference</li>
							</ul>
					</div>
					</div>
					<div class="column is-narrow is-6">
						<figure class="image is-16 by 9">
							<img src="https://bulma.io/images/placeholders/640x360.png">
						</figure>
					</div>	
				</div>			
			</section>
		</section>
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
