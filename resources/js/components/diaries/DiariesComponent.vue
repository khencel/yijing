<template>
   <div>
       <div class="text-right mb-3">
           <button class="button-success" @click="btnCreate">Create Diary</button>
       </div>
        <div class="row">
            <div class="col-md-2" style="max-height:500px;overflow:auto">
                
                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist">
                    <a v-for="(journal, index) in journals" :key="journal.id" :class="index==0?'nav-link side-tab border active':'nav-link side-tab border'" @click="displayDetails(journal.attribute.id)" :id="'v-pills-'+journal.attribute.attribute+'-tab'" data-toggle="pill" :href="'#v-pills-'+journal.attribute.attribute" role="tab" :aria-controls="'v-pills-'+journal.attribute.attribute" aria-selected="true">    
                    {{journal.attribute.attribute}}     
                    </a>
                </div>
               
            </div>
            <div class="col-md-10 border shadow-sm p-3" style="max-height:500px;overflow:auto">
                <div v-if="Object.keys(journal_details).length == 0">No record...</div>
                <div v-else class="" v-for="(item, index) in journal_details" :key="index">
                    <div class="row">
                        <div class="col-md-7 border">
                            <h4>{{item.cast_type}}</h4>
                            <div v-if="item.hex_focus != ''" class="row text-center">
                                <div class="col-md-5">
                                    <div v-for="(item, index) in item.hex_focus.split('')" :key="index">
                                        <img v-show="item == 1"  :class="index==4?'mb-3':''" src="img/solidLine.png" style="width:90%;height:40px" alt="">
                                        <img v-show="item == '0'"  :class="index==4?'mb-3':''" src="img/brokenLine.png" style="width:90%;height:40px" alt="">
                                        <img v-show="item == 3"  :class="index==4?'mb-3':''" src="img/solidLinefocus.png" style="width:90%;height:40px" alt="">
                                        <img v-show="item == 4"  :class="index==4?'mb-3':''" src="img/brokenCircle.png" style="width:90%;height:40px" alt="">
                                    </div>
                                    <strong>{{item.hex_original[0].name}}</strong>
                                </div>
                                <div class="col-md-1">
                                    =>
                                </div>
                                <div class="col-md-5">
                                    <div v-for="(item, index) in item.hex_transform[0].code.split('')" :key="index">
                                        <img v-show="item == 1"  :class="index==2?'mb-3':''" src="img/solidLine.png" style="width:90%;height:40px" alt="">
                                        <img v-show="item == '0'"  :class="index==2?'mb-3':''" src="img/brokenLine.png" style="width:90%;height:40px" alt="">
                                    </div>
                                    <strong>{{item.hex_transform[0].name}}</strong>
                                </div>
                            </div>
                            <div v-else class="row text-center justify-content-center">
                                <div class="col-md-5">
                                    <div v-for="(item, index) in item.trigram[0].code.split('')" :key="index">
                                        <img v-show="item == 1"  :class="index==2?'mb-3':''" src="img/solidLine.png" style="width:90%;height:40px" alt="">
                                        <img v-show="item == '0'"  :class="index==2?'mb-3':''" src="img/brokenLine.png" style="width:90%;height:40px" alt="">
                                    </div>
                                    <strong>{{item.trigram[0].name}}</strong>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <p><strong>{{item.cast_type}} meaning</strong></p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, corrupti. Sequi dicta, odit non ab consequuntur, incidunt error iste rem nisi, nihil sint molestiae quisquam hic impedit quaerat et culpa!</p>
                        </div>
                    </div>
                    <p><strong>Date:</strong>{{item.date}}</p>
                    <p><strong>Question:</strong>{{item.question}}</p>
                    <strong>Details</strong>
                    <p>{{item.details}}</p>
                    <hr>
                </div>

                
            </div>
        </div>
        <notifications group="notification" position="bottom right"/>
        <!-- modal -->
        <div class="modal fade" id="createDiaryModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">My Hexagram Companion Journal</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-7">
                            <div v-show="Object.keys(form.hex_code).length == 0 && Object.keys(form.tri_code).length == 0" class="border text-center" style="height:300px;background-color:#CCCCCC;">
                                <img src="img/default.jpg" class="img-fluid" alt="">
                            </div>
                            <div v-show="Object.keys(form.hex_code).length != 0" class="row text-center" style="min-height:300px;">
                                <div class="col-md-5">
                                    <div  v-for="(item, index) in form.hex_code" :key="index">
                                        <img v-show="item == 1"  :class="index==2?'mb-3':''" src="img/solidLine.png" style="width:80%;height:40px" alt="">
                                        <img v-show="item == 0"  :class="index==2?'mb-3':''" src="img/brokenLine.png" style="width:80%;height:40px" alt="">
                                        <img v-show="item == 3"  :class="index==2?'mb-3':''" src="img/solidLinefocus.png" style="width:80%;height:40px" alt="">
                                        <img v-show="item == 4"  :class="index==2?'mb-3':''" src="img/brokenCircle.png" style="width:80%;height:40px" alt="">
                                    </div>
                                    <strong>{{form.hex_name}}</strong>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ut expedita? Tempora nulla voluptatem omnis consequatur nemo quibusdam blanditiis, adipisci atque. Saepe impedit quidem delectus sapiente odit quae optio nisi.</p>
                                </div>
                                <div class="col-md-1" style="padding-top:15%">
                                    <svg style="width:24px;height:24px;" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                                    </svg>
                                </div>
                                <div class="col-md-5">
                                    <div v-for="(item, index) in form.transforms" :key="index">
                                        <img v-show="item == 1"  :class="index==2?'mb-3':''" src="img/solidLine.png" style="width:80%;height:40px" alt="">
                                        <img v-show="item == 0"  :class="index==2?'mb-3':''" src="img/brokenLine.png" style="width:80%;height:40px" alt="">
                                    </div>
                                    <strong>{{form.transform_name}}</strong>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati, nam quod eos nobis minus ea hic dolorem quos id dicta dolores reprehenderit natus non, voluptatem mollitia animi? Blanditiis, cum.</p>
                                </div>
                            </div>
                            <div class="row justify-content-center text-center" style="min-height:300px;" v-show="Object.keys(form.tri_code).length != 0">
                                <div class="col-md-5">
                                    <div v-for="(item, index) in form.tri_code" :key="index">
                                        <img v-show="item == 1"  :class="index==2?'mb-3':''" src="img/solidLine.png" style="width:80%;height:40px" alt="">
                                        <img v-show="item == 0"  :class="index==2?'mb-3':''" src="img/brokenLine.png" style="width:80%;height:40px" alt="">
                                    </div>
                                    <strong>{{form.tri_name}}</strong>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati, nam quod eos nobis minus ea hic dolorem quos id dicta dolores reprehenderit natus non, voluptatem mollitia animi? Blanditiis, cum.</p>
                                </div>
                            </div>
                            <div class="row mt-2 text-center" v-show="Object.keys(form.hex_code).length == 0 && Object.keys(form.tri_code).length == 0">
                                <div class="col-md-6">
                                    <button :class="!trigramDisable?'button-primary w-75':'button-disable w-75 text-white'" :disabled="trigramDisable" @click="castValidation('trigram')">Trigram</button>
                                </div>
                                <div class="col-md-6">
                                    <button :class="!hexagramDisable?'button-primary w-75':'button-disable w-75 text-white'" :disabled="hexagramDisable" @click="castValidation('hexagram')">Hexagram</button>
                                </div>
                            </div>  
                        </div>
                        <div class="col-md-5">
                            <div class="mb-2 row">
                                <div class="col-md-3">
                                    <label for="">Question Type</label>
                                </div>
                                <div class="col-md-9">
                                    <select class="form-control" v-model="form.type" @change="propertiesSelected">
                                        <option value="" disabled hidden>Question Type</option>
                                        <option v-for="attribute in attributes" :key="attribute.id" :value="[attribute.id,attribute.is_hex]">{{attribute.attribute}}</option>
                                    </select>
                                   <span class="font-italic text-danger" v-if="errors.type" v-text="errors.type[0]"></span>
                                </div>
                                
                            </div>
                            <div class="mb-2 row">
                                <div class="col-md-3">
                                    <label for="">Question</label>
                                </div>
                                <div class="col-md-9">
                                    <input class="form-control" type="text" v-model="form.question" placeholder="Question">
                                    <span class="font-italic text-danger" v-if="errors.question" v-text="errors.question[0]"></span>
                                </div>
                            </div>
                            <div class="mb-2 row">
                                <div class="col-md-3">
                                    <label for="">Detail</label>
                                </div>
                                <div class="col-md-9">
                                    <textarea v-model="form.details" cols="30" rows="10" placeholder="Detail" class="form-control"></textarea>
                                    <span class="font-italic text-danger" v-if="errors.details" v-text="errors.details[0]"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="button-success" @click="btnSave">Save</button>
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
                attributes:{},
                trigramDisable:false,
                hexagramDisable:false,
                journals:{},
                journal_details:{},
                errors:{},
                id:'',
                form: new Form({
                    type:'',
                    cast_type:'',
                    question:'',
                    question:'',
                    details:'',
                    hex_code:'',
                    hex_name:'',
                    transforms:'',
                    transform_name:'',
                    tri_code:'',
                    tri_name:'',
                    original_hex_id:'',
                    transform_hex_id:'',
                    trigram_id:'',
                    date:new Date().toDateString(),
                }),
            }
        },
        methods:{   
            loadAttribute(){
                axios.get('api/user/attribute?api_token='+window.token)
                .then(response => {
                    this.attributes = response.data
                });
            },

            loadJournal(){
                axios.get('api/journal?api_token='+window.token)
                .then(response => {
                    this.journals = response.data;
                    this.displayDetails(response.data[0].type);
                });
            },

            btnCreate(){
                $('#createDiaryModal').modal('show');
                this.loadAttribute();
            },
          

            castHex(){
                this.form.cast_type = "Hexagram";
                axios.get('/api/user/cast?api_token=' +window.token)
                .then(response => {
                    this.form.original_hex_id = response.data.hexagram[0].id;
                    this.form.hex_name = response.data.hexagram[0].name;
                    
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
                    
                    this.form.hex_code = hex;
                    
                    var hexTransform = response.data.hexagram[0].code.split("");
                    
                    if(hexTransform[focus-1] == 0){
                        hexTransform[focus-1] = "1"
                    }else{
                        hexTransform[focus-1] = "0"
                    }
                    this.form.transforms = hexTransform;
                    this.getTransformname();
                });
            },
            getTransformname(){
                axios.post('api/user/transform/name?api_token='+window.token,{transformName:this.form.transforms})
                .then(response => {
                    this.form.transform_hex_id = response.data.id;
                    this.form.transform_name = response.data.name;
                });
            },
            castTri(){
                this.form.cast_type = "Trigram";
                axios.get('api/user/trigram?api_token='+window.token)
                .then(response => {
                    this.form.trigram_id = response.data[0].id;
                    this.form.tri_code = response.data[0].code.split("");
                    this.form.tri_name = response.data[0].name;
                });
            },
            castValidation(castType){
                if(this.form.type == "" || this.form.question == "" || this.form.details == ""){
                    this.$notify({
                        group: 'notification',
                        type: 'error',
                        title: 'Invalid details',
                        text: 'Question type, question, details are required'
                    });
                }else{
                    if(castType == 'hexagram'){
                        this.castHex();
                    }else{
                        this.castTri();
                    }
                }
            },
            btnSave(){
                if(this.form.cast_type == ""){
                    this.$notify({
                        group: 'notification',
                        type: 'error',
                        title: 'Invalid Trigram or Hexagram',
                        text: 'Please click trigram or hexagram before you save'
                    });
                    
                }else{
                    this.form.post('api/journal?api_token='+window.token)
                    .then(response =>{
                            $('#createDiaryModal').modal('hide');
                            window.location = "/diaries";
                    })
                    .catch(error => {
                        this.errors = error.response.data.errors;
                    });
                }
            },

            displayDetails(id){
                this.form.get('api/journal/'+id+"?api_token="+window.token)
                .then(response => {
                    this.journal_details = response.data;
                });
            },
            propertiesSelected(){
                if(this.form.type[1] == 1){
                    this.trigramDisable = true;
                    this.hexagramDisable = false;
                }else{
                    this.trigramDisable = false;
                    this.hexagramDisable = true;
                }
            }
        },
        mounted() {
            this.loadJournal();
        },
        
    }
</script>
