export const formatPhone = (phone, setState) => {
    const maskedPhone = phone.replace(/\D/g, '')
    .replace(/(\d{2})(\d)(\d{4})(\d{4})$/, '($1) $2 $3-$4');

    setState(maskedPhone);
};

export function cpfMask(value, setState) {
    const maskedCpf = value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");

    setState(maskedCpf);
  }