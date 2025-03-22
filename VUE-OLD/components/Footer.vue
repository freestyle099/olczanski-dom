<template>
  <footer
    id="kontakt"
    class="footer"
  >
    <div class="footer__background">
      <img
        class="footer__image"
        :src="src"
        :alt="alt"
        :srcSet="webpSrcSet"
      />
    </div>
    <div class="footer__filter" />
    <div class="container">
      <h2 class="footer__title heading-2">Kontakt</h2>
      <div class="footer__content">
        <ValidationObserver
          ref="form"
          v-slot="{ handleSubmit, failed, invalid }"
        >
          <div
            v-if="message.text !== ''"
            :class="
              message.type === 'success' ? 'footer__success' : 'footer__failed'
            "
          >
            {{ message.text }}
          </div>
          <form
            class="footer__form"
            @submit.prevent="handleSubmit(onSubmit)"
          >
            <Input
              v-model="form.fullName"
              name="firstName"
              rules="required|min:3|max:100"
              placeholder="Imię i nazwisko"
            />
            <Input
              v-model="form.email"
              name="email"
              label="Adres Email"
              rules="required|email"
              placeholder="Adres email"
            />
            <Input
              v-model="form.phone"
              name="phone"
              rules="required|min:9|max:12"
              placeholder="Numer telefonu"
            />
            <Textarea
              v-model="form.message"
              label="Treść wiadomości"
              rules="required|min:10|max:1000"
              placeholder="Treść wiadomości"
              name="message"
            />
            <Button
              class="footer__button"
              type="submit"
              :disabled="failed && invalid"
            >
              {{ isSubmitting ? 'Wysyłanie...' : 'Wyślij' }}
            </Button>
          </form>
        </ValidationObserver>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.002153019983!2d19.992228215741996!3d49.31424287933477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715f245681ffb03%3A0x5b7d715a20be8387!2sStachonie+24b%2C+34-500+Zakopane!5e0!3m2!1spl!2spl!4v1548857127107"
          allowFullScreen
          class="footer__map"
        />
      </div>
      <div class="footer__copyright">
        <p>Copyright {{ new Date().getFullYear() }} &copy; | Olczański Dom</p>
        <div class="footer__info">
          <p>Znajdź nas na:</p>
          <a
            target="_blank"
            href="http://www.booking.com/Share-D2gu71"
          >
            <img
              src="/booking.png"
              class="footer__icon"
              alt=""
            />
          </a>
          <a
            target="_blank"
            href="https://www.google.com/search?source=hp&ei=FPJSXMj_HtHMwAKt3IvYCQ&q=olcza%C5%84ski+dom&btnK=Szukaj+w+Google&oq=olcza%C5%84ski+dom&gs_l=psy-ab.3..35i39j0i22i30.164.2211..2377...2.0..1.214.1786.0j13j1......0....1..gws-wiz.....0..0i131j0i67j0i10j0.w4iTbGyhOds#btnK=Szukaj%20w%20Google"
          >
            <img
              src="/Google_plus_icon.svg"
              class="footer__icon"
              alt=""
            />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/olczanskidom/"
          >
            <img
              src="/facebook.png"
              class="footer__icon"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ValidationObserver } from 'vee-validate';

export default {
  name: 'Footer',
  components: {
    ValidationObserver,
    Button: () => import('@/components/Button'),
    Input: () => import('@/components/forms/Input'),
    Textarea: () => import('@/components/forms/Textarea'),
  },
  props: {
    src: { type: String, default: '' },
    webpSrcSet: { type: String, default: '' },
    alt: { type: String, default: '' },
  },
  data() {
    return {
      isSubmitting: false,
      message: {
        type: '',
        text: '',
      },
      form: {
        fullName: '',
        phone: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    openDialog(type, text) {
      this.message = {
        type,
        text,
      };
      this.closeDialog();
    },
    closeDialog() {
      setTimeout(() => {
        this.message = {
          type: '',
          text: '',
        };
      }, 5000);
    },
    onSubmit() {
      this.isSubmitting = true;
      this.$axios
        .post('/contact', this.form)
        .then(() => {
          this.isSubmitting = false;
          this.form = {
            fullName: '',
            email: '',
            phone: '',
            message: '',
          };
          this.$refs.form.reset();
          this.openDialog('success', 'Wiadomość została wysłana pomyślnie!');
        })
        .catch(() => {
          this.isSubmitting = false;
          this.openDialog(
            'failed',
            'Coś poszło nie tak spróbuj ponownie później.',
          );
        });
    },
  },
};
</script>

<style scoped lang="scss">
@use '@/assets/breakpoints' as bp;

.footer {
  position: relative;
  padding: 3.125rem 0;
  &__background,
  &__filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &__background {
    z-index: -2;
  }
  &__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &__filter {
    background-color: var(--recommend-color);
    z-index: -1;
  }
  &__title {
    color: var(--white-color);
    text-align: center;
    margin-bottom: 2rem;
  }
  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    @media screen and (max-width: bp.$md) {
      grid-template-columns: 1fr;
    }
  }
  &__success,
  &__failed {
    color: var(--white-color);
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 4px;
    font-weight: 700;
  }
  &__success {
    background-color: var(--success-color);
  }
  &__failed {
    background-color: var(--error-color);
  }
  &__form {
    display: grid;
    gap: 1rem;
  }
  &__map {
    width: 100%;
    border: none;
    height: 100%;
    @media screen and (max-width: bp.$md) {
      height: 50vw;
    }
    @media screen and (max-width: bp.$sm) {
      height: 80vw;
    }
  }
  &__button {
    border: none !important;
    background-color: var(--primary-color-rgba) !important;
  }
  &__copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--white-color);
    margin-top: 2rem;
    font-size: 0.875rem;
    @media screen and (max-width: bp.$sm) {
      flex-direction: column-reverse;
    }
  }
  &__info {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 1rem;
    @media screen and (max-width: bp.$sm) {
      margin-bottom: 2rem;
    }
  }
  &__icon {
    height: 40px;
  }
}
</style>
