import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IMessage } from "../../@Types/types";
import { sendMessage } from "../../services/message-service";
import dialogs from "../../ui/dialogs";
import patterns from "../../validations/patterns";


const StudioContactHebrew = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IMessage>({
        defaultValues: { fullName: "", email: "", phone: "", message: "" },
        mode: "onChange",
    });

    const onSend = (data: IMessage) => {
        console.log("Send data:", data);
        sendMessage(data)
            .then(() => {
                dialogs.success("ההודעה נשלחה", "ההודעה שלך נשלחה בהצלחה.");
                navigate("/");
            })
            .catch((error) => {
                dialogs.error("שגיאה בשליחת ההודעה", error.response.data);
            });
    };

    return (
        <div className="contact-container-heb">
            <form
                noValidate
                onSubmit={handleSubmit(onSend)}
                className="contact-form-heb"
            >
                <h2 className="contact-title-heb">צור קשר</h2>

                {/* Full Name */}
                <section>
                    <input
                        placeholder="שם מלא"
                        type="text"
                        className="contact-input-heb"
                        {...register("fullName", {
                            required: "נא להזין שם מלא",
                            minLength: { value: 2, message: "שם קצר מדי, לפחות 2 תווים" },
                            maxLength: { value: 255, message: "שם ארוך מדי" },
                        })}
                    />
                    {errors.fullName && (
                        <p className="errorMessage">{errors.fullName?.message}</p>
                    )}
                </section>

                {/* Email */}
                <section>
                    <input
                        placeholder="מייל"
                        type="email"
                        className="contact-input-heb"
                        {...register("email", {
                            required: "נא להזין כתובת מייל",
                            pattern: {
                                value: patterns.email,
                                message: "כתובת מייל לא תקינה",
                            },
                        })}
                    />
                    {errors.email && (
                        <p className="errorMessage">{errors.email?.message}</p>
                    )}
                </section>

                {/* Phone */}
                <section>
                    <input
                        placeholder="טלפון"
                        type="tel"
                        className="contact-input-heb"
                        {...register("phone", {
                            required: "נא להזין מספר טלפון",
                            pattern: {
                                value: patterns.phone,
                                message: "מספר טלפון לא תקין",
                            },
                        })}
                    />
                    {errors.phone && (
                        <p className="errorMessage">{errors.phone?.message}</p>
                    )}
                </section>

                {/* Message */}
                <section>
                    <textarea
                        placeholder="הודעה"
                        className="contact-input-heb"
                        rows={1}
                      
                    />
                    {errors.message && (
                        <p className="errorMessage">{errors.message?.message}</p>
                    )}
                </section>

                <button
                    type="submit"
                    className="contact-button-heb"
                >
                    בואו נתחיל
                </button>
            </form>
        </div>
    );
};

export default StudioContactHebrew;
