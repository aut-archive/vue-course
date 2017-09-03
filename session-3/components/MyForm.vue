<template>
    <b-card class="w-50 mx-2 justify-content-center">
    <b-form>
      <b-form-group id="exampleInputGroup1"
                    label="Email address:" label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="exampleInput1"
                      type="email"  required
                      placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:" label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"  required
                      placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Food:" label-for="exampleInput3">
        <b-form-select id="exampleInput3"
        ></b-form-select>
      </b-form-group>
      <b-form-group id="exampleGroup4">
        <b-form-checkbox  id="exampleInput4">
          Check me out
        </b-form-checkbox>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="secondary">Reset</b-button>
    </b-form>
  </b-card>
</template>


<script>
export default {
    props: {
        formTitle: {
            type: String,
            default: 'First Form'
        }
    }
}
</script>
