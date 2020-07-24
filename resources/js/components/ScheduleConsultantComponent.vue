<template>
       
    <div class="card">
        <div class="card-header">Schedule</div>

        <div class="card-body">
            <table class="table table-hover">
                <thead>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Mode</th>
                    <th>Appointment To</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr v-if="Object.keys(schedules).length == 0">
                        <td class="text-center" colspan="5">No schedule</td>
                    </tr>
                    <tr v-else v-for="(schedule, index) in schedules" :key="index">
                        <td>{{schedule.date}}</td>
                        <td>{{schedule.time}}</td>
                        <td>{{schedule.mode}}</td>
                        <td>
                            <span v-for="(item, index) in schedule.consultant" :key="index">
                                {{item.firstname}} {{item.lastname}}
                            </span>

                            <span v-for="(item, index) in schedule.appointment_user" :key="index">
                                {{item.firstname}} {{item.lastname}}
                            </span>
                            </td>
                            <td>
                                <a :href="'/consult/user/'+schedule.appointment_user[0].api_token+'/'+schedule.id">
                                <span class="badge badge-success p-2"><i class="fas fa-check-circle"></i>Accept</span>
                                </a>
                                <span class="badge badge-danger p-2"><i class="fas fa-times-circle"></i>Cancel</span>
                            </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
          
    
</template>

<script>
    export default {
        data(){
            return{
                schedules:{},
            }
        },
        methods:{
            loadSchedule(){
                axios.get('api/user/schedule?api_token='+window.token)
                .then(response => {
                    this.schedules = response.data;
                });
            },
        },
        mounted() {
            this.loadSchedule();
        }
    }
</script>
