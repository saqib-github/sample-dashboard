<template>
<v-container class="my-5">
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 md6><h2>Employee Details</h2></v-flex>
    </v-layout>
  </v-container>  
  
  <v-container class="my-10">
    <v-layout row wrap>
      <v-flex xs12 md2><h4>Company Id: TRC123</h4></v-flex>
      <v-flex xs12 md2><h4>Name: Hassan</h4></v-flex>
      <v-flex xs12 md2><h4>Father Name: Haider Ali</h4></v-flex>
      <v-flex xs12 md2><h4>City: New York</h4></v-flex>
      <v-flex xs12 md2><h4>Country: United States</h4></v-flex>
      <v-flex xs12 md2><h4>Email: hassan@email.com</h4></v-flex>
    </v-layout>
  </v-container> 
  <v-container class="my-10">
    <v-layout row wrap justify-space-between>
      <v-flex xs12 md4><h4>Phone Number: 123-456-78</h4></v-flex>
      <v-flex xs12 md2><h4>Salary: 20000</h4></v-flex>
      <v-flex xs12 md4 class="d-inline-flex"><h4>Bonus: 0</h4>
      <v-btn small dense color="primary" max-height="25">update</v-btn>
      </v-flex>
    </v-layout>
  </v-container>  
  <v-container class="my-10">
    <v-layout row wrap justify-space-between>
      <v-flex xs12 md6><h4>Position: Graphic Designer</h4></v-flex>
      <v-flex xs12 md6><h4>Department: Creative and Arts Development</h4></v-flex>
    </v-layout>
  </v-container> 
  <v-container class="my-10">
    <v-layout row wrap justify-space-between>
      <v-flex xs12 md4><h4>Joining Date: 20 Dec, 2012</h4></v-flex>
      <v-flex xs12 md4 class="d-inline-flex"><h4>Leaving Date: none</h4>
      <v-btn small dense color="primary" max-height="25">update</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
   <v-container class="my-10">
    <v-layout row wrap align-content-space-between>
      <v-flex xs12 md6 class="d-inline-flex align-md-stretch"><h4>Contract Signed Date: none</h4>
      <v-btn small dense color="primary" max-height="25">update</v-btn>
      </v-flex> 
      <v-flex xs12 md6 class="d-inline-flex"><h4>Contract Ending Date: none</h4>
      <v-btn small dense color="primary" max-height="25">update</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
    <v-container class="my-10">
    <v-layout row wrap align-content-space-between>
      <v-flex xs12 md6 class="d-inline-flex align-md-stretch"><h4>Employee Status: Permanent || Temporarily</h4>
      </v-flex>
    </v-layout>
  </v-container>


</v-container>

</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
