app.component('BookListItemDetails',{
	props: ['book'],
	data() {
		return {
			visible: false, // mouseover buttons
		}
	},
	methods: {
		// truncate title and author names
		trunc(str, cha) { return str?.length > cha ? str.substring(0, cha) + '...' : str ?? 'N/A' },
	},
	template: `
    <q-card class="book-card" @mouseenter="visible = true" @mouseleave="visible = false" >
    
    <!--Header-->
        <q-card-section horizontal class="card-header book-card-header">
            <slot name='bookmark'>
                <q-icon name="warning" />
            </slot>
            
            <span class="text-h6">{{ trunc(book.title, 38) }}</span>
        </q-card-section>

        <q-separator inset />

    <!--author-->
        <q-card-section class="q-pt-none q-pb-none">
            <q-icon color="black" name="person"  size="24px" />
            <span class="text-subtitle2 q-pl-md">{{ trunc(book.author, 18) }}</span>
        </q-card-section>

    <!--mouseover buttons-->
        <div class="card-actions book-card-actions">
            <q-card-actions align="right" v-show="visible">
                <slot name='buttons'>
                    <tool-tip-button icon="warning" toolTip="Warning" @click="$emit('delete-book', book)" />
                </slot>
            </q-card-actions>
        </div>
    </q-card>
    `
});