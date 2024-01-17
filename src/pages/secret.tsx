import Button from "@/components/button";
import { FormEvent, useState } from "react";

const SecretPage = () => {
	const password = "apa";

	const [inputPassword, setInputPassword] = useState("");

  const OnClick = (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert(inputPassword)
  }

	return (
		<div className="bg-primary">
      <form onSubmit={OnClick} className="bg-primaryDark">
			  <input type="password" id="password" onChange={(e) => setInputPassword(e.target.value)} />
			  <button className="#222222 rounded-md">TEST</button>
      </form>
		</div>
	);
};

export default SecretPage;
