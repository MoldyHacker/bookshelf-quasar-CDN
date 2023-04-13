app.component('SearchComponent', {
    data() {
        return {
            searchObj: {
                sortCategory: 'title',
                searchTerm: '',
                bookmark: false,
            },
            options: [
                {label: 'Title', value: 'title'},
                {label: 'Author', value: 'author'},
                {label: 'Tag', value: 'tag'},
            ],
            placeholder: '',
        }
    },

    watch: {
        searchObj: {
            deep: true,
            handler: function () {
                // console.log('searchObj', this.searchObj);
                this.$emit('search-obj', this.searchObj);
            }
        }
    },
    
    computed: {
        returnCapitalized() {
            return this.searchObj.sortCategory.charAt(0).toUpperCase() + this.searchObj.sortCategory.slice(1);
        },
    },

    template: `
        <div class="constrain">
        <div class="row q-pa-lg">
            <div class="col col-md-4 col-12 q-pa-md">
                <q-btn-toggle
                  v-model="searchObj.sortCategory"
                  toggle-color="primary"
                  :options="options"
                />
            </div>
            <div class="col col-md-8 col-12 align-center">
                <q-input
                v-model="searchObj.searchTerm"
                filled
                label="Search by..."
                :placeholder="returnCapitalized"
                >
                    <template v-slot:append>
                        <q-icon name="search" />
                    </template>
                </q-input>
            </div>
        </div>
        <div class="row justify-center items-center content-center">
            <div class="q-pl-xl">
                <q-toggle v-model="searchObj.bookmark" label="Show Only Bookmarks" />
            </div>
            
        </div>
    </div>
    `
})