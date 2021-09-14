<template lang="pug">
.vp-landing
	site-header
</template>

<script>
export default {
  name: "Home",
	components: {
		'site-header': () => import('@/components/SiteHeader.vue')
	}
};
</script>

<style>
</style>