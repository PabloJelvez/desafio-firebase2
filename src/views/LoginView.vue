<template>
<div class="loginView" >
    <FormLogin class="formLogin p-5" />
</div>

</template>

<script>
import FormLogin from '@/components/FormLogin.vue';

export default{
    name: "LoginView",
    components: {
        FormLogin
    }
}

</script>

<style scoped lang="scss" >
.loginView{
    display: flex;
    justify-content: center;
}
.formLogin{
    width: 50%;
}
</style>