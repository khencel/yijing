<style>
    .v-spinner{
        margin-top: 60%;
    }

    .label{
        font-weight: bold;
        font-style: italic;
    }
</style>
<template>
<div>
    <div class="card p-5">
        <div class="row justify-content-center">
            <div class="col-md-3 text-center">
                <div v-show="!isFocust" v-for="(item, index) in arrayHex" :key="item.id">
                    <img :class="index == 2?'mb-3':'mb-1'" v-show="item == 1" style="width:100%;height:50px;" src="/img/solidLine.png" alt="">
                    <img :class="index == 2?'mb-3':'mb-1'" v-show="item == 0" style="width:100%;height:50px;" src="/img/brokenLine.png" alt="">
                </div>
                <div v-show="isFocust" v-for="(focus, index) in hexFocust" :key="focus.id">
                    <img :class="index == 2?'mb-3':'mb-1'" v-show="focus == 1" style="width:100%;height:50px;" src="/img/solidLine.png" alt="">
                    <img :class="index == 2?'mb-3':'mb-1'" v-show="focus == 0" style="width:100%;height:50px;" src="/img/brokenLine.png" alt="">
                    <img :class="index == 2?'mb-3':'mb-1'" v-show="focus == 2" style="width:100%;height:50px;" src="/img/solidLinefocus.png" alt="">
                    <img :class="index == 2?'mb-3':'mb-1'" v-show="focus == 3" style="width:100%;height:50px;" src="/img/brokenCircle.png" alt="">
                </div>
                <h4>{{name}}</h4>
            </div>
            <div class="col-md-1">
                <svg class="d-sm-none d-md-block d-none mx-auto" style="width:60%;" viewBox="0 0 24 24">
                    <path fill="green" d="M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z" />
                </svg>
            </div>
            <div class="col-md-3 text-center">
                <span v-show="isLoading"><RiseLoader></RiseLoader></span>
                <div v-show="!isLoading">
                    <div v-for="(item, index) in transformHex" :key="item.id">
                        <img :class="index == 2?'mb-3':'mb-1'" v-show="item == 1" style="width:100%;height:50px;" src="/img/solidLine.png" alt="">
                        <img :class="index == 2?'mb-3':'mb-1'" v-show="item == 0" style="width:100%;height:50px;" src="/img/brokenLine.png" alt="">
                        <img :class="index == 2?'mb-3':'mb-1'" v-show="item == 3" style="width:100%;height:50px;" src="/img/solidLine.png" alt="">
                        <img :class="index == 2?'mb-3':'mb-1'" v-show="item == 2" style="width:100%;height:50px;" src="/img/brokenLine.png" alt="">
                    </div>
                    <h4 v-show="isFocust">{{rightname}}</h4>
                    <h4 v-show="!isFocust">{{name}}</h4>
                </div>
            </div>
        </div>
        <div class="text-center mt-5">
            <h3>Focus Point</h3>
            <span v-for="(item, index) in focust" :key="index" style="cursor:pointer" :class="focustPoint == item.value?'badge badge-primary p-3 mr-1':'badge badge-success p-2 mr-1'" v-text="item.value" @click="btnFocust(item.value)"></span>
        </div>
        <hr>
        <div class="row mb-2">
            <div class="col-md-2 label">
                Opening
            </div>
            <div class="col-md-10">
                <p v-if="hex.opening == null">
                    No record...
                </p>
                <p v-else>
                    {{hex.opening}}
                </p>
            </div>
        </div>
        <div class="row mb-2">
            <div class="col-md-2 label">
                Nobleman
            </div>
            <div class="col-md-10">
                <p v-if="hex.nobleman == null">
                    No record...
                </p>
                <p v-else>
                    {{hex.nobleman}}
                </p>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-2 label">
                Weather
            </div>
            <div class="col-md-10">
                <p v-if="hex.weather == null">
                    No record...
                </p>
                <p v-else>
                    {{hex.weather}}
                </p>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-2 label">
                General
            </div>
            <div class="col-md-10">
                <p v-if="hex.general == null">
                    No record...
                </p>
                <p v-else>
                    {{hex.general}}
                </p>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-2 label">
                Wealth
            </div>
            <div class="col-md-10">
                <p v-if="hex.wealth == null">
                    No record...
                </p>
                <p v-else>
                    {{hex.wealth}}
                </p>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-2 label">
                Relationship
            </div>
            <div class="col-md-10">
                 <p v-if="hex.relationship == null">
                    No record...
                </p>
                <p v-else>
                    {{hex.relationship}}
                </p>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-2 label">
                Business
            </div>
            <div class="col-md-10">
                 <p v-if="hex.business == null">
                    No record...
                </p>
                <p v-else>
                    {{hex.business}}
                </p>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-2 label">
                Family
            </div>
            <div class="col-md-10">
                <p v-if="hex.family == null">
                    No record...
                </p>
                <p v-else>
                    {{hex.family}}
                </p>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-2 label">
                Legal
            </div>
            <div class="col-md-10">
                <p v-if="hex.legal == null">
                    No record...
                </p>
                <p v-else>
                    {{hex.legal}}
                </p>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-2 label">
                Travel
            </div>
            <div class="col-md-10">
                <p v-if="hex.travel == null">
                    No record...
                </p>
                <p v-else>
                    {{hex.travel}}
                </p>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-2 label">
                Health
            </div>
            <div class="col-md-10">
                 <p v-if="hex.health == null">
                    No record...
                </p>
                <p v-else>
                    {{hex.health}}
                </p>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-2 label">
                Property
            </div>
            <div class="col-md-10">
                 <p v-if="hex.property == null">
                    No record...
                </p>
                <p v-else>
                    {{hex.property}}
                </p>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
    import RiseLoader from 'vue-spinner/src/RiseLoader.vue'
    export default {
        props:['id'],
        components: {
            RiseLoader
        },
        data(){
            return {
                isLoading:false,
                isFocust:false,
                hexagram:'',
                hex:{},
                arrayHex:{},
                name:'',
                transformHex:{},
                transformName:[],
                rightname:'',
                hexFocust:{},
                focust:[
                    {
                        value:1
                    },
                    {
                        value:2
                    },
                    {
                        value:3
                    },
                    {
                        value:4
                    },
                    {
                        value:5
                    },
                    {
                        value:6
                    },
                ],
                focustPoint:'',
            }
        },
        methods:{
            loadHexInfo(){
                axios.get('/api/hex/show/'+this.id+"?api_token="+window.token)
                .then(response => {
                    this.hex = response.data;
                    
                    this.name = response.data.name;
                    this.hexagram = response.data.code;
                    this.arrayHex = response.data.code.split("");
                    this.transformHex = this.hexagram.split("");
                });
            },

            btnFocust(value){
                this.isLoading = true;
                this.transformName = [];
                this.isFocust = true;
                var hex = this.hexagram.split("");
                this.focustPoint = value;
                if(hex[value-1] == 1){
                    hex[value-1] = "2";
                }else{
                    hex[value-1] = "3";
                }
                this.hexFocust = hex;
                this.transformHex = this.hexFocust;
                
                this.transformHex.forEach(element => {
                    if(element == 2){
                        element = "0";
                    }

                    if(element == 3){
                        element = "1";
                    }
                    this.transformName.push(element);
                   
                });

                axios.post('/api/user/transform/name?api_token='+window.token,{transformName:this.transformName})
                .then(response => {
                    this.isLoading = false;
                    this.rightname = response.data.name;
                });
                
                
            },
        },
        mounted() {
            this.loadHexInfo();
            
        }
    }
</script>
