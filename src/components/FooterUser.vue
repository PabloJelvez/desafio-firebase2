<template>

<footer class="footerUser p-3">
    <div>
        <p><i class="fa-regular fa-copyright p-1"></i>Desarrollado por: <strong>Pablo Jélvez</strong> 2024</p>
    </div>
    <div>
        <a href="https://github.com/PabloJelvez"><i class="fa-brands fa-github p-1"></i>https://github.com/PabloJelvez</a>
    </div>
    

</footer>


</template>

<script>
export default{
    name: "FooterUser"
}
</script>

<style scoped lang="scss">
.footerUser{
    background: linear-gradient(to right ,grey,silver);
    position: fixed;
    bottom: 0;
    width: 100%;
}
.footerUser a{
    text-decoration: none;
   color: #2c3e50;
}
</style>