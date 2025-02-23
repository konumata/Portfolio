export const contactForm = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
  fields: {
    name: {
      label: 'お名前',
      required: true,
      type: 'text'
    },
    email: {
      label: 'メールアドレス',
      required: true,
      type: 'email'
    },
    company: {
      label: '会社名',
      required: false,
      type: 'text'
    },
    message: {
      label: 'お問い合わせ内容',
      required: true,
      type: 'textarea'
    }
  }
};