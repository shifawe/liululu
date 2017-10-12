/*
data, 数据来源
methods, 绑定的方法
watch, 数据监听
 */

v-text="";
v-html;
{{}};

v-if;
v-show;

<li v-for="i in items">
    <p v-test="i.label"></p>
</li>


//***********
v-on:click="doThis";
@click="doThis";

methods:{
    doTshi:function(x){

    }
}

//************
<img v-bind:src="imageSrc">

<div :class="{red:isRed}"></div>
<div :class="[classA,classB"></div>
<div :class="[classA,{classB:isB,classC:isC}]"></div>


///*******vue 组件之间的通信
<header msg="fdskljfl"></header>
new Vue({
    data:{
        username:xxx
    },
    props:['msg'],
    methods:{
        doThis:function(){
            console.log(this.msg)
        }
    }
})


var vm=new vue({
    el:"#app",
    data:{
        title:"webpack"
    },
    filters:{

    },
    mounted:function(){
        //渲染完后 调用这方法
        this.add();
    },
    mothods:{
        add:function(){
            this.title="vue"
        }
    }
})


