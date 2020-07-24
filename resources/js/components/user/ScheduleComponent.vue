<template>
    <div>
        <div class="card text-center">
            <a class="button-success text-white" href="/book">Schedule a Consult</a>
        </div>
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
                        <tr v-else v-for="(schedule, index) in schedules" :key="index" class="bg-success">
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
                                    <span class="badge badge-danger p-2">X</span>
                                </td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
                    console.log(this.date);
                });
            },
        },
        mounted() {
            this.loadSchedule();
        }
    }
</script>
