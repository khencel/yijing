<template>
   <div>
       <div class="container mt-5">
            <h2>About Us</h2>
            <p>{{content}}</p>
        </div>
        
   </div>
</template>

<script>
    export default {
        data(){
            return {
                content:''
            }
        },
        methods:{
            loadContent(){
                axios.get('api/about')
                .then(response => {
                    this.content = response.data.content
                });
            }
        },
        mounted() {
            this.loadContent();
        }
    }
</script>
