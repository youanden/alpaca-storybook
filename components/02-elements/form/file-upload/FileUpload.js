import AlpacaButton from "../../../02-elements/button/Button"

export default {
  components: {
    AlpacaButton
  },
  props: {
    labelText: {
      type: String,
      default: 'Your file (pdf, doc, max 1 MB)'
    },
    acceptedFormats: {
      type: String,
      default: '.pdf,.doc,.png'
    },
    dataSize: {
      type: String,
      default: '1024'
    },
    uploadButtonText: {
      type: String,
      default: 'Upload a file'
    },
    emptyFileNameText: {
      type: String,
      default: 'File not choosen'
    },
    fileUploadLabelClass: {
      type: String,
      default: null
    },
    fileUploadInputClass: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      fileName: ''
    }
  },
  methods: {
    chooseFile () {
      this.$refs.fileInput.click()
    },
    updateFileName () {
      this.fileName = this.$refs.fileInput.value.split('\\').pop()

      if (this.fileName) {
        this.$refs.fileName.focus()
      }
    }
  }
}
