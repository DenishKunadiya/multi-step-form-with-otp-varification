import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Names } from "../stepForm/Names";
import { Address } from "../stepForm/Address";
// import { Contact } from "../stepForm/Contact";
// import { Review } from "../stepForm/Review";
import { Submit } from "../stepForm/Submit";

const defaultData = {
  phone: "",
  otp: "",
  username: "",
  password: "",
  image: null,
};

const steps = [{ id: "names" }, { id: "address" }];

const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "names":
      return <Names {...props} />;
    case "address":
      return <Address {...props} />;
  }

  return (
    <div>
      <h1> Register Form </h1>{" "}
    </div>
  );
};
export default MultiStepForm;
