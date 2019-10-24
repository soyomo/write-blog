# Vue

[Vue](https://cn.vuejs.org/index.html)是一个前端框架

## v-model

```js

<template>
<div class="addAndMin">
  <div @click="add">+</div>
  <div class="cont">{{step_}}</div>
  <div @click="minus">-</div>
</div> 
      
</template>
    
<script> 
export default {
  name: 'step-size',
  props: {
    step:{
      type: Number,
      default: 50,
    },
    size: {
      type:Number,
      default: 5
    }
  },
  watch: {
    step_ (value) {
      this.$emit('input',value);
    }
  },
  data () {
    return {
      step_:this.step
    };
  },
  methods:{
    add () {
      this.step_ = this.step_ + this.size;
    },
    minus () {
      this.step_ = this.step_ - this.size; 
    }
  }
    
};
</script>
    
<style scoped>
.addAndMin {
  display: flex;
  height: 40px;
  border: 1px solid #dcdee3;
  border-radius: 4px;
  width: 142px;
  color: #6b707f;
}
.addAndMin div {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 36px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
}
.addAndMin .cont {
  cursor: auto;
  width: 60px;
  font-size: 14px;
  border: none;
  border-right: 1px solid #dcdee3;
  border-left: 1px solid #dcdee3;
}
</style>


```
