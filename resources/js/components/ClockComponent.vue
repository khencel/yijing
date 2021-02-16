<style>
    @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
    .dateFormat{
        font-weight: bold;
        font-family: 'Anton', sans-serif;
        font-size: 35px;
        color: white;
        letter-spacing: 0.2em;
    }

    .hex-name{
        font-family:'Anton', sans-serif;
        color:black;
    }
    #test{
        background-image: url('/img/universe.jpg');
        background-position: center;
        background-size: cover;
        background-color: rgba( 0, 0, 0, 0.3);
        background-blend-mode: overlay;
        padding-top: 200px;
    }

</style>
<template>
<div>
<div class="row justify-content-center" id="test">
    <div class="col-md-5">
        <div class="row justify-content-center pb-5 mt-2 ml-5 mr-5">
            <div class="col-xl-4 text-center p-3 mb-2 col-6" style="background-color: rgba(255,255,255,0.8);border-radius:20px;box-shadow:0px 2px 5px white;">
                <div v-for="(daily, index) in dailies" :key="index" class="">
                    <img :class="index == 2?'mb-3':''" v-show="daily == 0" src="/img/brokenLine.png" alt="" style="width:100%;height:35px;">
                    <img :class="index == 2?'mb-3':''" v-show="daily == 1" src="/img/solidLine.png" alt="" style="width:100%;height:35px;">
                </div>
            </div>
            <div class="col-xl-6 text-center mt-4">
                <span style="font-size:50px;color:white" class="hex-name glow">{{dailyHexName}}</span>
                <br>
                <span class="dateFormat glow">{{day}},</span><span class="dateFormat glow" style="font-size:20px">{{month}}</span><span class="dateFormat glow ml-2" style="font-size:20px">{{date}}</span>
                <br>
                <DigitalClock class="dateFormat glow" style="font-size:40px;" twelveHour="false" :blink="true" />
            </div>
        </div>
        
    </div>
    <div class="col-md-5 text-white p-5">
        <p><strong>{{dailyHexName}}</strong></p>
        <p class="poem-style">
            {{poem}}
        </p>
    </div>
</div>                    
</div>    
</template>

<script>
    import DigitalClock from "vue-digital-clock";
    export default {
        components: {
            DigitalClock
        },
        data(){
            return {
                dailies:'',
                dailyHexName:'',
                meaning:'',
                poem:'',
                month:'',
                date:'',
                day:'',
                months:["January","February","March","April","May","June","July","August","September","October","November","December"],
                days:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            }
        },
        methods:{
            showClock(){
                this.day = this.days[new Date().getDay()]
                this.month = this.months[new Date().getMonth()];
                this.date = new Date().getDate();
            },

            loadDailyHex(){
                axios.post('/api/user/hexagram',{date:this.date})
                .then(response => {
                    this.dailies = response.data.hexagram.hexagram.code.split("");
                    this.dailyHexName = response.data.hexagram.hexagram.name;
                    this.meaning = response.data.hexagram.hexagram.meaning;
                    this.poem = response.data.hexagram.hexagram.poem;
                })
                .catch(error => {
                    axios.get('api/hexagram')
                    .then(response => {
                        this.dailies = response.data.code.split("");
                        this.dailyHexName = response.data.name;
                        this.meaning = response.data.meaning;
                        this.poem = response.data.poem;
                    });
                });
            }
        },
        mounted() {
            this.showClock();
            this.loadDailyHex();
        }
    }
</script>
