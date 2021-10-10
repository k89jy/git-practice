<template>
 <div class="signUp">

    <h1>회원가입</h1>

    아이디:<br><input>
    <br>
    이름:<br><input>
     <br>
    아이디:<br><input>
     <br>
    비밀번호:<br><input>
     <br>
    비밀번호 확인:<br><input>
    <br>
    <button v-on:click="onClickSignUp">회원가입</button>
    <br>
    {{myData}}
 </div>
</template>

<script>

import axios from 'axios'
import store from '@/store.js'


export default {
    name:"SignUp",
     data(){
         return{
         myData:store.count
         }
     },
//axios 모듈화 하기
    methods:{
    onClickSignUp: async function(){
        const res = await axios.post('/signUp')
        console.log(res.data)
        if(res){
            alert('sign up success')
        }
        else{
            alert('sign up fail')
        }
    }
    }
  
}
</script>

<style>
.signUp{
    align-content: center;
    
    
}
</style>
