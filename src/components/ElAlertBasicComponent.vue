<template>
    <div class="elalertbasicomponent">
      <el-alert
        title="success alert"
        type="success"
        :closable="false">
      </el-alert>
      <el-alert
        title="info alert"
        type="info">
      </el-alert>
      <el-alert
        title="warning alert"
        type="warning"
        close-text="hogemoge">
      </el-alert>
      <el-alert
        title="error alert"
        type="error">
      </el-alert>
    </div>
</template>

<script>
export default {
  name: 'ElAlertBasicComponent',
};
</script>

<style scoped>

</style>
