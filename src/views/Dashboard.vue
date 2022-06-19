<template>
    
    <v-app>
        <v-card class="pa-4">
           <h1> Dashboard page </h1>
        </v-card>
        <v-btn @click="create = true"><v-icon>mdi-plus</v-icon> Create Transaction</v-btn>


        <div class="pa-5" v-for="(transaction,i) in transactions" :key="i">
            <v-card max-width="500px" class="pa-5 rounded-lg" >
                <v-card-title>
                    <span class="headline">{{transaction.title}}</span>
                </v-card-title>
                <v-card-text>
                    <p>{{transaction.description}}</p>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" @click="sendInvoice(transaction.invoice,transaction.id)">Send Invoice</v-btn>
                    <v-btn color="error" outlined @click="emailClient(transaction.buyer_email)">Message client</v-btn>
                </v-card-actions>
            </v-card>
        </div>




        <v-dialog max-width="500px" v-model="create">
            <v-card max-width="500px" class="py-5">
                <div class="pa-2 text-right">
                    <v-btn depressed fab @click="create = false"><v-icon>mdi-close</v-icon></v-btn>
                </div>
                <div class="pa-4">
                <v-form>
                    <v-text-field color="orange" v-model="email" outlined label="Client email"/>
                    <v-text-field color="orange" v-model="title" outlined label="Contract title"/>
                    <v-text-field color="orange" v-model="description" outlined label="Contract description" />
                    <v-text-field type="number" color="orange" :hint="`That is equivalent to $ ${amount* 0.0002068}`" v-model="amount" outlined label="Amount (in SATOSHI)"/>
                    <v-btn :loading="loading" @click="sendContract" block color="black" x-large class="white--text rounded-lg"> SEND REQUEST </v-btn>
                </v-form>
                </div>
            </v-card>
        </v-dialog>
    </v-app>
</template>




<script>
import axios from "axios"

export default{
    name: "Dashboard",
    data(){
        return{
            loading:false,
            create:false,
            email:"",
            title:"",
            description:"",
            amount:"",
            transactions:[]

}
    },
    created(){
        this.getContracts()
    },
    methods:{
        viewTransaction(id){
            axios({
                method:"POST",
                url:"https://app.lightningescrow.io/gettx/v2/",
                data:{
                    session_id:localStorage.getItem("sessionID"),
                    tx:id
                }
            }).then((res)=>{
                console.log(res)
            })
        },
        sendInvoice(invoice,id){
            const payload = {
                   session_id: localStorage.getItem("sessionID"),
                   invoice: "ln"+invoice,
                   tx:id
            }
            console.log(payload)
            this.loading = true
            axios({
                method:"POST",
                url:"https://app.lightningescrow.io/setinvoice/v2/",
                data:{
                   session_id: localStorage.getItem("sessionID"),
                   invoice: "ln"+invoice,
                   tx:id
                }
            })
            .then(res=>{
                this.loading = false
                console.log(res)
                    this.$swal({
                    title: "Invoice sent successfully",
                    text: "Invite sent successfully to client. Youe client has been notified and will make payment shortly",
                    type: "success",
                    confirmButtonText: "OK",
                    icon:"success"
                })
            })
        },
        emailClient(email){
            window.location.href = `mailto:${email}`
        },
        getContracts(){
            axios({
                method:"POST",
                url:"https://app.lightningescrow.io/getallusertxs/v2/",
                data: {
                    session_id: localStorage.getItem("sessionID")
                }
            }).then((res)=>{
                console.log(res)
                this.transactions = res.data.reverse()
            })
        },
        sendContract(){
            this.loading = true
            axios({
                method:"POST",
                url:"https://app.lightningescrow.io/settx/v2/",
                headers:{
                    "session_id": localStorage.getItem("sessionID")
                },
                data:{
                    session_id: localStorage.getItem("sessionID"),
                    buyer_email: this.email,
                    goods_or_services: "services",
                    title: this.title,
                    description: this.description,
                    fee_payer:"buyer",
                   amount: this.amount
                }
            }).then((res)=>{
                console.log(res)
                this.loading = false
                    this.$swal({
                    title: "Contract sent",
                    text: "Contract sent successfully. Youe client has been notified and will make payment shortly",
                    type: "success",
                    confirmButtonText: "OK",
                    icon:"success"
                }).then((result)=>{
                    if(result.isConfirmed){
                        location.reload()
                    }
                })
                
            }).catch((error)=>{
                this.$swal({
                    title: "Error",
                    text: error.response.data.message,
                    type: "error",
                    confirmButtonText: "OK",
                    icon:"error"
                })
            })
        }
    }

}
</script>
