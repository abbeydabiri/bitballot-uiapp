<template>

	<div style="all: unset;">

		<div class="container">

			<p class="reg-header">Register</p>
			<p class="reg-writeup">Sabet cum movet cibo eleifend malorum integre odio idque partem eusmod putent valis nonumy.</p>
			
			<input type="text" placeholder="First Name">
			<input type="text" placeholder="Last Name">
			<input type="text" placeholder="Email Address">
			<input type="text" placeholder="Phone Number">

			<p style="font-size: 15px; padding-top: 15px" class="reg-writeup">Fill the form below to register as a candidate</p>

			<input type="text" placeholder="Bank Verification Number">

			<div class="ss-action-alt">
				<router-link to="/dashboard" tag="button">Proceed</router-link>
				<p>Lus zril omnium ut discere <router-link class="reg-a" to="/">Go back</router-link></p>
			</div> 
			
		</div>

	</div>	

</template>


<script>



export default {
	data : function () {
		return {
			web3js:{},
		}
	},
	created() {
		this.web3js = new Web3(web3.currentProvider);
		console.log(this.web3js)


		// window.addEventListener('load', function() {
		// 	// Checking if Web3 has been injected by the browser (Mist/MetaMask)
		// 	if (typeof web3 !== 'undefined') {
		// 	// Use Mist/MetaMask's provider
		// 	web3js = new Web3(web3.currentProvider);
		// 	} else {
		// 	// Handle the case where the user doesn't have Metamask installed
		// 	// Probably show them a message prompting them to install Metamask
		// 	}
		// })
		  
		  
		//   web3js = new Web3(web3.currentProvider);
		  

		// var Web3 = new web3(web3.givenProvider)
		// console.log("web3.givenProvider >> ", web3js.givenProvider)
		// console.log("web3.currentProvider >> ", web3js.currentProvider)
	}
}

</script>
