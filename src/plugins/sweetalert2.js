import Swal from 'sweetalert2'
// import 'sweetalert2/dist/sweetalert2.css'
const swal = {}
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
})

swal.success = (options, toast = false) => {
  if (toast) {
    return Toast.fire({
      icon: 'success',
      title: options.text,
    })
  }

  Swal.fire({
    icon: 'success',
    title: options.title || 'Successful',
    text: options.text,
  })
}

swal.error = (options, toast = false) => {
  if (toast) {
    return Toast.fire({
      icon: 'error',
      title: options.text,
    })
  }

  Swal.fire({
    icon: 'error',
    title: options.title || 'Oops...',
    text: options.text,
  })
}

swal.warning = (options, toast = false) => {
  if (toast) {
    return Toast.fire({
      icon: 'warning',
      title: options.text,
    })
  }

  Swal.fire({
    icon: 'warning',
    title: options.title || 'Warning',
    text: options.text,
  })
}

swal.info = (options, toast = false) => {
  if (toast) {
    return Toast.fire({
      icon: 'info',
      title: options.text,
    })
  }

  Swal.fire({
    icon: 'info',
    title: options.title || 'Information',
    text: options.text,
  })
}

swal.info = (options, toast = false) => {
  if (toast) {
    return Toast.fire({
      icon: 'question',
      title: options.text,
    })
  }

  Swal.fire({
    icon: 'question',
    title: options.title || 'Question',
    text: options.text,
  })
}

swal.confirm = (options) => {
  Swal.fire({
    title: options.title || 'Are you sure?',
    text: options.text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
  })
}

swal.fire = (options) => Swal.fire(options)

export default {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, '$swal', { value: swal })
  },
}
