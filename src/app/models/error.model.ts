export const ValidationMessages = {
  min(value: number): string {
    return `Ta pole musi posiadać minimum ${value} znaków`;
  },
  max(value: number): string {
    return `Ta pole nie może być dłuższe niż ${value} znaków`;
  },
  required: 'Ta pole jest wymagane',
  email: 'Wpisz poprawny adres email',
  number: 'Wpisz poprawny numer telefonu'
};
