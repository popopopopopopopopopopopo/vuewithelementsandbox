<template>
    <div class="suteki">
      <el-container>
        <el-header>{{ msg }}</el-header>
        <el-main>Main</el-main>
      </el-container>
    </div>
</template>
<script>
export default {
  name: 'SutekinaComponent',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>
