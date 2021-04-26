<template>
  <div>
    <ckeditor
      v-model="editorData"
      :config="editorConfig"
      :disabled="disabled"
    ></ckeditor>
    <pre>{{ editorData }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: false,
      editorData: `
      <h1 style="color: red; font-size: 20px; background: green;a:1" class="demo1">Demo H1</h1>
    <h2 style="color: red; background: green;a:1" class="demo2">Demo H2</h2>
    <h3 style="color: red; background: green;a:1" class="demo3"><strong>Demo</strong> H3</h3>
    <h4 style="color: red; background: green;a:1" class="demo4">Demo H4</h4>
    <h5 style="color: red; background: green;a:1" class="demo5">Demo H5</h5>
    <h6 style="color: red; background: green;a:1" class="demo6">Demo H6</h6>

    <p style="background: blue; padding-top: 10px;">Demo P with style</p>

    &lt;p&gt;A sample &lt;u&gt;heavily formatted text&lt;/u&gt; using &lt;strong&gt;&lt;span style=&quot;font-family: &apos;Comic Sans MS&apos;;font-size:16px&quot;&gt;different fonts&lt;/span&gt;&lt;/strong&gt; and &lt;span style=&quot;font-size:18px;color:#00FF00;background-color: #FFFF00&quot;&gt;text colors&lt;/span&gt;. &lt;/p&gt;
    <a href="http://google.com.vn">dsg</a>
    <table>
      <tr>
        <td>111</td>
      </tr>
    </table>`,
      editorConfig: {
        // toolbar: ['bold', 'italic', '|', 'link'],
        toolbar: [
          {
            name: 'document',
            items: ['Source'],
          },
        ],
        allowedContent: 'h1{*}; h2{*}; h3{*}; h4{*}; h5{*}; h6{*}; p{*}; br',
        // disallowedContent: 'a',
      },
    }
  },
}
</script>

<style scoped></style>
