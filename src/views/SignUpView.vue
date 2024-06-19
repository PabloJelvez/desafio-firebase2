<template>
<div class="signUpView" >
    <FormSignUp class="formSignUp p-5" />
</div>

</template>

<script>
import FormSignUp from '@/components/FormSignUp.vue';

export default{
    name: "SignUpView",
    components: {
        FormSignUp
    }
}

</script>

<style scoped lang="scss" >
.signUpView{
    display: flex;
    justify-content: center;
}
.formSignUp{
    width: 50%;
}
</style>