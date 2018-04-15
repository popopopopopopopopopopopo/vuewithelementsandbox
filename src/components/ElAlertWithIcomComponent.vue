<template>
  <div class="elalertbasicomponent">
    <el-alert
      title="success alert"
      type="success"
      :closable="false"
       show-icon>
    </el-alert>
    <el-alert
      title="info alert"
      type="info"
      description="this is description"
      center
      show-icon>
    </el-alert>
    <el-alert
      title="warning alert"
      type="warning"
      close-text="hogemoge"
      show-icon>
    </el-alert>
    <el-alert
      title="error alert"
      type="error"
      show-icon>
    </el-alert>
  </div>
</template>

<script>
//
export default {
  name: 'ElAlertWithIcomComponent',
};
</script>

<style scoped>

</style>
