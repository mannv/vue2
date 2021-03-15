import CheckboxGroup from '@/components/Form/checkbox-group/index'
import DatePicker from '@/components/Form/date-picker/index'
import ErrorMessage from '@/components/Form/error-message/index'
import Field from '@/components/Form/field/index'
import File from '@/components/Form/file/index'
import RadioGroup from '@/components/Form/radio-group/index'
import Select from '@/components/Form/select/index'
import Switch from '@/components/Form/switch/index'

const components = [
  CheckboxGroup,
  DatePicker,
  ErrorMessage,
  Field,
  File,
  RadioGroup,
  Select,
  Switch,
]

export default {
  install: function (Vue) {
    _.forEach(components, (component) => {
      Vue.component(component.name, component)
    })
  },
}
