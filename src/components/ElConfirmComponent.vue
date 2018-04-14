<template>
  <div class="elconfirmcomponent">
    <el-button type="text" @click="showConfirm">Click to open the Confirm Message Box!</el-button>
  </div>
</template>

<script>
export default {
  name: 'ElConfirmComponent',
  methods: {
    showConfirm() {
      this.$confirm('こんふぁーむ？', 'たいとる', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: 'Delete completed',
          });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: 'Delete canceled',
          });
        });
    },
  },
};
</script>

<style scoped>

</style>
