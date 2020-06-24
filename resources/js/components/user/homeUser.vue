<style scoped>
    .v-spinner{
        text-align: center;
    }

    .font-format{
        font-family: 'Lobster', cursive;
    }

@media only screen and (max-width: 750px) {
    .hex-img{
        margin-bottom: 5px !important;
    }
}
</style>
<template>
<div>
    <div class="row justify-content-center">
        <div class="col-4">
            <img class="img-fluid" src="img/Home_logo.png" alt="">
        </div>
    </div>
    <div class="text-center mt-5">
        <span class="font-format"><h1>{{type}}</h1></span>
    </div>
    <div class="mt-5 mb-5">
        <span v-show="isLoading"><RiseLoader></RiseLoader></span>
    </div>
    <div class="row justify-content-center">
        <div class="col-md-5 col-7">
            <div class="text-center" v-for="(result, index) in results" :key="index">
                <img :class="index==2?'mb-5 w-100 hex-img':'mb-3 w-100 hex-img'" style="height:50px" v-show="result == 1" src="img/solidLine.png"  alt="">
                <img :class="index==2?'mb-5 w-100':'mb-3 w-100'" style="height:50px" v-show="result == 0" src="img/brokenLine.png" alt="">
                <img :class="index==2?'mb-5 w-100':'mb-3 w-100'" style="height:50px" v-show="result == 4" src="img/brokenCircle.png" alt="">
                <img :class="index==2?'mb-5 w-100':'mb-3 w-100'" style="height:50px" v-show="result == 3" src="img/solidLinefocus.png" alt="">
            </div>
            <div class="text-center">
                <h1>{{name}}</h1>
            </div>
        </div>
        <div v-show="subscriber" class="col-md-2">
            <svg class="d-sm-none d-md-block d-none mx-auto" style="width:60%;margin-top:100%;" viewBox="0 0 24 24">
                <path fill="currentColor" d="M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z" />
            </svg>

            <svg class="d-block d-none d-sm-block d-md-none mx-auto" style="width:60%;" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z" />
            </svg>
        </div>
        <div v-show="subscriber && type != 'Trigram'" class="col-md-5 col-7">
            <div class="text-center" v-for="(transform, index) in transforms" :key="index">
                <img :class="index==2?'mb-5 w-100':'mb-3 w-100'" style="height:50px" v-show="transform == 1" src="img/solidLine.png"  alt="">
                <img :class="index==2?'mb-5 w-100':'mb-3 w-100'" style="height:50px" v-show="transform == 0" src="img/brokenLine.png" alt="">
            </div>
            <div class="text-center">
                <h1>{{transformName}}</h1>
            </div>
        </div>
    </div>
    <div class="text-center">
        <button class="button-primary font-format" @click="btnCast">Cast Now</button>
    </div>
    <div class="row">
        <div class="col-6 text-center">
            <button class="button-success font-format w-50" @click="btnCastType('tri')">Trigrams</button>
        </div>
        <div class="col-6 text-center">
            <button class="button-success font-format w-50" @click="btnCastType('hex')">Hexagrams</button>
        </div>
    </div>
    <div class="mt-5" style="font-size:30px;">
        <p>
            “If you need further assistance regarding the result of your Yijing Divination please book a consult with us and one of our consultants will be glad to help further”
        </p>
    </div>
    <div class="text-center">
        <a href="/book" class="btn btn-success">SCHEDULE A CONSULT</a>
    </div>
</div>
</template>

<script>
    import RiseLoader from 'vue-spinner/src/RiseLoader.vue'
    export default {
        components: {
            RiseLoader
        },
        data(){
            return{
                isLoading :false,
                type:'',
                results:'',
                transforms:'',
                name:'',
                transformName:'',
                subscriber: false,
            }
        },
        methods:{
            
            btnCastType(castType){
                this.results = "";
                this.transforms = "";
                this.name = "";
                this.transformName = "";
                this.subscriber = false;
                if(castType == "hex"){
                    this.type = "Hexagram"
                }else{
                    this.type = "Trigram"
                }
            },

            btnCast(){
                this.results = "";
                this.name = "";
                this.transforms = "";
                this.transformName = "";
                this.isLoading = true;
                this.subscriber = false;
                if(this.type == "Hexagram"){
                    axios.get('/api/user/cast?api_token=' +window.token)
                    .then(response => {
                        this.subscriber = true;
                        if(response.data.user == 0){
                            this.subscriber = false;
                            this.results = response.data.hexagram[0].code.split("");
                            this.name = response.data.hexagram[0].name;
                            this.isLoading = false;
                        }else{
                            this.subscriber = true;
                            function getRandomInt(max) {
                                return Math.floor(Math.random() * Math.floor(max));
                            }

                            var hex = response.data.hexagram[0].code.split("");
                            var focus = getRandomInt(6);

                            if(focus == 0){
                                focus = 1;
                            }
            
                            if(hex[focus-1] == 1){
                                hex[focus-1] = 3;
                            }else{
                                hex[focus-1] = 4;
                            }

                            this.name = response.data.hexagram[0].name;
                            this.results = hex;

                            var hexTransform = response.data.hexagram[0].code.split("");

                            if(hexTransform[focus-1] == 0){
                                hexTransform[focus-1] = "1"
                            }else{
                                hexTransform[focus-1] = "0"
                            }
                            this.transforms = hexTransform;
                            this.getTransformname();
                            this.isLoading = false;

                        }                                                
                       
                    });
                }

                if(this.type == "Trigram"){
                    this.isLoading = true;
                    axios.get('api/user/trigram?api_token='+window.token)
                    .then(response => {
                        this.results = response.data[0].code.split("");
                        this.name = response.data[0].name;
                        this.isLoading = false;
                    });
                    
                }

                if(this.type == ""){
                    this.type = "Please Select at least one"
                    this.isLoading = false;
                }
            },

            btnSubscribe(){
                axios.get('/api/user/subscribe?api_token='+window.token)
                .then(response => {
                });
            },

            getTransformname(){
                axios.post('api/user/transform/name?api_token='+window.token,{transformName:this.transforms})
                .then(response => {
                    this.transformName = response.data.name;
                });
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
