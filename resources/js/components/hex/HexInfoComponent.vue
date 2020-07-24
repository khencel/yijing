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
            <span v-for="(item, index) in focust" :key="index" style="cursor:pointer" :class="focustPoint == item.value?'badge badge-primary p-3 mr-1':'badge badge-success p-2 mr-1'" v-text="item.name" @click="btnFocust(item.value)"></span>
        </div>
        <hr>
        <div class="row mb-2">
            <div class="col-md-2 label">
                Opening
            </div>
            <div class="col-md-10">
                <p v-if="opening == ''">
                    No record...
                </p>
                <p v-else>
                    {{opening}}
                </p>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-2 label">
                Nobleman
            </div>
            <div class="col-md-10">
                 <p v-if="nobleman == ''">
                    No record...
                </p>
                <p v-else>
                    {{nobleman}}
                </p>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-2 label">
                Weather
            </div>
            <div class="col-md-10">
                <p v-if="weather == ''">
                    No record...
                </p>
                <p v-else>
                    {{weather}}
                </p>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-2 label">
                General Luck
            </div>
            <div class="col-md-10">
                 <p v-if="luck == ''">
                    No record...
                </p>
                <p v-else>
                    {{luck}}
                </p>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-2 label">
                Wealth
            </div>
            <div class="col-md-10">
                 <p v-if="wealth == ''">
                    No record...
                </p>
                <p v-else>
                    {{wealth}}
                </p>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-2 label">
                Relationship
            </div>
            <div class="col-md-10">
                 <p v-if="relationship == ''">
                    No record...
                </p>
                <p v-else>
                    {{relationship}}
                </p>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-2 label">
                Business
            </div>
            <div class="col-md-10">
                 <p v-if="business == ''">
                    No record...
                </p>
                <p v-else>
                    {{business}}
                </p>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-2 label">
                Family
            </div>
            <div class="col-md-10">
                <p v-if="family == ''">
                    No record...
                </p>
                <p v-else>
                    {{family}}
                </p>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-2 label">
                Legal Matters
            </div>
            <div class="col-md-10">
                <p v-if="legal == ''">
                    No record...
                </p>
                <p v-else>
                    {{legal}}
                </p>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-2 label">
                Travel
            </div>
            <div class="col-md-10">
                <p v-if="travel == ''">
                    No record...
                </p>
                <p v-else>
                    {{travel}}
                </p>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-2 label">
                Health
            </div>
            <div class="col-md-10">
                <p v-if="health == ''">
                    No record...
                </p>
                <p v-else>
                    {{health}}
                </p>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-2 label">
                Property
            </div>
            <div class="col-md-10">
                <p v-if="properties == ''">
                    No record...
                </p>
                <p v-else>
                    {{properties}}
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
                        name:'1',
                        value:6
                    },
                    {
                        name:'2',
                        value:5
                    },
                    {
                        name:'3',
                        value:4
                    },
                    {
                        name:'4',
                        value:3
                    },
                    {
                        name:'5',
                        value:2
                    },
                    {
                        name:'6',
                        value:1
                    },
                ],
                focustPoint:'',
                opening:'',
                nobleman:'',
                weather:'',
                luck:'',
                wealth:'',
                relationship:'',
                business:'',
                family:'',
                legal:'',
                travel:'',
                health:'',
                properties:''
            }
        },
        methods:{
            loadHexInfo(){
                axios.get('/api/hex/show/'+this.id+"?api_token="+window.token)
                .then(response => {
                    this.hex = response.data;
                    this.opening = response.data.opening[0].description;
                    this.nobleman = response.data.nobleman[0].description;
                    this.weather = response.data.weather[0].description;
                    this.luck = response.data.luck[0].description;
                    this.wealth = response.data.wealth[0].description;
                    this.relationship = response.data.relationship[0].description;
                    this.business = response.data.business[0].description;
                    this.family = response.data.family[0].description;
                    this.legal = response.data.legal[0].description;
                    this.travel = response.data.travel[0].description;
                    this.health = response.data.health[0].description;
                    this.properties = response.data.properties[0].description;
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
