<template>
  <div class="alertcomponent">
    <el-button type="text" @click="showAlert">Click to open the Message Box</el-button>
  </div>
</template>

<script>
const mymessage = 'element alert message!';
const myTitle = 'element alert!';
const comfirmKind = 'OK';
const messageType = 'info';

export default {
  methods: {
    showAlert() {
      this.$alert(mymessage, myTitle, {
        confirmButtonText: comfirmKind,
        // callbackで、Confirm後の動作を指定
        callback: (action) => {
          if (action === 'confirm') {
            this.$message({
              type: messageType,
              message: `action: ${action}`,
            });
          }
        },
      });
    },
  },
};
</script>

<style scoped>

</style>
