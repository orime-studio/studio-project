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
                dialogs.success("Message Sent", "Your message has been sent successfully.");
                navigate("/");
            })
            .catch((error) => {
                dialogs.error("Message Error", error.response.data);
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
                        placeholder="Full Name"
                        type="text"
                        className="contact-input-heb"
                        {...register("fullName", {
                            required: "This field is mandatory",
                            minLength: { value: 2, message: "Too short" },
                            maxLength: { value: 255, message: "Too long" },
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
                            required: "This field is mandatory",
                            pattern: {
                                value: patterns.email,
                                message: "Invalid email",
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
                            required: "This field is mandatory",
                            pattern: {
                                value: patterns.phone,
                                message: "Invalid phone number",
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

                        {...register("message", {
                            required: "This field is mandatory",
                            minLength: { value: 5, message: "Too short" },
                            maxLength: { value: 500, message: "Too long" },
                        })}
                    />
                    {errors.message && (
                        <p className="errorMessage">{errors.message?.message}</p>
                    )}
                </section>

                <button

                    type="submit"
                    className="contact-button-heb"
                >
                    בוא נתחיל
                </button>
            </form>
        </div>
    );
};

export default StudioContactHebrew;