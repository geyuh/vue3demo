import { message } from 'ant-design-vue'

const notice_message = {
  success: function(res) {
    message.success(res)
  },
  error: function(res) {
    message.error(res)
  }
}

export { notice_message }
