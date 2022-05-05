# Generating an OTP
ENDPOINT = https://otp-nk.herokuapp.com/otp/generate \
Type = POST\
Body = {\
    &emsp;"email":"",\
    &emsp;"replacements":{\
        &emsp;&emsp;"subject": "",\
        &emsp;&emsp;"title": "",\
        &emsp;&emsp;"name": "",\
        &emsp;&emsp;"organisation": "",\
        &emsp;&emsp;"city": "",\
        &emsp;&emsp;"state": ""\
    &emsp;}\
}\
Response:\
&emsp;Success = { msg: "OTP was sent successfully." }\
&emsp;Faiure = { msg: "The email address does not exist." }\

# Verifying an OTP
ENDPOINT = https://otp-nk.herokuapp.com/otp/verify \
Type = POST\
Body = {\
    &emsp;"email":"",\
    &emsp;"otp":""\
}\
Response:\
&emsp;Success = { msg: "OTP verification successful!", token: "A JSON Web Token" }\
&emsp;Faiure = { msg: "Invalid OTP.", token: "" }
