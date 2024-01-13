import { useState } from "react";
// import "./form.css";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
import styled from "styled-components";

function Form() {
	const [firstName, setfirstName] = useState("");
	const [lastName, setlastName] = useState("");
	const [email, setEmail] = useState("");
	// const [phoneNumber, setphoneNumber] = useState("");
	const [courses, setCourses] = useState("");
	const [additionalInformation, setadditionalInformation] = useState("");
	const [paymentOptions, setpaymentOptions] = useState("");
	const [isLoading, setisLoading] = useState(false);
	const details = {
		firstName,
		lastName,
		email,
		// phoneNumber,
		courses,
		additionalInformation,
		paymentOptions,
	};

	const [value, setValue] = useState();

	const RegisterStudent = async (payload) => {
		try {
			setisLoading(true);
			const response = await fetch("http://194.32.79.199:5000/register", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			});
			const data = await response.json();
			console.log(data);
			setisLoading(false);
		} catch (err) {
			console.log(err);
			setisLoading(false);
		}
	};

	const handler = (e) => {
		e.preventDefault();
		// alert("successful")
		console.log(details);
		RegisterStudent(details);
	};

	return (
		<FormWrapper>
			<form onSubmit={handler}>
				<section className="forms">
					<div className="names">
						<li className="form-details">
							<label>
								FirstName <sup>*</sup>{" "}
							</label>{" "}
							<input
								required
								placeholder="John"
								type="text"
								onChange={(e) => setfirstName(e.target.value)}
							/>
						</li>

						<li className="form-details">
							<label>
								LastName<sup>*</sup>
							</label>
							<input
								required
								placeholder="Doe"
								type="text"
								onChange={(e) => setlastName(e.target.value)}
							/>
						</li>
					</div>

					<div className="contact-details">
						<li className="form-details">
							<label htmlFor="email">
								Email Address<sup>*</sup>
							</label>
							<input
								required
								placeholder="johndoe@gmail.com"
								type="text"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</li>
						<li className="form-details">
							<label htmlFor="phone">
								Phone Number<sup>*</sup>
							</label>
							<required
								placeholder="Enter phone number"
								value={value}
								onChange={setValue}
								// onChange={(e) => setphoneNumber(e.target.value)}
							/>
						</li>
					</div>

					<div className="selectArea">
						<li className="form-details">
							<label>
								Courses <sup>*</sup>
							</label>{" "}
							<select
								// value={courses}
								onChange={(e) => setCourses(e.target.value)}>
								<option value="Backend_web_development">
									Backend Web Development
								</option>
								<option value="Mobile_development">Mobile Development</option>
								<option value="Frontend_web_development">
									Frontend Web Development
								</option>
							</select>
						</li>
						<li className="form-details">
							<label>
								Select Payment Option <sup>*</sup>
							</label>
							<select
								// value={courses}
								onChange={(e) => setpaymentOptions(e.target.value)}>
								<option value="Zero_cost">Zero-Cost</option>
								<option value="One_off_payment_with_discount">
									One-off Payment
								</option>
								<option value="Installment_payment">
									{" "}
									Installment payment
								</option>
							</select>
						</li>
					</div>
					<div className="form-details">
						<label>Additional Information(Optional)</label>
						<textarea
							className="comment"
							value={additionalInformation}
							onChange={(e) =>
								setadditionalInformation(e.target.value)
							}></textarea>
					</div>
				</section>
				<button type="submit" className="btN">
					{isLoading ? "processing..." : "Submit"}
				</button>
			</form>
		</FormWrapper>
	);
}

export default Form;
const FormWrapper = styled.form`
	@media screen and (max-width: 40em) {
		.comment {
			width: 100%;
		}
		.forms {
			margin-block: 20px;
		}
		li {
			list-style: none;
		}

		.form-details input {
			outline: none;
			border: 0;
			border-bottom: 2px solid black;
		}

		.form-details {
			display: flex;
			flex-direction: column;
			gap: 20px;
			padding-block: 10px;
		}
		.form-details select,
		.comment {
			outline: none;
			border: 0;
			border-bottom: 2px solid black;
		}
		.comment {
			width: 100%;
			margin-block-end: 10px;
		}
		.btN {
			background: #61d0ff;
			color: #fff;
			border-radius: 4px;
			border: 1px solid #61d0ff;
			font-size: 15px;
			padding: 8px 15px;
		}
	}

	@media screen and (min-width: 40em) {
		option {
			font-size: 14px;
		}
		.names {
			flex-direction: column;
		}
		.form-details select,
		.comment {
			outline: none;
			border: 0;
			border-bottom: 2px solid black;
		}
		li {
			font-size: 22px;
			list-style: none;
		}
		.form-details .PhoneInput {
			width: 300px;
		}
		.form-details input {
			width: 300px;
			outline: none;
			border: 0;
			border-bottom: 2px solid black;
		}
		.form-details {
			padding-block: 20px;
			display: flex;
			flex-direction: column;
			gap: 40px;
		}
		.form-details option {
		}

		select {
			font-size: 17px;
		}
		.selectArea {
			display: flex;
			flex-direction: row;
			gap: 60px;
			/* justify-content: space-between; */
		}

		input::placeholder {
			font-size: 17px;
			padding-inline-start: 10px;
			color: #b6b3b3;
		}

		.btN {
			cursor: pointer;
			display: flex;
			justify-content: center;
			background: #8fe6f1;
			color: #fff;
			border-radius: 4px;
			border: 1px solid #8fe6f1;
			font-size: 15px;
			padding: 8px 15px;
		}

		.contact-details {
			display: flex;
			gap: 60px;
		}
		.names {
			display: flex;
			flex-direction: row;
			gap: 60px;
		}

		.comment {
			width: 100%;
		}
		select {
			width: 300px;
		}
	}
`;
