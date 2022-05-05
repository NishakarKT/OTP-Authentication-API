# Generating an OTP
ENDPOINT = https://otp-nk.herokuapp.com/otp/generate 
Type = POST
Body = {
    "email":"",
    "replacements":{
        "subject": "",
        "title": "",
        "name": "",
        "organisation": "",
        "city": "",
        "state": ""
    }
}
Response:
Success = { msg: "OTP was sent successfully." }
Faiure = { msg: "The email address does not exist." }

# Verifying an OTP
ENDPOINT = https://otp-nk.herokuapp.com/otp/verify 
Type = POST
Body = {
    "email":"",
    "otp":""
}
Response:
Success = { msg: "OTP verification successful!", token: "A JSON Web Token" }
Faiure = { msg: "Invalid OTP.", token: "" }