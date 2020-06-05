<template>
  <form class="form" @submit.prevent="submit">
    <h1>Add recipe</h1>
    <div v-if="show">
      <div class="input">
        <input type="text" placeholder="Recipe name" v-model="form.title">
      </div>
      <div class="input">
        <input type="text" placeholder="Recipe description" v-model="form.description">
      </div>
    </div>

    <div class="buttons">
      <button class="btn" type="submit" :disabled="!valid">Create</button>
      <button class="btn secondary" type="button" @click="changeShow">
        {{ show ? 'Hide' : 'Show'}} form
      </button>
    </div>
  </form>
</template>

<script>
// import toggleMixin from "@/toggleMixin";
// import {ref, reactive, computed} from '@vue/composition-api'
import {useToggle} from "../composition/toggle";
import {useForm} from "../composition/form";

export default {
  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },
  // mixins: [toggleMixin],
  setup(props) {
    const {visible: show, toggle: changeShow} = useToggle();
    return {
      show,
      changeShow,
      ...useForm(props)
    }

  },
  // data() {
  //   return {
  //     title: '',
  //     description: '',
  //     // visible: true,
  //   }
  // },
  // methods: {
    // submit() {
    //   const recipe = {
    //     id: Date.now().toString(),
    //     title: this.title.trim(),
    //     description: this.description.trim(),
    //   }
    //
    //   this.title = this.description = '';
    //
    //   this.onAdd(recipe)
    // },
    // toggle() {
    //   this.visible = !this.visible;
    // }
  // },
  // computed: {
  //   valid() {
  //     return this.title.trim() && this.description.trim()
  //   }
  // }
}
</script>

<style>
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 1px solid #eee;
    margin-bottom: 1rem;
  }

  .form h1 {
    margin: 0;
    margin-bottom: 1rem;
  }

  .input {
    margin-bottom: 1rem;
  }

  .input input {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 8px;
    width: 400px;
  }

  .buttons {
    width: 400px;
    display: flex;
    justify-content: space-around;
  }
</style>
