<template>
  <div class="contact-form">
    <b-alert v-if="messageWasSentSuccessfully" class="mt-1" variant="success" show>
      Message was sent successfully!
    </b-alert>
    <b-alert v-if="messageWasSentError" class="mt-1" variant="danger" show>
      Something went wrong!
    </b-alert>
    <b-btn v-if="!isFormVisible && !messageWasSentSuccessfully" class="btn-send-message mt-1" @click="isFormVisible = !isFormVisible">
      Send me a message
    </b-btn>
    <b-form v-if="isFormVisible" class="contact__form">
      <b-form-input
        v-model="formData.subject"
        class="mt-1 mb-3 input-custom-color"
        type="text"
        maxlength="50"
        placeholder="Subject"
      />
      <b-form-textarea
        v-model="formData.body"
        class="input-custom-color"
        placeholder="Enter a message..."
        maxlength="2000"
        rows="3"
        max-rows="6"
      />
      <div class="mt-3">
        <b-btn loading class="btn-send-message" :disabled="!isSendable" @click="sendEmail">
          <span v-if="!isSendLoading">Send</span>
          <b-spinner v-else small label="Spinning" />
        </b-btn>
        <b-btn class="btn-close-message" @click="isFormVisible = !isFormVisible">
          Close
        </b-btn>
      </div>
    </b-form>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import { sendContactEmail } from '~/utils'
export default {
  setup () {
    const isFormVisible = ref(false)
    const formData = ref({
      subject: '',
      body: ''
    })
    const isSendLoading = ref(false)
    const messageWasSentSuccessfully = ref(false)
    const messageWasSentError = ref(false)

    const isSendable = computed(() => {
      return formData.value.subject.length > 0 && formData.value.body.length > 0
    })

    const sendEmail = async () => {
      try {
        isSendLoading.value = true
        await sendContactEmail(formData.value.subject, formData.value.body)
        formData.value.subject = ''
        formData.value.body = ''
        isFormVisible.value = false
        messageWasSentSuccessfully.value = true
        setTimeout(() => {
          messageWasSentSuccessfully.value = false
        }, 5000)
      } catch (_) {
        messageWasSentError.value = true
        setTimeout(() => {
          messageWasSentError.value = false
        }, 5000)
      } finally {
        isSendLoading.value = false
      }
    }
    return { sendEmail, isFormVisible, formData, isSendable, isSendLoading, messageWasSentSuccessfully, messageWasSentError }
  }
}
</script>

<style scoped lang="scss">
.contact-form {
    .contact__form {
        max-width: 600px;
    }

    .btn-send-message {
        width: 230px;
        background-color: rgb(0, 131, 100);
        border-color: rgb(0, 131, 100);
    }

    .input-custom-color {
        background-color: rgb(62, 62, 62);
        border-color: rgb(62, 62, 62);
        color: white;
        &::placeholder {
            color: rgb(130, 130, 130);
        }
    }

    .btn-close-message {
        width: 120px;
    }
}
</style>
