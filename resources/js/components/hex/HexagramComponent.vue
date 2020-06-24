<template>

<div class="card">
            <div class="card-header">
                Hexagram
            </div>
            <div class="card-body">
                <table class="table table-hover">
                    <thead>
                        <th>#</th>
                        <th>Name</th>
                        <th class="text-right">Action</th>
                    </thead>
                    <tbody>
                        <tr v-for="hex in hexagram.data" :key="hex.id">
                            <td>{{hex.id}}</td>
                            <td>{{hex.name}}</td>
                            <td class="text-right"><button class="btn btn-primary" @click="hexModal(hex.id)"><i class="fas fa-pencil-alt"></i></button></td>
                        </tr>
                    </tbody>
                </table>
                <div class="row justify-content-end mt-2">
                    <pagination class="mr-2" :limit="2" :data="hexagram" @pagination-change-page="hexIndex"></pagination>
                </div>
            </div>
            <notifications group="notification" position="bottom right"/>

            <div class="modal fade" id="hexagramModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{{hexLabel}}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div>
                                <label for="name">Name:</label>
                                <input type="text" v-model="form.name" class="form-control">
                                <span class="font-italic text-danger" v-if="errors.name" v-text="errors.name[0]"></span>
                            </div>
                            <div class="mt-2">
                                <label for="name">Business Opening:</label>
                                <textarea class="form-control" v-model="form.opening" id="" cols="20" rows="5"></textarea>
                                <span class="font-italic text-danger" v-if="errors.opening" v-text="errors.opening[0]"></span>
                            </div>
                            <div class="mt-2">
                                <label for="name">Nobleman:</label>
                                <textarea class="form-control" v-model="form.nobleman" id="" cols="20" rows="5"></textarea>
                                <span class="font-italic text-danger" v-if="errors.nobleman" v-text="errors.nobleman[0]"></span>
                            </div>
                            <div class="mt-2">
                                <label for="name">Weather:</label>
                                <textarea class="form-control" v-model="form.weather" id="" cols="20" rows="5"></textarea>
                                <span class="font-italic text-danger" v-if="errors.weather" v-text="errors.weather[0]"></span>

                            </div>
                            <div class="mt-2">
                                <label for="name">General Luck:</label>
                                <textarea class="form-control" v-model="form.general" id="" cols="20" rows="5"></textarea>
                                <span class="font-italic text-danger" v-if="errors.general" v-text="errors.general[0]"></span>
                                
                            </div>
                            <div class="mt-2">
                                <label for="name">Wealth:</label>
                                <textarea class="form-control" v-model="form.wealth" id="" cols="20" rows="5"></textarea>
                                <span class="font-italic text-danger" v-if="errors.wealth" v-text="errors.wealth[0]"></span>
                                
                            </div>
                            <div class="mt-2">
                                <label for="name">Relationship:</label>
                                <textarea class="form-control" v-model="form.relationship" id="" cols="20" rows="5"></textarea>
                                <span class="font-italic text-danger" v-if="errors.relationship" v-text="errors.relationship[0]"></span>

                            </div>
                            <div class="mt-2">
                                <label for="name">Business:</label>
                                <textarea class="form-control" v-model="form.business" id="" cols="20" rows="5"></textarea>
                                <span class="font-italic text-danger" v-if="errors.business" v-text="errors.business[0]"></span>

                            </div>
                            <div class="mt-2">
                                <label for="name">Family:</label>
                                <textarea class="form-control" v-model="form.family" id="" cols="20" rows="5"></textarea>
                                <span class="font-italic text-danger" v-if="errors.family" v-text="errors.family[0]"></span>

                            </div>
                            <div class="mt-2">
                                <label for="name">Legal Matters:</label>
                                <textarea class="form-control" v-model="form.legal" id="" cols="20" rows="5"></textarea>
                                <span class="font-italic text-danger" v-if="errors.legal" v-text="errors.legal[0]"></span>

                            </div>
                            <div class="mt-2">
                                <label for="name">Travel:</label>
                                <textarea class="form-control" v-model="form.travel" id="" cols="20" rows="5"></textarea>
                                <span class="font-italic text-danger" v-if="errors.travel" v-text="errors.travel[0]"></span>

                            </div>
                            <div class="mt-2">
                                <label for="name">Health:</label>
                                <textarea class="form-control" v-model="form.health" id="" cols="20" rows="5"></textarea>
                                <span class="font-italic text-danger" v-if="errors.health" v-text="errors.health[0]"></span>

                            </div>
                            <div class="mt-2">
                                <label for="name">Lost Property:</label>
                                <textarea class="form-control" v-model="form.property" id="" cols="20" rows="5"></textarea>
                                <span class="font-italic text-danger" v-if="errors.property" v-text="errors.property[0]"></span>

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" @click="updateHex">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         
</template>

<script>
    export default {
        data(){
            return {
                hexagram:{},
                hexLabel:'',
                showHex:{},
                errors:{},
                form: new Form({
                    id:'',
                    name:'',
                    opening:'',
                    nobleman:'',
                    weather:'',
                    general:'',
                    wealth:'',
                    relationship:'',
                    business:'',
                    family:'',
                    legal:'',
                    travel:'',
                    health:'',
                    property:''
                }),
            }
        },
        methods:{
            hexIndex(page = 1){
                axios.get('/api/hex/index?page='+page+'&api_token='+window.token)
                .then(response => {
                    this.hexagram = response.data;
                });
            },

            hexModal(id){
                this.errors = [];
                $('#hexagramModal').modal('show');
                this.form.id = id;
                axios.get('api/hex/show/'+id+"?api_token="+window.token)
                .then(response => {
                    this.hexLabel = response.data.name;
                    this.form.name = response.data.name;
                    this.form.opening = response.data.opening;
                    this.form.nobleman = response.data.nobleman;
                    this.form.weather = response.data.weather;
                    this.form.general = response.data.general;
                    this.form.wealth = response.data.wealth;
                    this.form.relationship = response.data.relationship;
                    this.form.business = response.data.business;
                    this.form.family = response.data.family;
                    this.form.legal = response.data.legal;
                    this.form.travel = response.data.travel;
                    this.form.health = response.data.health;
                    this.form.property = response.data.property;
                });
            },

            updateHex(){
                axios.put('api/hex/update/'+this.form.id+"?api_token="+window.token, this.form)
                .then(response => {
                    $('#hexagramModal').modal('hide');
                    this.$notify({
                        group: 'notification',
                        type: 'success',
                        title: 'Update Hexagram',
                        text: 'Hexagram record has been updated'
                    });
                })
                .catch(error => {
                    this.errors = error.response.data.errors;
                })
            }
        },
        mounted() {
            this.hexIndex();
            console.log('Component mounted.')
        }
    }
</script>
