<template>
	<section>
		<siteheader/>
		<div class="hero is-small ">
			<img class="" src="https://wikiki.github.io/images/merry-christmas.jpg" alt="" />
		</div>
		
		<section class="section">
			<div class="columns is-multiline is-centered" style="margin:30px;">
				<div class="column is-narrow is-8">
					<h1 class="title is-4">Get In Touch</h1>
					<div class="field is-grouped">
						<div class="control is-expanded">
							<input class="input is-medium" type="text" placeholder="Name">
						</div>
						<div class="control is-expanded">
							<input class="input is-medium" type="text" placeholder="Email Address">
						</div>
					</div>
					<div class="field">
						<div class="control">
							<textarea class="textarea is-medium" placeholder="Message"></textarea>
						</div>
					</div>
					<div class="control">
						<button class="button is-primary">Submit</button>
					</div>
					
				</div>
				<div class="column is-narrow is-3">
					<h1 class="title is-5">Main Address</h1>
					<p class="subtitle is-6" style="margin-top: 30px;">
						Feel free to contact us on.</p>
					<p class="subtitle is-6" style="margin-top: 30px;">
						<strong >Address:</strong> 9th floor, 71 Stevenson St., San Fransisco, CA 94105, USA.</p>
					<p class="subtitle is-6" style="margin-top: 30px;">
						<strong >Address2:</strong> 25th Floor, 75 Wall St.,New York, NY 10005 USA</p>
					<p class="subtitle is-6" style="margin-top: 30px;">
						<strong >Phone:</strong> +1(415)559-4691.</p>
					<p class="subtitle is-6" style="margin-top: 30px;">
						<strong >Business Hours:</strong> 8am-6:30pm Mon-Fri.</p>
					
				</div>	
			</div>			
		</section>

		<section class="section">
			<div class="columns is-multiline is-7 v-centered is-centered" style="margin: 50px;">
				<div class="column is-narrow is-5">
					<figure class="image ">
						<img src="https://bulma.io/images/placeholders/640x360.png">
					</figure>
				</div>
				<div class="column is-narrow is-5">
					<figure class="image ">
						<img src="https://bulma.io/images/placeholders/640x360.png">
					</figure>
				</div>	
			</div>			
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
