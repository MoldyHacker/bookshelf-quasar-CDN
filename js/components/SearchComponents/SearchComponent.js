app.component('SearchComponent', {
    data() {
        return {
            searchObj: {
                sortCategory: 'title',
                searchTerm: '',
                bookmark: false,
            },
        }
    },

    watch: {
        searchObj: {
            deep: true,
            handler: function () {
                // console.log('searchObj', this.searchObj);
                this.$emit('search-obj', this.searchObj)
            }
        }
    },

    template: `
        <div class="constrain">
        <div class="row q-pa-lg">
            <div class="col col-md-4 col-12 q-pa-md">
                <q-btn-toggle
                  v-model="searchObj.sortCategory"
                  toggle-color="primary"
                  :options="[
                    {label: 'Title', value: 'title'},
                    {label: 'Author', value: 'author'},
                    {label: 'Tag', value: 'tag'},
                  ]"
                />
            </div>
            <div class="col col-md-8 col-12 align-center">
                <q-input
                v-model="searchObj.searchTerm"
                filled
                label="Search by..."
                :placeholder="searchObj.sortCategory"
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