import jwt from "jsonwebtoken";
import sendMail from "../mail/mail.js";
import { generate, verify } from "../utils/otp-ut.js";

// const replacements = {
//     subject: "",
//     title: "",
//     name: "",
//     organisation: "",
//     city: "",
//     state: ""
// }

export const generate_OTP = (req, res) => {
    const { email, replacements } = req.body;
    const otp = generate(email);
    sendMail(email, replacements.subject, "otp", { ...replacements, otp })
        .then(() => res.status(200).send({ msg: "OTP was sent successfully." }))
        .catch(() => res.status(401).send({ msg: "The email address does not exist." }));
};

export const verify_OTP = async (req, res) => {
    const { otp, email } = req.body;
    const result = verify(email, otp);
    if (result) {
        const token = await jwt.sign({ email }, process.env.JWT_SECRET_KEY);
        res.status(200).send({ msg: "OTP verification successful!", token });
    }
    else res.status(404).send({ msg: "Invalid OTP.", token: "" });
}