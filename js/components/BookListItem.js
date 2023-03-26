app.component('BookListItem', {
    props: {
        book: {
            type: Object,
            required: true,
        },
    },
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
    <q-card class="book-card" @mouseenter="visible = true" @mouseleave="visible = false">

    <!--Header-->
        <q-card-section horizontal class="card-header book-card-header">
            <q-btn flat rounded @click="$emit('bookmark-book', book)" :icon="book.bookmark ? 'bookmark' : 'bookmark_outline' "/>
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
    <!--        <q-btn flat icon="info" @click="$emit('info-book',book)">-->
    <!--          <q-tooltip anchor="top middle" self="bottom middle">-->
    <!--            Info-->
    <!--          </q-tooltip>-->
    <!--        </q-btn>-->
                <q-btn flat icon="edit" @click="$emit('edit-book', book)">
                    <q-tooltip anchor="top middle" self="bottom middle">
                    Edit
                    </q-tooltip>
                </q-btn>
                <q-btn flat icon="delete" @click="$emit('delete-book', book)">
                    <q-tooltip anchor="top middle" self="bottom middle">
                    Delete
                    </q-tooltip>
                </q-btn>
            </q-card-actions>
        </div>

        
<!--        <q-expansion-item-->
<!--        :label="book.tags != null ? book.tags.join(' ') : 'No #Tag available'"-->
<!--        label-lines="1"-->
<!--        >-->
<!--          <q-card-section >-->
<!--            {{ book.tags != null ? book.tags.join(' ') : 'No #Tag available' }}-->
<!--          </q-card-section>-->
<!--        </q-expansion-item>-->
    </q-card>
    `
})