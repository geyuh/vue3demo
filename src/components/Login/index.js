// import axios from 'axios'

// 校验验证码接口
// function check_code(value) {
//   let formData = new FormData()
//   let text = 'vcode'
//   formData.append(text, value)
//   axios
//     .post(
//       'http://vueshop.glbuys.com/api/home/user/checkvcode?token=1ec949a15fb709370f',
//       formData
//     )
//     .then(res => {
//       console.log(res.data.code)
//       if (res.data.code === 201) {
//         return false
//       } else {
//         return true
//       }
//     })
// }
export function initForm() {
  return {
    form: {
      name: '',
      password: '',
      chkcode: ''
    }
  }
}

export function initRules() {
  return {
    username: [
      {
        required: true,
        message: 'Please input username',
        trigger: 'blur'
      },
      {
        min: 3,
        max: 11,
        message: 'Length should be 3 to 5',
        trigger: 'blur'
      }
    ],
    password: [
      {
        required: true,
        message: 'Please input password',
        trigger: 'blur'
      }
    ],
    chkcode: [
      {
        required: true,
        trigger: 'blur',
        // message: 'Please input chkcode',
        validator: (rule, value) => {
          if (!value) {
            return Promise.reject('Please input chkcode')
          } else {
            // if (check_code(value)) {
            //   return Promise.resolve()
            // } else {
            //   return Promise.reject('您输入的验证码不正确!')
            // }
            return Promise.resolve()
          }
        }
      }
    ]
  }
}
