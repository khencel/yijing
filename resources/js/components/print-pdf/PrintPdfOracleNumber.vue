<template>
    <div class="container-fluid">
        <div>
            <p class="h1">
                <span class="font-weight-bold">{{users.firstname}} {{users.lastname}}</span>
            </p>
            <p>
                <span class="font-weight-bold">Date Created:</span><span>{{diaries.date}}</span>
            </p>
            <p>
                <span class="font-weight-bold">Question:</span><span>{{diaries.question}}</span>
            </p>
            <p>
                <span class="font-weight-bold">Details:</span><br><span>{{diaries.details}}</span>
            </p>
            <p>
                <span class="font-weight-bold">Derivation:</span><span>{{diaries.derivation.number}}</span>
            </p>
            <p>
                <span class="font-weight-bold">Derivation Yao Image:</span><span>{{diaries.derivation.yao_image}}</span>
            </p>
            <p class="w-25">
                <img class="img-fluid" :src="'/img/rating/'+diaries.derivation.oracle.rating+'.png'" alt="">
                <span v-for="item in rating_labels" :key="item.rating" v-show="item.rating == diaries.derivation.oracle.rating">
                        {{item.label}}
                </span>
            </p>
            <p>
                <span>{{diaries.derivation.oracle.text}}</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props:['id'],
        data(){
            return{
                diaries:{},
                users:{},
                rating_labels:[
                    {
                        rating:0,
                        label:"Difficult",
                    },
                    {
                        rating:1,
                        label:"Below Average",
                    },
                    {
                        rating:2,
                        label:"Average",
                    },
                    {
                        rating:3,
                        label:"Above Average",
                    },
                    {
                        rating:3.5,
                        label:"Good",
                    },
                    {
                        rating:4,
                        label:"Good",
                    },
                    {
                        rating:4.5,
                        label:"Good",
                    },
                    {
                        rating:5,
                        label:"Excellent",
                    },
                    
                ],
            }
        },
        mounted() {
            this.fetchDiary();
            
        },
        methods: {
            fetchDiary(){
                axios.get('/api/print/'+this.id+'?api_token='+window.token)
                .then(res =>{
                    this.diaries = res.data.diary;
                    this.users = res.data.user;
                });
                setInterval(function(){
                    this.printDownload()
                    window.close();
                }.bind(this), 1000);
            },
            printDownload () {
                print();
            }
        },  
    }
</script>
