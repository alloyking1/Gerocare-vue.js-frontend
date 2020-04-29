<template>
    <h1>los</h1>
</template>

<script>
import {allPatients} from '../../../api/sponsor/sponsor.api' 

export default {
    data(){
        return{

        }
    },

    mounted:{
        getPatients(){
            let id = this.$store.state.user.id
            allPatients(id)
            .then(res => {
                console.log(res);
            })
        }
    }
}
</script>