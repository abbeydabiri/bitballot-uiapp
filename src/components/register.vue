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

}

</script>
