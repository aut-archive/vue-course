<template>
    <div>
        <h1>
            here's my User ID: {{ myUserId }}
            <br>
            and counter is: {{ counter }}
        </h1>
        <my-form :formTitle="myVar"></my-form>
    </div>
</template>


<script>
import MyForm from '~/components/MyForm.vue'
import { mapGetters } from 'vuex'
export default {
    middleware: ['auth'],
    async asyncData({params}) {
        return {
            myUserId: params.userId,
            myVar: 'Im variable'
        }
    }, 
    components: {
        MyForm
    },
    computed: {
        ...mapGetters('todos/counter')
    }
}
</script>
