import axios from "axios";
import styles from "./feedback.module.scss";
import { useForm } from "react-hook-form";
const Feedback = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    axios.post("https://64dbcbc0593f57e435b16da2.mockapi.io/feedback", data);
  };
  return (
    <div>
      <h2 className={styles.feedBack_title}>Обратная связь</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.feedBack_form}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Имя"
            {...register("name", {
              required: "Поле обязательно к заполнению",
              pattern: {
                value: /^[А-Я][а-я]*/,
                message: "С заглавной буквы / только кирилица",
              },
            })}
          />
          <div className={styles.inputCheck}>
            {errors?.name && <p>{errors?.name?.message}</p>}
          </div>
        </div>

        <div className={styles.inputContainer}>
          <input
            type="tel"
            placeholder="Телефон"
            {...register("phone", {
              required: "Поле обязательно к заполнению",
              pattern: {
                value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                message: `Введите телефон в формате "+79261234567"`,
              },
            })}
          />
          <div className={styles.inputCheck}>
            {errors?.phone && <p>{errors?.phone?.message}</p>}
          </div>
        </div>

        <div className={styles.inputContainer}>
          <input
            type="email"
            placeholder="Почта"
            {...register("email", {
              required: "Поле обязательно к заполнению",
              pattern: {
                value:
                  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                message: "Введите корректный Email",
              },
            })}
          />
          <div className={styles.inputCheck}>
            {errors?.email && <p>{errors?.email?.message}</p>}
          </div>
        </div>

        <textarea
          placeholder="Комментарий"
          className={styles.textArea}
          cols="30"
          rows="10"
        ></textarea>
        <button className={styles.btn} type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
};
export default Feedback;
