<template> 
<div class="error">
    <h1>Что-то пошло не так...</h1>
    <h3>Проверьте подключение к интернету!</h3>
</div>
</template>

<style lang="scss" scoped>
.error  {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
  color: black;
  border-radius: 16px;
}
</style>