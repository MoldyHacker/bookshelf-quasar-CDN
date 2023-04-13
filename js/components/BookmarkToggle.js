app.component('BookmarkToggle',{
	props: ['bookmarkState'],
	data() {
		return {
			state: this.bookmarkState,
		}
	},
	methods: {
		click() {
			console.log('click');
			this.$emit('toggle-bookmark', this.bookmarkState);
			this.state = !this.state;
		},
	},
	template: `
	<q-btn flat rounded @click="click" :icon="state ? 'bookmark' : 'bookmark_outline' "/>
	`
});