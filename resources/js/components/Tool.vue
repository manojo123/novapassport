<template>
	<div>
		<h1 class="mb-3 text-90 font-normal text-2xl">OAuth Passport</h1>
		<passport-clients></passport-clients><br/>
		<passport-authorized-clients></passport-authorized-clients><br/>
		<passport-personal-access-tokens></passport-personal-access-tokens><br/>
	</div>
</template>

<script>
	import PassportClients from './AuthorizedClients.vue';
	import PassportAuthorizedClients from './Clients.vue';
	import PassportPersonalAccessTokens from './PersonalAccessTokens.vue';


	export default{
		components: { 
			PassportClients,
			PassportAuthorizedClients,
			PassportPersonalAccessTokens 
		},
	}
</script>