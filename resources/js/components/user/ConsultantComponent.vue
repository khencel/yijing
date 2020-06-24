<template>
<div>
    <notifications group="notification" position="bottom right"/>
    <div class="mt-2">
        <hr>
        <label for="mode">Mode:</label>
        <select class="form-control" v-model="form.mode">
            <option value="" disabled hidden>Select Mode</option>
            <option value="Online Meeting">Online Meeting</option>
            <option value="Face to Face">Face to Face</option>
        </select>
        <span class="font-italic text-danger" v-if="errors.mode" v-text="errors.mode[0]"></span>
    </div>
    <div class="mt-2">
        <label for="date">Date:</label>
        <input type="date" class="form-control" v-model="form.date" :min="currentDate">
        <span class="font-italic text-danger" v-if="errors.date" v-text="errors.date[0]"></span>
    </div>
    <div class="mt-2">
        <label for="time">Time:</label>
        <select name="" id="" class="form-control" v-model="form.time">
            <option value="" disabled hidden>Select Time</option>
            <option v-for="(item, index) in time" :key="index">
                {{item}}
            </option>
        </select>
        <span class="font-italic text-danger" v-if="errors.time" v-text="errors.time[0]"></span>
    </div>
    <div class="mt-5 text-right">
        <button v-show="!available" class="btn btn-primary" @click="check">Check if Available</button>
        <button v-show="available" class="btn btn-success" @click="bookNow">Book Now</button>

    </div>
</div>
  
</template>

<script>
    export default {
        props:['id'],
        data(){
            return{
                available:false,
                time:[
                    "8:00am",
                    "9:00am",
                    "10:00am",
                    "11:00am",
                    "12:00am",
                    "1:00pm",
                    "2:00pm",
                    "3:00pm",
                    "4:00pm",
                    "5:00pm",
                    "6:00pm",
                    "7:00pm",
                    "8:00pm",
                    "9:00pm",
                    "10:00pm",
                ],
                currentDate:'',
                errors:{},
               form: new Form({
                   id: this.id,
                   mode:'',
                   date:'',
                   time:'',
               }),
            }
        },
        methods:{
            check(){
                axios.post('/api/user/check?api_token='+window.token,this.form)
                .then(response => {
                    this.errors = [];
                    if(response.data == 0){
                        this.available = false;
                        this.$notify({
                            group: 'notification',
                            type: 'error',
                            title: 'Schedule',
                            text: 'Schedule not available'
                        });
                    }else{
                        this.available = true;
                        this.$notify({
                            group: 'notification',
                            type: 'success',
                            title: 'Schedule',
                            text: 'Schedule Available, Book Now'
                        });
                    }
                })
                .catch(error => {
                    this.errors = error.response.data.errors;
                });
            },
            bookNow(){
                axios.post('/api/user/bookNow?api_token='+window.token,this.form)
                .then(response => {
                    this.errors = [];
                    
                    this.$notify({
                        group: 'notification',
                        type: 'success',
                        title: 'Schedule',
                        text: 'Your Schedule has been booked'
                    });
                    window.location = "/profile";
                })
                .catch(error => {
                    this.errors = error.response.data.errors;
                });
            },

            getCurrentDate(){
                var date = new Date();
                
                var y = date.getFullYear();
                var d = date.getDate();
                var m = date.getMonth()+1;
                if(m < 10){
                    m = "0"+m;
                }
                this.currentDate = y+"-"+m+"-"+d
                
            }
        },
        mounted() {
            this.getCurrentDate();
        }
    }
</script>
