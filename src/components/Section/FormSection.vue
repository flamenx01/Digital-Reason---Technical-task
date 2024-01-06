<template>
<div class="form-section container">
  <h2>{{pageSection.page_section_title}}</h2>
  <p>{{pageSection.page_section_text}}</p>
  <form>
    <label class="">I am a</label>
    <select class="" name="" id="">
			<option value="person">person</option>
			<option value="robot">robot</option>
			<option value="robotPerson">robot pretending to be a person</option>
		</select>
    <input type="submit" class="btn btn--primary" value="Start now">
  </form>
</div>
</template>

<script setup>
const props = defineProps({
   pageSection : { 
      type: Object, default: () => {
        return {}
      }
   },
});
</script>

<style lang="scss">
  .form-section {
    background-color: #ececec;
    h2 {
        font-size: 2.25em;
        line-height: 1.2;
        color: black;
      }
    p {
      margin-top: 1.5rem;
      font-size: 1.5em;
      line-height: 1.3;
      color: black;
    }
    form {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 2.25em;
      margin-top: 2.25rem;
      background-color: white;
      flex-wrap: wrap;
      label, select{
        font-size: 2rem;
        line-height: 1.4;
        font-weight: 300;
        margin-right: 1rem;
      }
      label: {
        margin: 0 0 0 0.6rem;
      }
      select {
        background: none;
        border: none;
        border-bottom: 3px solid #367d91;
        color: #367d91;
        option {
          font-size: 1rem;
          color: black;
        }
      }
    }
  }
</style>