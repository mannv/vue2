CKEDITOR.plugins.add('parameter', {
  requires: ['richcombo'],
  init: function (editor) {
    //  array of strings to choose from that'll be inserted into the editor
    var strings = []
    strings.push(['[contract_end_date]', '契約満了日', '契約満了日'])
    strings.push(['[corporate_name]', '法人名', '法人名'])
    strings.push(['[person_in_charge]', '担当者名', '担当者名'])

    // add the menu to the editor
    editor.ui.addRichCombo('parameter', {
      label: 'Insert Parameter',
      title: 'Insert Parameter',
      voiceLabel: 'Insert Parameter',
      className: 'cke_format',
      multiSelect: true,
      panel: {
        css: [editor.config.contentsCss, CKEDITOR.skin.getPath('editor')],
        voiceLabel: editor.lang.panelVoiceLabel,
      },

      init: function () {
        this.startGroup('Insert Content')
        for (var i in strings) {
          this.add(strings[i][0], strings[i][1], strings[i][2])
        }
      },

      onClick: function (value) {
        editor.focus()
        editor.fire('saveSnapshot')
        editor.insertHtml(value)
        editor.fire('saveSnapshot')
      },
    })
  },
})
