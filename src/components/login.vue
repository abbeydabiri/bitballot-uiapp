<template>
	<section>
		<siteheader/>
		<section class="hero is-info header-image is-fullheight">
            <div class="hero-body">
			<div class="container has-text-centered">
                <div class="column is-4 is-offset-4" style="margin-top:60px">
                    <h3 class="title has-text-link">Login</h3>
                    <p class="subtitle has-text-link	">Please login to proceed.</p>
                    <div class="box has-background-warning" style="margin-top: 80px">
                        <figure class="avatar">
                            <img class="" src="https://placehold.it/128x128">
                        </figure>
                        <form>
                            <div class="field" style="margin-top: 20px">
                                <div class="control">
                                    <input class="input is-large is-rounded" type="text" placeholder="Username" autofocus="">
                                </div>
                            </div>

                            <div class="field" style="margin-top: 20px">
                                <div class="control">
                                    <input class="input is-large is-rounded" type="password" placeholder="Password">
                                </div>
                            </div>
                            <div class="field level" style="margin-top: 30px">
                                <label class="checkbox level-left">
									<input type="checkbox">
									Remember me
								</label>

								<a class="level-right" href="../">Forgot Password</a>
                            </div>
                            <button class="button is-info is-medium is-rounded" style="margin: 30px">Login</button>
                        </form>
                    </div>
                    <p class="has-text-white">
                        <a >Don't have an account yet </a> &nbsp;·&nbsp;
                        <a class="is-hovered" href="../">Sign Up</a>
                    </p>
                </div>
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
