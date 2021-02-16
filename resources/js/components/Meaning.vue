<template>
    <div class="meaning-style">
        <strong style="font-size:25px;">{{name}}</strong>
        <p class="mt-3" style="font-style:25px;">
            {{meaning}}
        </p>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                name:'',
                meaning:'',
            }
        },
        methods:{
            loadDailyHex(){
                var date = new Date().getDate();
                axios.post('/api/user/hexagram',{date:date})
                .then(response => {
                    this.meaning = response.data.hexagram.hexagram.meaning;
                    this.name = response.data.hexagram.hexagram.name;
                })
                .catch(error => {
                    axios.get('api/hexagram')
                    .then(response => {
                        this.meaning = response.data.meaning;
                        this.name = response.data.name;
                    });
                });
            }
        },
        mounted() {
            this.loadDailyHex();
        }
    }
</script>

